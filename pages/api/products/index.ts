import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const products = await client.product.findMany({});

    return res.status(200).json({
      ok: true,
      products,
    });
  } else if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;

    const product = await client.product.create({
      data: {
        name,
        description,
        price: +price,
        userId: user!.id,
        image: "xx",
      },
    });

    return res.status(200).json({
      ok: true,
      product,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["POST", "GET"], handler, isPrivate: true })
);
