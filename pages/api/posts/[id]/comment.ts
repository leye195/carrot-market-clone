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

    const comment = await client.answer.create({
      data: {
        answer,
        userId: user!.id,
        postId: +id,
      },
    });

    return res.status(200).json({
      ok: true,
      comment,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["POST"], handler, isPrivate: true })
);
