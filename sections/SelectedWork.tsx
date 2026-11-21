"use client";
import { useRef, useState } from "react";
import { X, Expand } from "lucide-react";
import { client, experience, mediaPath } from "@/config/experience";
export default function SelectedWork() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const images = client.media.stages;
  return <section id="work" className="section work shell">
    <div className="section-head"><div><p className="eyebrow">Selected celebrations</p><h2>{experience.workTitle}</h2></div><p>{experience.workBody}</p></div>
    <div className="filters" role="group" aria-label="Filter our work">{experience.filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="work-grid">{images.map((item, index) => (filter === "All work" || filter === item.category) && <figure key={item.src}><button className="work-image" aria-label={`View ${item.label.toLowerCase()} photograph`} onClick={() => { setSelected(index); dialog.current?.showModal(); }}><img src={mediaPath(item.src)} alt={item.alt} loading="lazy" width={1280} height={853} /><span className="expand-icon"><Expand size={18} /></span></button><figcaption><span>{item.label}</span><h3>{item.title}</h3></figcaption></figure>)}</div>
    <dialog ref={dialog} className="photo-dialog" aria-label="Event photograph" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}><button className="dialog-close" aria-label="Close photograph" onClick={() => dialog.current?.close()}><X /></button><img src={mediaPath(images[selected].src)} alt={images[selected].alt} /><p>{images[selected].title}</p></dialog>
  </section>;
}
