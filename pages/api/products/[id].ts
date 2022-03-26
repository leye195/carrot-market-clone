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

    const product = await client.product.findUnique({
      where: {
        id: +id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
    const terms = product?.name.split(" ").map((word) => ({
      name: {
        contains: word,
      },
    }));

    const relatedProducts = await client.product.findMany({
      where: {
        AND: {
          id: {
            not: product?.id,
          },
        },
        OR: terms,
      },
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        updatedAt: true,
      },
    });
    console.log(relatedProducts);

    return res.status(200).json({
      ok: true,
      product,
      relatedProducts,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["GET"], handler, isPrivate: true })
);
