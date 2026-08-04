import type { Localized } from "../i18n/types";

export type ExperienceLink = {
  label: Localized<string>;
  url: string;
  restricted?: boolean;
};

export type Experience = {
  year: Localized<string>;
  company: string;
  role: Localized<string>;
  description: Localized<string>;
  highlights?: Localized<string[]>;
  techs: string[];
  link: string;
  extraLinks?: ExperienceLink[];
};
