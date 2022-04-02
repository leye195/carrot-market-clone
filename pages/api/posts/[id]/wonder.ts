import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;

  const isExist = await client.wondering.findFirst({
    where: {
      postId: +id,
      userId: user?.id,
    },
  });

  if (isExist) {
    await client.wondering.delete({
      where: {
        id: isExist.id,
      },
    });
  } else {
    await client.wondering.create({
      data: {
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
  }

  return res.status(200).json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ method: ["POST"], handler, isPrivate: true })
);
