import type { CSSProperties } from "react";
import BrandIcon from "./BrandIcon";
import type { SocialLink } from "./socialLinks";
import styles from "./SocialLinkCard.module.css";

type Props = {
  link: SocialLink;
};

export default function SocialLinkCard({ link }: Props) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ "--brand": link.brand } as CSSProperties}
      aria-label={`${link.name}: ${link.description} (opens in a new tab)`}
    >
      <span className={styles.icon}>
        <BrandIcon brand={link.id} className={styles.logo} />
      </span>

      <span className={styles.body}>
        <span className={styles.titleRow}>
          <span className={styles.title}>{link.name}</span>
          <span className={styles.meta}>{link.meta}</span>
        </span>
        <span className={styles.description}>{link.description}</span>
      </span>

      <span className={styles.action} aria-hidden="true">
        <svg viewBox="0 0 16 16" className={styles.arrow}>
          <path
            d="M3 8h9.5M8.5 4l4 4-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
