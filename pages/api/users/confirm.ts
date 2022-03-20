import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const tokenExists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!tokenExists) {
    return res.status(404).end();
  }

  req.session.user = {
    id: tokenExists?.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: tokenExists.userId,
    },
  });

  return res.status(200).json({
    ok: true,
  });
}

export default withApiSession(withHandler({ method: "POST", handler }));
