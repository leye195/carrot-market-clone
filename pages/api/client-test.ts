import { NextApiRequest, NextApiResponse } from "next";
import client from "lib/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "test@test.com",
      name: "hi",
    },
  });

  return res.status(200).json({
    ok: true,
  });
}
