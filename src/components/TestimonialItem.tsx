import { Quote } from "lucide-react";
import type { Testimonial } from "../types/testimonial";

export default function TestimonialItem(props: Testimonial) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.02] p-5 flex flex-col gap-3">
      <Quote size={20} className="text-violet-400" aria-hidden="true" />

      <p className="text-sm leading-relaxed text-gray-300 italic">
        &ldquo;{props.content}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        {props.avatarUrl && (
          <img
            src={props.avatarUrl}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover border border-white/10"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-200">
            {props.name}
          </span>
          <span className="text-xs text-gray-400">
            {props.role}
            {props.company ? ` · ${props.company}` : ""}
          </span>
        </div>
      </div>
    </article>
  );
}
