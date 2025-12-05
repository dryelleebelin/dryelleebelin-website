import { useState } from "react";
import { api } from "../utils/api";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.warning("Preencha todos os campos.");
      return;
    }

    if(!isValidEmail(email)){
      toast.warning("Digite um e-mai válido.");
      return;
    }

    try {
      setLoadingButton(true);

      const response = await api.post("/contact", {
        name: name,
        email: email,
        subject: subject,
        message: message
      });

      console.log(response.data)

      if (response.status === 200 || response.data.success === true) {
        toast.success("Mensagem enviada com sucesso!");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }

    } catch (err: any) {
      if (err.response) {
        toast.error("Erro na solicitação.");
      }
      else if (err.request) {
        //cold start - resend free
        setTimeout(() => handleSubmit(e), 1500);
        return;
      }
      else {
        toast.error("Erro inesperado ao enviar a mensagem.");
      }

    } finally {
      setLoadingButton(false);
    }
  }

  return (
    <div className="py-12 md:py-20 px-6 md:px-22 flex flex-col gap-4">
      <h3 className="text-gray-300 font-bold text-xl md:text-2xl">Entre em contato</h3>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row w-full gap-6 md:gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <label className="font-medium">Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/9 rounded-sm border border-white/10 p-2 text-gray-300 text-sm focus:border-violet-400 outline-none transition-all"
              placeholder="Digite seu nome"
              maxLength={50}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <label className="font-medium">E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/9 rounded-sm border border-white/10 p-2 text-gray-300 text-sm focus:border-violet-400 outline-none transition-all"
              placeholder="Digite seu e-mail"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Assunto:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-white/9 rounded-sm border border-white/10 p-2 text-gray-300 text-sm focus:border-violet-400 outline-none transition-all"
            placeholder="Assunto da mensagem"
            maxLength={80}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Mensagem:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white/9 md:h-40 h-56 rounded-sm border border-white/10 p-2 text-gray-300 text-sm focus:border-violet-400 outline-none transition-all"
            placeholder="Digite sua mensagem..." />
        </div>

        <button
          type="submit"
          disabled={loadingButton}
          className="bg-indigo-900 rounded-sm h-9 w-40 md:w-46 text-sm font-semibold flex items-center justify-center hover:text-gray-300 hover:bg-indigo-800 transition-all shadow-md cursor-pointer disabled:cursor-not-allowed"
        >
          {loadingButton ? (
            <Loader2 className="animate-spin"/>
          ) : (
            "Enviar mensagem"
          )}
        </button>
      </form>
    </div>
  )
}