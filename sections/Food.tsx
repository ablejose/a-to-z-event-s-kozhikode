"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { foodVideo } from "@/config/gallery";
import { copy } from "@/config/site";
import { t } from "@/lib/copy";

/**
 * OUR FOOD — one portrait clip beside a short line of copy. The clip is not
 * fetched until the section is close to the screen, then loops continuously
 * without native player controls. Renders nothing without `media.food`.
 */
export default function Food() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroDone = true;
  const [near, setNear] = useState(false);
  const load = heroDone && near;



  // Near = within roughly one screen of the viewport, so it is ready by the time it scrolls in.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "100% 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Start once nearby and keep the muted clip looping without visible controls.
  useEffect(() => {
    const v = videoRef.current;
    if (!load || !v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, [load]);

  if (!foodVideo) return null;

  return (
    <section id="food" aria-labelledby="food-heading" className="scroll-mt-16 bg-cream py-16 md:py-24">
      {/* The clip always sits beside the words, never below them: phones put the heading on top and
          the copy + button next to a narrower clip; wider screens keep heading and copy in one column. */}
      {/* Phones: heading on top, copy beside the clip, the button full width under both.
          Wider screens: a narrower, centred block so copy and clip sit close, with no empty band between. */}
      <div className="mx-auto grid max-w-shell grid-cols-[minmax(0,1fr)_9.5rem] items-center gap-x-5 gap-y-6 px-6 sm:grid-cols-[minmax(0,1fr)_14rem] md:max-w-4xl md:grid-cols-[minmax(0,1fr)_17rem] md:gap-x-12 md:gap-y-0 lg:max-w-5xl lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-x-16">
        <Reveal className="col-span-2 md:col-span-1 md:self-end">
          <p className="eyebrow">{copy.food.eyebrow}</p>
          <h2 id="food-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)" }}>
            {copy.food.heading}
          </h2>
        </Reveal>

        <Reveal className="md:col-start-1 md:row-start-2 md:self-start">
          <p className="body-copy md:mt-4">{t(copy.food.body)}</p>
          <div className="mt-7 hidden md:block">
            <Button href="#menu" variant="primary">
              {copy.food.cta}
            </Button>
          </div>
        </Reveal>

        {/* Phones only: the button spans the full width under copy and clip. */}
        <Reveal className="col-span-2 md:hidden">
          <Button href="#menu" variant="primary">
            {copy.food.cta}
          </Button>
        </Reveal>

        <Reveal delay={0.08} className="col-start-2 row-start-2 w-full md:row-span-2 md:row-start-1">
          <div className="relative overflow-hidden rounded-[24px] bg-ink shadow-[0_40px_80px_-40px_rgba(36,28,21,0.7)]">
            <video
              ref={videoRef}
              // No src until the hero has loaded and the section is near: nothing is downloaded before then.
              src={load ? foodVideo.src : undefined}
              poster={foodVideo.poster}
              aria-label={foodVideo.alt}
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              preload={load ? "auto" : "none"}
              className="block aspect-[9/16] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
