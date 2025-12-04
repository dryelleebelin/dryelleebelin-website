import "dotenv/config";
import { Router } from "express";
import { Resend } from "resend";
import { contactEmailTemplate } from "../templates/contactEmail";
import type { ContactData } from "../types/contact.ts";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, subject, message }: ContactData = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos."
    });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Dryelle Ebelin <no-reply@resend.dev>",
      to: "dryellesilva07@gmail.com",
      subject: subject,
      html: contactEmailTemplate({ name, email, subject, message })
    });

    return res.status(200).json({
      success: true,
      message: "Email enviado com sucesso!"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar e-mail."
    });
  }
});

export default router;
