import business from "@/events/active.json";
export const client = business;
export const mediaPath = (path: string) => path.startsWith("/") ? path : `/events/${business.slug}/${path}`;
export const links = [{ label: "Our work", href: "#work" }, { label: "What we do", href: "#services" }, { label: "About us", href: "#about" }, { label: "Get in touch", href: "#contact" }];
export const experience = {
  heroIntro: "For the moments that become memories.",
  heroCta: "Let’s plan your event",
  workTitle: "Beautiful settings. Real celebrations.",
  workBody: "A glimpse of the spaces we’ve dressed and the moments we’ve helped bring to life.",
  filters: ["All work", "Stages & décor", "Celebrations"],
  services: [
    { title: "Stage & event décor", description: "Floral backdrops, reception stages and spaces dressed for your occasion.", image: "/template/service-2.webp", alt: "Illustrative event decoration from the original template", tags: "Weddings · Receptions · Family occasions" },
    { title: "Catering & hospitality", description: "Bring everyone together over good food. Talk to us about catering for your guest list.", image: "/template/service-1.webp", alt: "Illustrative catering presentation from the original template", tags: "Wedding catering · Functions · Gatherings" },
    { title: "Complete celebrations", description: "Birthday setups, Nasik Dhol and event coordination, planned around your celebration.", image: "/template/service-3.webp", alt: "Illustrative celebration setting from the original template", tags: "Birthdays · Nasik Dhol · Event planning" },
  ],
  aboutTitle: "Your occasion. Our attention to every detail.",
  aboutBody: "Based in Arayidathupalam, Kozhikode, we bring stage decoration, catering and celebrations together. Whether it’s an intimate family function or a wedding reception, start with your ideas. We’ll help shape the setting, the details and the day.",
  process: [
    { title: "Tell us your idea", body: "Share your date, venue, guest count and the celebration you have in mind." },
    { title: "Make it yours", body: "Discuss the décor, services and budget. Agree on the details before the day." },
    { title: "Enjoy your occasion", body: "Let the plans come together while you spend time with the people who matter." },
  ],
  eventTypes: ["Wedding / reception", "Birthday", "Family function", "Corporate event", "Other celebration"],
  contactTitle: "Something wonderful starts with a conversation.",
  contactBody: "Have a date in mind, or just the beginnings of an idea? Tell us a little about your occasion.",
};
