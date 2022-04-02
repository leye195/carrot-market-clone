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
      session: { user },
    } = req;

    const post = await client.post.findUnique({
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
        answers: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
        _count: {
          select: {
            wonderList: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({
        ok: false,
        error: "post not found",
      });
    }

    const isWondering = !!(await client.wondering.findFirst({
      where: {
        postId: +id,
        userId: user?.id,
      },
    }));

    return res.status(200).json({
      ok: true,
      post,
      isWondering,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["GET"], handler, isPrivate: true })
);
