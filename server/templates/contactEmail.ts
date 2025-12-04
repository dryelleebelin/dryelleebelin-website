import type { ContactData } from "../types/contact";

export function contactEmailTemplate(data: ContactData) {
  return `
    <div style="font-family:Inter, Arial; background:#ffffff; border:1px solid #e5e7eb; border-radius:10px; max-width:540px; margin:auto;">
      <div style="height:6px; background:#7c3aed; border-radius:10px 10px 0 0;"></div>
      
      <div style="text-align:center;">
        <img src="http://dryelleebelin.vercel.app/favicon.png" alt="Logo" width="12%" style="border-radius:5%; margin-top:24px;"/>
      </div>

      <div style="padding:24px;">
        <h3 style="margin:0 0 12px 0;">Nova mensagem</h3>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${data.subject}</p>
        
        <div style="margin-top: 16px; padding: 12px; background:white; border-radius:6px; border-left:4px solid #7c3aed;">
          <strong>Mensagem:</strong>
          <p style="margin: 6px 0 0 0; white-space: pre-line;">${data.message}</p>
        </div>

        <hr style="border:0; border-top:1px solid #e5e7eb; margin:20px 0;">
        <p style="font-size:12px; text-align:center; color:#9ca3af;">Enviado pelo formulário do portfólio de Dryelle Ebelin.</p>
      </div>
    </div>
  `
}