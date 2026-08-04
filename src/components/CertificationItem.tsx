import { Award, ArrowUpRight } from "lucide-react";
import type { Certification } from "../types/education";

export default function CertificationItem(props: Certification) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 p-2 rounded-md bg-indigo-900/60 text-violet-300">
        <Award size={16} aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5">
        <h4 className="text-sm font-bold text-gray-200 inline-flex items-baseline gap-1">
          {props.name}
          {props.credentialUrl && (
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="translate-y-[2px] opacity-70"
            />
          )}
        </h4>
        <p className="text-xs text-gray-400">
          {props.issuer} · {props.year}
        </p>
      </div>
    </div>
  );

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/5">
      {props.credentialUrl ? (
        <a
          href={props.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus-visible:text-violet-400"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </article>
  );
}
