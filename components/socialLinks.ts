import type { Brand } from "./BrandIcon";

export type SocialLink = {
  id: Brand;
  name: string;
  description: string;
  /** Short handle or detail shown next to the name. */
  meta: string;
  href: string;
  /** Brand colour used for the card's hover accent. */
  brand: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    name: "Facebook",
    description: "Follow AAM POWER on Facebook",
    meta: "/AAMPOWER",
    href: "https://www.facebook.com/AAMPOWER/",
    brand: "#0866ff",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Follow AAM POWER on Instagram",
    meta: "@aam_power",
    href: "https://www.instagram.com/aam_power/",
    brand: "#e1306c",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Watch AAM POWER on YouTube",
    meta: "@AAMPOWER",
    href: "https://www.youtube.com/@AAMPOWER/",
    brand: "#ff0000",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Chat with AAM POWER",
    meta: "0310 7479999",
    href: "https://wa.me/923107479999",
    brand: "#1faa53",
  },
];

export const location = {
  name: "Visit Us",
  description: "Find AAM POWER on Google Maps",
  address: "Bahar Chowk, Masoom Shah Road, Writers Colony, Multan",
  /** Official Google Maps place link (opens the app / new tab). */
  href: "https://www.google.com/maps/place/AAM+POWER/data=!4m2!3m1!1s0x0:0xb39fe26f3f51f1c9?sa=X&ved=1t:2428&ictx=111",
  /** Same place (30.20023, 71.4943242) as an embeddable map. */
  embedSrc:
    "https://maps.google.com/maps?q=AAM%20POWER%2C%20Masoom%20Shah%20Rd%2C%20Multan&ll=30.20023,71.4943242&z=17&output=embed",
};
