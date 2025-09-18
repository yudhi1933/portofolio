export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "pos-v1",
    title: "POS – Transaction Management",
    description: "Table transaksi dengan pagination, filter status & metode bayar, date range, dan modal edit. Ikon lucide-react, toast, DatePicker.",
    image: '/projects/pos-v1-preview.svg',
    tech: ["React", "Vite", "Tailwind", "lucide-react"],
    repo: "https://github.com/USERNAME/pos-v1",
    demo: "https://your-demo-url-pos.com",
  },
  {
    slug: "lms-youtube",
    title: "LMS – YouTube Style (Multi-tenant)",
    description: "LMS mirip YouTube dengan Payload CMS 3.54; eksplor slug/domain multi-tenant, login superadmin, Docker + SQLite.",
    image: '/projects/lms-youtube-preview.svg',
    tech: ["Next.js", "Payload CMS", "Tailwind", "Docker"],
    repo: "https://github.com/USERNAME/task2-lms-youtube",
  },
];
