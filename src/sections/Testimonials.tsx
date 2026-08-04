import SectionHeading from "../components/SectionHeading";
import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../data/testimonials";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

/**
 * Renderiza a seção de depoimentos.
 * Retorna null se não houver depoimentos — evita mostrar seção vazia.
 * Para ativar, adicione entradas em src/data/testimonials.ts.
 */
export default function Testimonials() {
  const { t: tr } = useLanguage();
  if (testimonials.length === 0) return null;

  return (
    <div className="py-16 md:py-24 px-6 md:px-6 lg:px-8">
      <div className="px-0 md:px-4">
        <SectionHeading eyebrow="06" title={tr(t.headings.testimonials)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 px-0 md:px-4">
        {testimonials.map((tItem) => (
          <TestimonialItem key={tItem.id} {...tItem} />
        ))}
      </div>
    </div>
  );
}
