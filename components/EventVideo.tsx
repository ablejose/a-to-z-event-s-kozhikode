"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
export default function EventVideo({ src, poster, alt, priority = false }: { src: string; poster: string; alt: string; priority?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(priority);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (visible.current && !document.hidden && !motion.matches && !userPaused.current) { setReady(true); video.play().catch(() => {}); }
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; sync(); }, { threshold: 0.2 });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => { observer.disconnect(); motion.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); };
  }, []);
  return <div className="event-video">
    <video ref={ref} src={ready ? src : undefined} poster={poster} muted loop playsInline preload={priority ? "metadata" : "none"} aria-label={alt} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onLoadedData={() => { if (visible.current && !userPaused.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !document.hidden) ref.current?.play().catch(() => {}); }} />
    <button className="video-toggle" aria-label={`${playing ? "Pause" : "Play"} ${alt}`} onClick={() => { const v = ref.current; if (!v) return; userPaused.current = playing; if (playing) v.pause(); else { setReady(true); if (!v.src) v.src = src; v.play().catch(() => {}); } }}>{playing ? <Pause size={16} /> : <Play size={16} />}<span>{playing ? "Pause" : "Play"}</span></button>
  </div>;
}
