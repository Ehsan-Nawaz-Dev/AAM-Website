import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export type SocialLink = {
  id: string;
  name: string;
  description: string;
  /** Short handle or detail shown next to the name. */
  meta: string;
  href: string;
  icon: IconType;
  /** Official brand colour for the glyph, and a light tint for its tile. */
  brand: string;
  tint: string;
  /** Wide cards span the full grid row and show a text action. */
  wide?: boolean;
  actionLabel?: string;
};

export const WHATSAPP_NUMBER = "0310 7479999";

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    name: "Facebook",
    description: "Follow AAM POWER on Facebook",
    meta: "/AAMPOWER",
    href: "https://www.facebook.com/AAMPOWER/",
    icon: FaFacebookF,
    brand: "#1877f2",
    tint: "#e8f1fe",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Follow AAM POWER on Instagram",
    meta: "@aam_power",
    href: "https://www.instagram.com/aam_power/",
    icon: FaInstagram,
    brand: "#e1306c",
    tint: "#fdebf1",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Watch AAM POWER on YouTube",
    meta: "@AAMPOWER",
    href: "https://www.youtube.com/@AAMPOWER/",
    icon: FaYoutube,
    brand: "#ff0000",
    tint: "#ffecec",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Chat with AAM POWER",
    meta: WHATSAPP_NUMBER,
    href: "https://wa.me/923107479999",
    icon: FaWhatsapp,
    brand: "#1da851",
    tint: "#e5f6ec",
  },
  {
    id: "maps",
    name: "Visit Us",
    description: "Find AAM POWER on Google Maps",
    meta: "Google Maps",
    href: "https://www.google.com/maps/place/AAM+POWER/data=!4m2!3m1!1s0x0:0xb39fe26f3f51f1c9?sa=X&ved=1t:2428&ictx=111",
    icon: SiGooglemaps,
    brand: "#ea4335",
    tint: "#fdecea",
    wide: true,
    actionLabel: "Get directions",
  },
];
