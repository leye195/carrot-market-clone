import { NextApiRequest, NextApiResponse } from "next";

type Method = "GET" | "POST" | "PUT" | "DELETE";

type ConfigType = {
  method: Method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
};

export type ResponseType = {
  ok: boolean;
  [key: string]: any;
};

export default function withHandler({
  method,
  handler,
  isPrivate = false,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !method.includes(req.method as Method)) {
      return res.status(405).end();
    }

    if (isPrivate && !req.session.user) {
      return res.json({
        ok: false,
        error: "please login",
      });
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
