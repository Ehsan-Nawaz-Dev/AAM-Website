import type { CSSProperties } from "react";
import { FaShieldAlt } from "react-icons/fa";
import SocialLinkCard from "./SocialLinkCard";
import { socialLinks } from "./socialLinks";
import styles from "./ConnectSection.module.css";

// Entrance animations are CSS keyframes (see .reveal) so the content is
// visible straight from the static HTML, even before or without JavaScript.
const order = (i: number) => ({ "--i": i }) as CSSProperties;

export default function ConnectSection() {
  return (
    <>
      <section className={styles.intro} aria-labelledby="connect-heading">
        <div className={styles.container}>
          <nav className={`${styles.breadcrumb} ${styles.reveal}`} style={order(0)} aria-label="Breadcrumb">
            <a href="https://aampower.com.pk/home.aspx">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Connect With Us</span>
          </nav>
          <h1 id="connect-heading" className={`${styles.heading} ${styles.reveal}`} style={order(1)}>
            Connect With AAM POWER
          </h1>
          <p className={`${styles.lead} ${styles.reveal}`} style={order(2)}>
            Follow us, stay connected, and find AAM POWER across our official platforms.
          </p>
        </div>
      </section>

      <section className={styles.links} aria-label="AAM POWER official channels">
        <div className={styles.container}>
          <ul className={styles.grid}>
            {socialLinks.map((link, i) => (
              <li
                key={link.id}
                className={`${styles.reveal} ${link.wide ? styles.wideItem : ""}`}
                style={order(i + 3)}
              >
                <SocialLinkCard link={link} />
              </li>
            ))}
          </ul>

          <p className={`${styles.note} ${styles.reveal}`} style={order(socialLinks.length + 4)}>
            <FaShieldAlt aria-hidden="true" className={styles.noteIcon} />
            <span>
              These are AAM POWER&rsquo;s only official channels. For product availability near you,{" "}
              <a href="https://aampower.com.pk/browse-dealers.aspx">browse our dealers</a>.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
