import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data/experiences";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function Experiences() {
  const { t: tr } = useLanguage();

  return (
    <div className="py-16 md:py-24 px-6 md:px-6 lg:px-8">
      <div className="px-0 md:px-4">
        <SectionHeading
          eyebrow="03"
          title={tr(t.headings.experiences)}
          id="experiences-heading"
        />
      </div>

      <div className="flex flex-col md:gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.year.pt}`}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
}
