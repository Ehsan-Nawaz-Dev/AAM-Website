"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  FaBars,
  FaHome,
  FaProductHunt,
  FaRegAddressBook,
  FaRegUser,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
import styles from "./SiteHeader.module.css";

type NavItem = { label: string; href: string; icon: IconType; active?: boolean };

// Mirrors the navigation on aampower.com.pk, with "Connect" added.
const navItems: NavItem[] = [
  { label: "Home", href: "https://aampower.com.pk/home.aspx", icon: FaHome },
  { label: "View Products", href: "https://aampower.com.pk/our-products.aspx", icon: FaProductHunt },
  { label: "Browse Dealers", href: "https://aampower.com.pk/browse-dealers.aspx", icon: FaRegAddressBook },
  { label: "User Area", href: "https://aampower.com.pk/users/login.aspx", icon: FaRegUser },
  { label: "Connect", href: "/", icon: FaShareAlt, active: true },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className={styles.list}>
      {navItems.map(({ label, href, icon: Icon, active }) => (
        <li key={label}>
          <a
            href={href}
            className={`${styles.link} ${active ? styles.active : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            <Icon aria-hidden="true" className={styles.linkIcon} />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="https://aampower.com.pk/home.aspx" className={styles.logo}>
          <Image
            src="/aam-power-logo.png"
            alt="AAM POWER"
            width={855}
            height={222}
            priority
            sizes="(max-width: 480px) 170px, 212px"
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Main">
          <NavLinks />
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <NavLinks onNavigate={() => setOpen(false)} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
