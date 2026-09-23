import { socialLinks } from "./socialLinks";
import styles from "./SiteFooter.module.css";

const menu = [
  { label: "Browse Dealers", href: "https://aampower.com.pk/browse-dealers.aspx" },
  { label: "View Products", href: "https://aampower.com.pk/our-products.aspx" },
  { label: "User Area", href: "https://aampower.com.pk/users/login.aspx" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>AAM POWER</p>
          <p className={styles.copy}>{year} &copy; ALL RIGHTS RESERVED</p>
        </div>

        <nav aria-label="Footer">
          <p className={styles.heading}>Menu</p>
          <ul className={styles.menu}>
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={styles.heading}>Follow Us</p>
          <ul className={styles.social}>
            {socialLinks.map(({ id, name, href, icon: Icon }) => (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
