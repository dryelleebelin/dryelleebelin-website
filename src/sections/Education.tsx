import SectionHeading from "../components/SectionHeading";
import EducationItem from "../components/EducationItem";
import CertificationItem from "../components/CertificationItem";
import { education, certifications } from "../data/education";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function Education() {
  const { t: tr } = useLanguage();
  const hasEducation = education.length > 0;
  const hasCertifications = certifications.length > 0;

  return (
    <div className="py-16 md:py-24 px-6 md:px-6 lg:px-8">
      <div className="px-0 md:px-4">
        <SectionHeading
          eyebrow="05"
          title={tr(t.headings.education)}
          id="education-heading"
        />
      </div>

      {hasEducation && (
        <div className="flex flex-col md:gap-4">
          {education.map((item) => (
            <EducationItem key={item.id} {...item} />
          ))}
        </div>
      )}

      {hasCertifications && (
        <div className="px-0 md:px-4 mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
            {tr(t.education.certifications)}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((item) => (
              <CertificationItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}

      {!hasEducation && !hasCertifications && (
        <div className="px-0 md:px-4">
          <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-6 text-sm text-gray-400 leading-relaxed">
            <p className="mb-1 text-gray-300 font-semibold">
              {tr(t.education.emptyTitle)}
            </p>
            <p>{tr(t.education.emptyText)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
