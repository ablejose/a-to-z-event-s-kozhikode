import fs from "node:fs";
import path from "node:path";
import { icon } from "@/config/site";

/** /apple-touch-icon.png at the site root — iOS asks for it there. Copies the event's own brand icon. */
export const dynamic = "force-static";

export function GET() {
  const file = fs.readFileSync(path.join(process.cwd(), "public", icon("apple-touch-icon.png")));
  return new Response(file, { headers: { "Content-Type": "image/png" } });
}
