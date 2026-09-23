import BrandIcon from "./BrandIcon";
import { location } from "./socialLinks";
import styles from "./LocationCard.module.css";

export default function LocationCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>
          <BrandIcon brand="maps" className={styles.logo} />
        </span>

        <div className={styles.body}>
          <h2 className={styles.title}>{location.name}</h2>
          <p className={styles.description}>{location.description}</p>
          <p className={styles.address}>{location.address}</p>
        </div>

        <a
          href={location.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directions}
          aria-label="Get directions to AAM POWER in Google Maps (opens in a new tab)"
        >
          Get directions
          <svg viewBox="0 0 16 16" className={styles.arrow} aria-hidden="true">
            <path
              d="M3 8h9.5M8.5 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className={styles.map}>
        <iframe
          src={location.embedSrc}
          title="AAM POWER location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
