"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { client, experience } from "@/config/experience";
import { waLink, telLink } from "@/config/site";
export default function EventEnquiry() {
  const [message, setMessage] = useState("");
  const [today, setToday] = useState("");
  useEffect(() => { const d = new Date(); setToday(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`); }, []);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [`Hi ${client.name}, I’d like to plan an event.`, `Name: ${String(data.get("name")).trim()}`, `Occasion: ${data.get("occasion")}`];
    for (const [key,label] of [["date","Date"],["guests","Guests"],["venue","Venue / location"],["notes","Details"]]) { const value=String(data.get(key) ?? "").trim(); if (value) lines.push(`${label}: ${value}`); }
    setMessage("Your enquiry is ready. Complete sending it in WhatsApp.");
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }
  return <section id="contact" className="contact section"><div className="shell contact-layout"><div><p className="eyebrow">Your next celebration</p><h2>{experience.contactTitle}</h2><p className="contact-intro">{experience.contactBody}</p><div className="contact-links"><a href={telLink}><Phone size={19} /><span><small>Call us</small>{client.phone}</span></a><a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /><span><small>Let’s talk</small>Chat on WhatsApp</span></a><a href={client.mapsLink} target="_blank" rel="noopener noreferrer"><MapPin size={19} /><span><small>Find us</small>{client.address}</span></a></div></div><form onSubmit={submit} className="enquiry-form"><h3>Tell us what you’re dreaming of.</h3><div className="form-row"><label>Your name <span>*</span><input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" pattern=".*\S.*" /></label><label>The occasion<select name="occasion" defaultValue={experience.eventTypes[0]}>{experience.eventTypes.map(type => <option key={type}>{type}</option>)}</select></label></div><div className="form-row"><label>Event date<input type="date" name="date" min={today} /></label><label>Expected guests<input type="number" name="guests" min={1} max={100000} placeholder="Approximate number" /></label></div><label>Venue or location<input name="venue" maxLength={200} placeholder="Where are we celebrating?" /></label><label>A little about your plans<textarea name="notes" rows={3} maxLength={1500} placeholder="Décor ideas, services you need, or anything you’d like us to know…" /></label><button type="submit" className="button gold"><MessageCircle size={18} />Continue on WhatsApp</button><p className="form-note">Opens WhatsApp with your details. Nothing is sent until you press send.</p><p className="form-status" role="status">{message}</p></form></div></section>;
}
