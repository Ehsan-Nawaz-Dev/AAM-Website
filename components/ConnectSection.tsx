import type { CSSProperties } from "react";
import LocationCard from "./LocationCard";
import SocialLinkCard from "./SocialLinkCard";
import { socialLinks } from "./socialLinks";
import styles from "./ConnectSection.module.css";

// Entrance animations are CSS keyframes (see .reveal) so the content is
// visible straight from the static HTML, even before or without JavaScript.
const order = (i: number) => ({ "--i": i }) as CSSProperties;

export default function ConnectSection() {
  return (
    <>
      <section className={`${styles.container} ${styles.intro}`} aria-labelledby="connect-heading">
        <p className={`${styles.eyebrow} ${styles.reveal}`} style={order(0)}>
          Official Channels
        </p>
        <h1 id="connect-heading" className={`${styles.heading} ${styles.reveal}`} style={order(0)}>
          Connect With AAM&nbsp;POWER
        </h1>
        <span className={styles.accent} aria-hidden="true" />
        <p className={`${styles.lead} ${styles.reveal}`} style={order(1)}>
          Follow us, stay connected, and find AAM POWER across our official platforms.
        </p>
      </section>

      {/* Desktop: social cards on the left, map on the right, so the page fits one screen. */}
      <section className={`${styles.container} ${styles.layout}`} aria-label="AAM POWER official channels">
        <ul className={styles.list}>
          {socialLinks.map((link, i) => (
            <li key={link.id} className={`${styles.reveal} ${styles.fromLeft}`} style={order(i + 2)}>
              <SocialLinkCard link={link} />
            </li>
          ))}
        </ul>

        <div className={`${styles.reveal} ${styles.fromRight}`} style={order(3)}>
          <LocationCard />
        </div>
      </section>
    </>
  );
}
