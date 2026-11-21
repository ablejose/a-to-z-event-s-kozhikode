# A TO Z Events rebuild

## Source and client content
- Repository: ablejose/a-to-z-event-s-kozhikode
- Brief: C:\event-sites\context.md
- Client media: WhatsApp Unknown 2026-11-21 at 5.54.16 PM.zip
- Business contact and map details retained from events/active.json.
- Tagline transcribed from the client poster: We Plan. We Decorate. We Celebrate!
- Text wordmark used; no replacement business logo invented.

## Media selection
- Floral arch, rose reception, birthday and traditional ceremony photographs selected from the ZIP.
- Hero stage clip rotated upright and trimmed to 6 seconds (source 2.00.30 PM, seconds 4–10).
- Garden and Nasik Dhol clips trimmed to 6 seconds (sources 2.00.29 PM at 2–8s and 2.00.27 PM at 5–11s).
- Videos are muted, looping H.264, CRF 27, with faststart and WebP posters.
- Photos resized without upscaling. About uses exactly two images: the stage and actual drumming team.
- What we do retains the template's default service imagery.
- No fabricated reviews, rating, menu or live-counter section. Seasonal promotional posters were not presented as current offers.

## Build and checks
- Next.js 14 static export, 64-bit Node, npm ci then npm run build.
- Browser checked at desktop and 390px mobile viewport: no horizontal overflow or broken images; no console errors.
- Gallery filters, native image dialog, mobile navigation, required enquiry field, telephone/Maps/WhatsApp links checked.
- Enquiry opens a WhatsApp draft. It does not send or store visitor details on a server.

## Release
- Rebuild branch: codex/a-to-z-rebuild. No PR requested.
- Deploy only to able8, project a-to-z-event-s-kozhikode.
- Credentials stay outside the source tree and are not saved to disk.
