import type { Localized } from "../i18n/types";

export type Education = {
  id: string;
  institution: string;
  degree: Localized<string>;
  period: Localized<string>;
  description?: Localized<string>;
  link?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};
