import { withIronSessionApiRoute } from "iron-session/next";

const cookieOptions = {
  cookieName: "loginsession",
  password: process.env.COOKIE_PASSWORD!,
};

export default function withSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
