import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { user } = req.session;

  const reviews = await client.review.findMany({
    where: {
      createdForId: user?.id,
    },
    include: {
      createdBy: { select: { id: true, name: true, avatar: true } },
    },
  });

  return res.status(200).json({
    ok: true,
    reviews,
  });
}

export default withApiSession(
  withHandler({ method: ["GET"], handler, isPrivate: true })
);
