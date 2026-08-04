import "dotenv/config";
import { Router } from "express";
import { Resend } from "resend";
import { contactEmailTemplate } from "../templates/contactEmail";
import type { ContactData } from "../types/contact.ts";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ??
  "Portfolio Dryelle Ebelin <no-reply@resend.dev>";

router.post("/", async (req, res) => {
  if (!CONTACT_TO) {
    console.error("CONTACT_TO_EMAIL não configurado.");
    return res.status(500).json({
      success: false,
      message: "Servidor de e-mail não configurado.",
    });
  }

  const { name, email, subject, message }: ContactData = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos.",
    });
  }

  try {
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      html: contactEmailTemplate({ name, email, subject, message }),
    });

    return res.status(200).json({
      success: true,
      message: "Email enviado com sucesso!",
    });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar e-mail.",
    });
  }
});

export default router;
