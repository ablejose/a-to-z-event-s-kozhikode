import fs from "node:fs";
import path from "node:path";
import { icon } from "@/config/site";

/**
 * /favicon.ico at the site root — browsers and Google's favicon crawler ask for
 * it there even with <link rel="icon">. Copies the event's own brand icon.
 */
export const dynamic = "force-static";

export function GET() {
  const file = fs.readFileSync(path.join(process.cwd(), "public", icon("favicon.ico")));
  return new Response(file, { headers: { "Content-Type": "image/x-icon" } });
}
