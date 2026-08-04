import { useId, useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { api } from "../utils/api";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2500;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const { t: tr } = useLanguage();
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitPayload(retriesLeft: number): Promise<void> {
    try {
      const response = await api.post("/contact", {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 200 || response.data?.success === true) {
        toast.success(tr(t.contact.toasts.success));
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(tr(t.contact.toasts.errorGeneric));
      }
    } catch (err) {
      const anyErr = err as {
        response?: unknown;
        request?: unknown;
      };

      if (anyErr.response) {
        toast.error(tr(t.contact.toasts.errorRequest));
        return;
      }

      if (anyErr.request && retriesLeft > 0) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
        return submitPayload(retriesLeft - 1);
      }

      toast.error(tr(t.contact.toasts.errorNetwork));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.warning(tr(t.contact.validation.allFields));
      return;
    }

    if (!isValidEmail(email)) {
      toast.warning(tr(t.contact.validation.invalidEmail));
      return;
    }

    setLoading(true);
    try {
      await submitPayload(MAX_RETRIES);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-12 flex flex-col gap-6">
      <SectionHeading
        eyebrow="07"
        title={tr(t.headings.contact)}
        id="contact-heading"
      />

      <p className="text-sm md:text-base leading-relaxed max-w-2xl">
        {tr(t.contact.intro)}{" "}
        <a
          href="https://www.linkedin.com/in/dryelleebelin"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gray-200 hover:text-violet-400 transition-colors underline underline-offset-4 decoration-violet-400/40"
        >
          LinkedIn
        </a>
        .
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <label htmlFor={nameId} className="text-sm font-medium text-gray-300">
              {tr(t.contact.fields.name)}
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 rounded-md border border-white/10 p-2.5 text-gray-100 text-sm placeholder:text-gray-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition-all"
              placeholder={tr(t.contact.placeholders.name)}
              maxLength={50}
              required
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <label
              htmlFor={emailId}
              className="text-sm font-medium text-gray-300"
            >
              {tr(t.contact.fields.email)}
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 rounded-md border border-white/10 p-2.5 text-gray-100 text-sm placeholder:text-gray-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition-all"
              placeholder={tr(t.contact.placeholders.email)}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={subjectId}
            className="text-sm font-medium text-gray-300"
          >
            {tr(t.contact.fields.subject)}
          </label>
          <input
            id={subjectId}
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-white/5 rounded-md border border-white/10 p-2.5 text-gray-100 text-sm placeholder:text-gray-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition-all"
            placeholder={tr(t.contact.placeholders.subject)}
            maxLength={80}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={messageId}
            className="text-sm font-medium text-gray-300"
          >
            {tr(t.contact.fields.message)}
          </label>
          <textarea
            id={messageId}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-40 md:min-h-36 bg-white/5 rounded-md border border-white/10 p-2.5 text-gray-100 text-sm placeholder:text-gray-500 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40 transition-all resize-y"
            placeholder={tr(t.contact.placeholders.message)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-indigo-800 rounded-md h-10 px-5 min-w-44 text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              {tr(t.contact.sending)}
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              {tr(t.contact.submit)}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
