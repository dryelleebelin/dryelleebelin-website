type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-1 mb-6 md:mb-8">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight"
      >
        {title}
      </h2>
    </div>
  );
}
