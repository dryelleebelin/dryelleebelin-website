import { FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const CV_URL = "/CurriculoDryelleEbelin.pdf";
const CV_FILENAME = "CurriculoDryelleEbelin.pdf";

type Variant = "inline" | "floating";

type Props = {
  variant?: Variant;
  visible?: boolean;
};

export default function DownloadCVButton({
  variant = "inline",
  visible = true,
}: Props) {
  const { t: tr } = useLanguage();

  if (variant === "floating") {
    return (
      <a
        href={CV_URL}
        download={CV_FILENAME}
        aria-label={tr(t.cv.ariaLabel)}
        className={`
          fixed bottom-5 right-5 z-40 p-3 rounded-full shadow-xl bg-indigo-800 text-white
          transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-700
          focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
      >
        <FileText size={22} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={CV_URL}
      download={CV_FILENAME}
      className="
        inline-flex items-center gap-2 rounded-md bg-indigo-800 text-white
        px-4 py-2 text-sm font-semibold shadow-md
        hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
      "
    >
      <FileText size={16} aria-hidden="true" />
      {tr(t.cv.download)}
    </a>
  );
}
