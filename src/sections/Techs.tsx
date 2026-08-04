import SectionHeading from "../components/SectionHeading";
import TechBadge from "../components/TechBadge";
import { techs } from "../data/techs";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function Techs() {
  const { t: tr } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-12">
      <SectionHeading
        eyebrow="02"
        title={tr(t.headings.techs)}
        id="techs-heading"
      />

      <ul className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <li key={tech.label}>
            <TechBadge
              label={tech.label}
              color={tech.color}
              bgColor={tech.bgColor}
              url={tech.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
