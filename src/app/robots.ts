import { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you/", "/thank-you-scarborough/", "/thank-you-kennebunk/", "/thank-you-south-portland/", "/thank-you-jobs/"],
    },
    sitemap: `${BRAND.url}/sitemap.xml`,
  };
}
