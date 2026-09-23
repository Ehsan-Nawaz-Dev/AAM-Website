import BrandIcon from "./BrandIcon";
import { location, socialLinks } from "./socialLinks";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const links = [
    ...socialLinks.map(({ id, name, href }) => ({ id, name, href })),
    { id: "maps" as const, name: "Google Maps", href: location.href },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>&copy; {year} AAM POWER. All rights reserved.</p>

        <ul className={styles.social}>
          {links.map(({ id, name, href }) => (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`AAM POWER on ${name}`}>
                <BrandIcon brand={id} className={`${styles.icon} ${id === "maps" ? styles.pin : ""}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
