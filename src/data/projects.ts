import type { Project } from "../types/project";
import thumbnailNft from "../assets/thumbnails/thumbnail-nft-landing-page.png";

export const projects: Project[] = [
  {
    id: "nft-landing-page",
    title: "Landing Page NFT",
    description: {
      pt: "Landing page moderna e responsiva para apresentação de um projeto NFT, construída com Next.js e Tailwind. Foco em performance, animações fluidas e boas práticas de front-end.",
      en: "Modern and responsive landing page for an NFT project, built with Next.js and Tailwind. Focused on performance, smooth animations and front-end best practices.",
    },
    year: 2025,
    thumbnail: thumbnailNft,
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    highlights: {
      pt: [
        "Layout totalmente responsivo",
        "Animações suaves com Motion",
        "Estrutura escalável em componentes",
      ],
      en: [
        "Fully responsive layout",
        "Smooth animations with Motion",
        "Scalable component structure",
      ],
    },
    liveUrl: "https://nft-landing-ui.vercel.app/",
    repoUrl: "https://github.com/dryelleebelin/nft-landing-page",
    type: "personal",
    status: "completed",
    featured: true,
  },
];
