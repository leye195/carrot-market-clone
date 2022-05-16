import { NextApiResponse, NextApiRequest } from "next";
import withHandler, { ResponseType } from "lib/server/withHandler";
import client from "lib/server/client";
import withApiSession from "lib/server/withSesstion";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      body: { question, lat, lng },
      session: { user },
    } = req;

    const post = await client.post.create({
      data: {
        question,
        lat,
        lng,
        userId: +user!.id,
      },
    });

    return res.status(200).json({
      ok: true,
      post,
    });
  } else if (req.method === "GET") {
    const {
      query: { lat, lng },
    } = req;

    const parsedLatitude = parseFloat(lat.toString());
    const parsedLongitude = parseFloat(lng.toString());

    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            answers: true,
            wonderList: true,
          },
        },
      },
      where: {
        // 범위 검색
        lat: {
          gte: parsedLatitude - 0.05,
          lte: parsedLatitude + 0.05,
        },
        lng: {
          gte: parsedLongitude - 0.05,
          lte: parsedLongitude + 0.05,
        },
      },
    });

    return res.status(200).json({
      ok: true,
      posts,
    });
  }
}

export default withApiSession(
  withHandler({ method: ["POST", "GET"], handler, isPrivate: true })
);
