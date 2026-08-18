import type { MetadataRoute } from "next";
import { solutionSlugs } from "./solutionData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://colosson.net";
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...solutionSlugs.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
