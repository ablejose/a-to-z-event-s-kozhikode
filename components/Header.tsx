"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { client, links } from "@/config/experience";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (e.key === "Tab") {
        const items = [toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter(Boolean) as HTMLElement[];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label={`${client.name} home`}><span>{client.shortName}<i> events</i></span><small>{client.city} · {client.region}</small></a>
    <nav className="desktop-nav" aria-label="Primary">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <a className="button gold header-cta" href="#contact">Plan your event</a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav ref={panel} id="mobile-menu" className="mobile-nav" aria-label="Mobile">{links.map(link => <a key={link.href} href={link.href} onClick={() => { setOpen(false); toggle.current?.focus(); }}>{link.label}</a>)}<a href={`tel:${client.phone.replace(/\s/g, "")}`}>{client.phone}</a></nav>}
  </header>;
}
