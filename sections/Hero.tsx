import { client, experience, mediaPath } from "@/config/experience";
import EventVideo from "@/components/EventVideo";
export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-heading shell"><p className="eyebrow">{client.descriptor} · {client.city}</p><h1>{client.tagline.split(". ").map((part, i) => <span key={part} className={i === 2 ? "accent" : ""}>{part}{i < 2 ? "." : ""}</span>)}</h1><div className="hero-aside"><p>{experience.heroIntro}</p><a href="#contact" className="button gold">{experience.heroCta}</a></div></div>
    <div className="hero-scene shell"><div className="hero-photograph"><img src={mediaPath(client.media.stages[0].src)} alt={client.media.stages[0].alt} width={1280} height={853} fetchPriority="high" /><div className="photo-caption"><span>THE ART OF CELEBRATING</span><span>Thoughtful details. Lasting memories.</span></div></div><div className="hero-film"><EventVideo src={mediaPath(client.media.heroVideo)} poster={mediaPath(client.media.heroSlides[0].src)} alt={client.media.heroSlides[0].alt} priority /><p>From the first idea<br /><em>to the final detail.</em></p><a href="#work" className="text-link">Explore our work</a></div></div>
    <div className="hero-bottom shell"><span>Weddings & receptions</span><span>Family celebrations</span><span>Décor & catering</span><span>Nasik Dhol</span></div>
  </section>;
}
