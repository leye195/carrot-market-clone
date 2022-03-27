import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;

    const product = await client.post.findUnique({
      where: {
        id: +id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
            updatedAt: true,
            createdAt: true,
          },
        },
      },
    });

    return res.status(200).json({
      ok: true,
      product,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["GET"], handler, isPrivate: true })
);
