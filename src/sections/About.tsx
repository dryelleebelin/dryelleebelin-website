import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const BOLD_MARK = "";

/**
 * Renderiza uma string com marcas de negrito envoltas em BOLD_MARK,
 * transformando o trecho marcado em <span> destacado.
 */
function renderWithBold(text: string) {
  const parts = text.split(BOLD_MARK);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-semibold text-gray-200">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

function bold(text: string) {
  return `${BOLD_MARK}${text}${BOLD_MARK}`;
}

export default function About() {
  const { t: tr } = useLanguage();

  const p1 = tr(t.about.p1)(bold);
  const p2 = tr(t.about.p2)(bold);

  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-12 flex flex-col gap-4">
      <SectionHeading eyebrow="01" title={tr(t.headings.about)} id="about-heading" />

      <p className="leading-relaxed">{renderWithBold(p1)}</p>
      <p className="leading-relaxed">{renderWithBold(p2)}</p>
      <p className="leading-relaxed">{tr(t.about.p3)}</p>
      <p className="leading-relaxed">{tr(t.about.p4)}</p>
    </div>
  );
}
