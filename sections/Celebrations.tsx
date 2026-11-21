import EventVideo from "@/components/EventVideo";
import { client, experience, mediaPath } from "@/config/experience";
import { waLink } from "@/config/site";
export function ServicesOverview() {
  return <section id="services" className="section services"><div className="shell"><div className="section-head"><div><p className="eyebrow">All the details, together</p><h2>What we do.</h2></div><p>One occasion. So many possibilities.<br />Let’s make it feel like you.</p></div><div className="services-grid">{experience.services.map(s => <article key={s.title}><div className="service-image"><img src={s.image} alt={s.alt} width={600} height={450} loading="lazy" /></div><h3>{s.title}</h3><p>{s.description}</p><small>{s.tags}</small><a className="text-link" href={waLink(`Hi ${client.name}, I’d like to enquire about ${s.title.toLowerCase()} for my event.`)} target="_blank" rel="noopener noreferrer">Let’s talk details</a></article>)}</div></div></section>;
}
export function Moments() {
  return <section className="moments section"><div className="shell moments-layout"><div className="moments-copy"><p className="eyebrow">Beyond the backdrop</p><h2>A setting to love.<br /><em>A moment to feel.</em></h2><p>The beauty of an outdoor celebration. The energy of a room coming alive. Some moments are best seen in motion.</p><a className="button gold" href="#contact">Make a little magic</a></div><div className="reels">{client.media.reels.map(reel => <figure key={reel.src}><EventVideo src={mediaPath(reel.src)} poster={mediaPath(reel.poster)} alt={reel.alt} /><figcaption>{reel.label}</figcaption></figure>)}</div></div></section>;
}
export function AboutStory() {
  return <section id="about" className="section shell story"><div className="story-pictures"><img className="story-stage" src={mediaPath(client.media.about[0].src)} alt={client.media.about[0].alt} width={1280} height={853} loading="lazy" /><img className="story-team" src={mediaPath(client.media.about[1].src)} alt={client.media.about[1].alt} width={576} height={1280} loading="lazy" /></div><div className="story-copy"><p className="eyebrow">A little about us</p><h2>{experience.aboutTitle}</h2><p>{experience.aboutBody}</p><div className="story-signature">{client.shortName}<i> events</i><small>{client.city}, {client.region}</small></div></div></section>;
}
export function PlanningProcess() {
  return <section className="planning shell"><p className="eyebrow">From hello to celebration</p><h2>Let’s make it happen.</h2><div className="process-grid">{experience.process.map(step => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></section>;
}
