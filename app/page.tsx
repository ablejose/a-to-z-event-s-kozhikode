import Hero from "@/sections/Hero";
import SelectedWork from "@/sections/SelectedWork";
import { ServicesOverview, Moments, AboutStory, PlanningProcess } from "@/sections/Celebrations";
import EventEnquiry from "@/sections/EventEnquiry";
import { client, links } from "@/config/experience";
export default function HomePage() {
  return <><main id="main-content"><Hero /><SelectedWork /><ServicesOverview /><Moments /><AboutStory /><PlanningProcess /><EventEnquiry /></main><footer className="site-footer shell"><a className="wordmark" href="#home"><span>{client.shortName}<i> events</i></span><small>{client.city} · {client.region}</small></a><nav aria-label="Footer">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a href={client.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></nav><p>© {new Date().getFullYear()} {client.name}. All rights reserved.</p></footer></>;
}
