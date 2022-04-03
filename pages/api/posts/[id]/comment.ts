import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      query: { id },
      body: { answer },
      session: { user },
    } = req;

    const isExist = await client.wondering.findFirst({
      where: {
        postId: +id,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    });

    if (!isExist) {
      return res.status(404).json({
        ok: false,
        error: "post not found",
      });
    }

    const comment = await client.answer.create({
      data: {
        answer,
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +id,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      comment,
    });
  } else if (req.method === "GET") {
    const {
      query: { id },
      session: { user },
    } = req;
    const answers = await client.answer.findMany({
      where: {
        user: {
          id: user?.id,
        },
        post: {
          id: +id,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      answers,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["POST", "GET"], handler, isPrivate: true })
);
