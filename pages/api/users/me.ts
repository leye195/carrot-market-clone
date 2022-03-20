import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  return res.status(200).json({
    ok: true,
    profile: {
      ...profile,
    },
  });
}

export default withApiSession(
  withHandler({ method: "GET", handler, isPrivate: true })
);
