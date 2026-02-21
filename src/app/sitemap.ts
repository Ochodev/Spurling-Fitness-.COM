import { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url;

  const routes = [
    "/",
    "/about-us/",
    "/what-we-do/",
    "/what-we-do/small-group-personal-training/",
    "/what-we-do/private-one-on-one/",
    "/what-we-do/sweat-hiit-workout-classes/",
    "/what-we-do/nutritional-guidance/",
    "/testimonial/",
    "/contact-us/",
    "/faq/",
    "/client/",
    "/jobs/",
    "/founders/",
    "/privacy-policy/",
    "/10market/",
    "/beacon/",
    "/rivers-edge/",
    "/guestpass/",
    "/tryit/",
    "/athome/",
    "/waitlist/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
