import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import nodemailer from "nodemailer";
import client from "lib/server/client";
import withHandler, { ResponseType } from "lib/server/withHandler";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PW,
  },
});

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  const payload = Math.floor(10000 + Math.random() * 900000) + "";

  if (!user) return res.status(400).json({ ok: false });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { ...user },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
      to: process.env.PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
  } else if (email) {
    const sendEmail = await transporter
      .sendMail({
        from: `Carrot <leye19556@gmail.com>`,
        to: email,
        subject: "Carrot Market Verification Email",
        text: `Your login token is ${payload}`,
        html: `
        <div style="text-align: center;">
          <h3 style="color: #FA5882">Carrot</h3>
          <br />
          <p>your login token is <b>${payload}</b></p>
        </div>`,
      })
      .then((result) => console.log(result));
  }

  return res.status(200).json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler });
