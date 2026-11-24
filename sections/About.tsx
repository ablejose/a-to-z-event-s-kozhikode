"use client";

import { useEffect, useRef } from "react";
import { Star, Clock, Truck, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { copy, event, site, withoutDelivery } from "@/config/site";
import { aboutVideo } from "@/config/gallery";
import { t, tAll } from "@/lib/copy";

const POINT_ICONS = [Clock, Truck, MapPin];

export default function About() {
  const points = [
    // Only claim a rating when there is one.
    ...(site.reviews ? [{ icon: Star, text: `${site.rating.toFixed(1)}\u2605 on Google (${site.reviews} reviews)` }] : []),
    ...withoutDelivery(tAll(copy.about.points)).map((text, i) => ({ icon: POINT_ICONS[i % POINT_ICONS.length], text })),
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.4 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const body = t(event.overrides?.aboutBody ?? copy.about.body);

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2 id="about-heading" className="display mt-4" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)" }}>
              {copy.about.headingLead}{" "}
              <span className="italic" style={{ color: "var(--saffron)" }}>
                {copy.about.headingAccent}
              </span>
            </h2>
            <span className="my-5 block h-px w-16" style={{ background: "var(--saffron)" }} />
            <p className="body-copy">{body}</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3 font-sans text-sm text-ink/85">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2">
                    <p.icon size={16} />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            {site.reviews > 0 && (
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso"
              >
                <Star size={15} className="fill-saffron text-saffron" /> {t(copy.about.reviewsLink)}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {aboutVideo && <figure className="overflow-hidden rounded-brand bg-ink shadow-xl">
            <video ref={videoRef} src={aboutVideo.src} poster={aboutVideo.poster} aria-label={aboutVideo.alt} muted loop playsInline controls preload="metadata" className="block aspect-video w-full object-cover" />
          </figure>}
        </Reveal>
      </div>
    </section>
  );
}
