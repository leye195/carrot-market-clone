import { withIronSessionApiRoute } from "iron-session/next";

import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!exists) {
    return res.status(404).end();
  }
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();

  return res.status(200).json({
    ok: true,
  });
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "loginsession",
  password: process.env.COOKIE_PASSWORD!,
});
