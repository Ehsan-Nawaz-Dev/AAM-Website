import { useId } from "react";

export type Brand = "facebook" | "instagram" | "youtube" | "whatsapp" | "maps";

type Props = {
  brand: Brand;
  className?: string;
};

/** Official full-colour brand marks, drawn inline so they stay sharp at any size. */
export default function BrandIcon({ brand, className }: Props) {
  const id = useId();

  switch (brand) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#0866ff" />
          <path
            fill="#fff"
            d="M16.67 15.47 17.2 12h-3.33V9.75c0-.95.47-1.87 1.96-1.87h1.51V4.93s-1.37-.23-2.68-.23c-2.74 0-4.53 1.66-4.53 4.66V12H7.08v3.47h3.05V24a12.1 12.1 0 0 0 3.74 0v-8.53Z"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <defs>
            <radialGradient id={`${id}-a`} cx="6.4" cy="25.8" r="24" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fd5" />
              <stop offset="0.1" stopColor="#fd5" />
              <stop offset="0.5" stopColor="#ff543e" />
              <stop offset="1" stopColor="#c837ab" />
            </radialGradient>
            <radialGradient id={`${id}-b`} cx="-3" cy="1.2" r="14" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3771c8" />
              <stop offset="0.13" stopColor="#3771c8" />
              <stop offset="1" stopColor="#60f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6.5" fill={`url(#${id}-a)`} />
          <rect width="24" height="24" rx="6.5" fill={`url(#${id}-b)`} />
          <rect x="5" y="5" width="14" height="14" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="16.15" cy="7.85" r="1" fill="#fff" />
        </svg>
      );

    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="#ff0000"
            d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5Z"
          />
          <path fill="#fff" d="M9.6 15.5 15.8 12 9.6 8.5Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="#25d366"
            d="M.06 24l1.69-6.16A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.89 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24Z"
          />
          <path
            fill="#fff"
            d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35Z"
          />
        </svg>
      );

    case "maps":
      return (
        <svg viewBox="0 0 92.3 132.3" className={className} aria-hidden="true">
          <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
          <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z" />
          <path
            fill="#4285f4"
            d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
          />
          <path
            fill="#fbbc04"
            d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
          />
          <path
            fill="#34a853"
            d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"
          />
        </svg>
      );
  }
}
