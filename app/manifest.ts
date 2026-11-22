import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { copy, icon, site } from "@/config/site";
import { seo } from "@/config/seo";

/**
 * PWA manifest served at /manifest.webmanifest — generated from the active
 * event config, so swapping events also swaps the app name and icons.
 */
export default function manifest(): MetadataRoute.Manifest {
  // A padded maskable icon when the brand set has one (mark inside the 80% safe zone), else the plain 512.
  const maskable = fs.existsSync(path.join(process.cwd(), "public", icon("maskable-512x512.png")))
    ? icon("maskable-512x512.png")
    : icon("android-chrome-512x512.png");
  return {
    name: site.fullName,
    short_name: `${site.name} ${site.kicker}`,
    description: seo.ogDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: seo.lang,
    dir: "ltr",
    background_color: copy.theme.backgroundColor,
    theme_color: copy.theme.themeColor,
    categories: [...copy.seo.manifestCategories],
    icons: [
      { src: icon("android-chrome-192x192.png"), sizes: "192x192", type: "image/png", purpose: "any" },
      { src: icon("android-chrome-512x512.png"), sizes: "512x512", type: "image/png", purpose: "any" },
      { src: maskable, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
