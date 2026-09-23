import type { CSSProperties } from "react";
import { FaArrowRight } from "react-icons/fa";
import type { SocialLink } from "./socialLinks";
import styles from "./SocialLinkCard.module.css";

type Props = {
  link: SocialLink;
};

export default function SocialLinkCard({ link }: Props) {
  const Icon = link.icon;
  const style = { "--brand": link.brand, "--tint": link.tint } as CSSProperties;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${link.wide ? styles.wide : ""}`}
      style={style}
      aria-label={`${link.name}: ${link.description} (opens in a new tab)`}
    >
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>

      <span className={styles.body}>
        <span className={styles.titleRow}>
          <span className={styles.title}>{link.name}</span>
          <span className={styles.meta}>{link.meta}</span>
        </span>
        <span className={styles.description}>{link.description}</span>
      </span>

      <span className={styles.action} aria-hidden="true">
        {link.actionLabel && <span className={styles.actionLabel}>{link.actionLabel}</span>}
        <FaArrowRight className={styles.arrow} />
      </span>
    </a>
  );
}
