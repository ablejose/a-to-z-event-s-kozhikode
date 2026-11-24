"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { logoMark, site } from "@/config/site";

/** Logo-only introduction with a bounded wait for the hero media. */
export default function Loader() {
  const [phase, setPhase] = useState<"intro" | "reveal" | "done">("intro");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(reduced);
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      root.style.overflow = previousOverflow;
      setPhase("reveal");
    };
    const timeout = window.setTimeout(reveal, reduced ? 150 : 1200);

    return () => {
      window.clearTimeout(timeout);
      root.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase !== "reveal") return;
    const timeout = window.setTimeout(() => setPhase("done"), reduce ? 100 : 450);
    return () => window.clearTimeout(timeout);
  }, [phase, reduce]);

  if (phase === "done") return null;

  return (
    <motion.div
      role="status"
      aria-label={`Loading ${site.fullName}`}
      className={`fixed inset-0 z-[300] grid place-items-center bg-[#111116] ${phase === "reveal" ? "pointer-events-none" : ""}`}
      initial={false}
      animate={{ opacity: phase === "reveal" ? 0 : 1 }}
      transition={{ duration: reduce ? 0.1 : 0.45, ease: "easeOut" }}
    >
      {logoMark && (
        <div className="atoz-loader-orbit">
          <span className="atoz-loader-ring" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoMark} alt="" fetchPriority="high" width={192} height={192} className="relative h-full w-full rounded-full object-contain" />
        </div>
      )}
    </motion.div>
  );
}
