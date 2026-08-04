import { Github, Linkedin, Instagram, Codepen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Social = {
  label: string;
  url: string;
  Icon: LucideIcon;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    url: "https://github.com/dryelleebelin",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dryelleebelin",
    Icon: Linkedin,
  },
  {
    label: "CodePen",
    url: "https://codepen.io/dryelleebelin",
    Icon: Codepen,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/dryelleebelin",
    Icon: Instagram,
  },
];
