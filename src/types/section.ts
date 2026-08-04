import type { Localized } from "../i18n/types";

export type SectionId =
  | "about"
  | "techs"
  | "experiences"
  | "projects"
  | "education"
  | "contact";

export type Section = {
  id: SectionId;
  label: Localized<string>;
};
