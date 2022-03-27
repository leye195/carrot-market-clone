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
      body: { question },
      session: { user },
    } = req;

    const post = await client.post.create({
      data: {
        question,
        userId: +user!.id,
      },
    });

    return res.status(200).json({
      ok: true,
      post,
    });
  } else if (req.method === "GET") {
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            answers: true,
            wonderList: true,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      posts,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["POST", "GET"], handler, isPrivate: true })
);
