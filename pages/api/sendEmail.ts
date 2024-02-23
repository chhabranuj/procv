import nodemailer from "nodemailer";
import { promises as fs } from "fs";

const SendMail = async (req: any, res: any) => {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "procv.contact@gmail.com",
        pass: process.env.emailPassword,
      },
      secure: true,
    });

    const file = await fs.readFile(
      process.cwd() + `/public/static/${req.body.type}.html`,
      "utf8"
    );

    const mailData = {
      from: "Support Team (ProCv)",
      to: req.body.to,
      subject: req.body.subject,
      html: file,
    };

    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.json({ ok: true, error: false });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error: true });
  }
};

export default SendMail;
