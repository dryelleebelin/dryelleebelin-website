import type { Localized } from "../i18n/types";

export type Project = {
  id: string;
  title: string;
  description: Localized<string>;
  year: number;
  thumbnail: string;
  techs: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlights?: Localized<string[]>;
  caseStudySlug?: string;
  type?: "personal" | "professional" | "academic";
  status?: "completed" | "in-development";
  featured?: boolean;
};
