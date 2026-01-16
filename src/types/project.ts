export type Project = {
  id: string;
  title: string;
  description: string;
  year: number;
  thumbnail: string;
  techs: string[];
  liveUrl: string;
  repoUrl: string;
  type?: "personal" | "professional" | "academic";
  status?: "completed" | "in-development";
};
