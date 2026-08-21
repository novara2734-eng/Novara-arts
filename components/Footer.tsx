const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Etsy", href: "https://etsy.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-espresso text-butter-light/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-butter-light">Novara Arts</p>
          <p className="text-xs tracking-widest2 uppercase text-terracotta mt-1 mb-5">
            by Prashasti
          </p>
          <p className="text-sm max-w-sm leading-relaxed">
            Original textured acrylics, gold leaf commissions, and archival
            fine art prints — hand-built in the studio and shipped tracked
            across Canada, the US, and worldwide.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-9 w-9 rounded-full border border-butter-light/25 flex items-center justify-center text-xs hover:border-gold hover:text-gold transition-colors"
              >
                <SocialGlyph label={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-widest2 uppercase text-gold mb-4">Shop</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/?category=Original%20Paintings#shop" className="hover:text-gold">Originals</a></li>
            <li><a href="/?category=Fine%20Art%20Prints#shop" className="hover:text-gold">Fine Art Prints</a></li>
            <li><a href="/?category=Greeting%20Cards#shop" className="hover:text-gold">Greeting Cards</a></li>
            <li><a href="/#commissions" className="hover:text-gold">Commissions</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest2 uppercase text-gold mb-4">Studio</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/#about" className="hover:text-gold">About Prashasti</a></li>
            <li>
              <a href="mailto:hello@novaraarts.com" className="hover:text-gold">
                hello@novaraarts.com
              </a>
            </li>
            <li className="text-butter-light/60">Toronto, Ontario, Canada</li>
            <li className="text-butter-light/60">Shipping across Canada, US &amp; worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-butter-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-butter-light/50">
          <p>© {new Date().getFullYear()} Novara Arts by Prashasti. All rights reserved.</p>
          <p>Prices shown in CAD. Handcrafted originals — each piece is one of one.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialGlyph({ label }: { label: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" } as const;
  switch (label) {
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 2 .24 2.47.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.47.35 1.3.4 2.47.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 2-.4 2.47a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.47.16-1.3.35-2.47.4-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-2-.24-2.47-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.47-.35-1.3-.4-2.47C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-2 .4-2.47A4.9 4.9 0 0 1 3.82 3 4.9 4.9 0 0 1 5.6 1.87c.47-.16 1.3-.35 2.47-.4C9.32 1.4 9.72 1.4 12 1.4Zm0 3.5a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 1.9a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Zm5.5-2.1a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path d="M14.5 2h2.6c.16 1.4.86 2.6 2.06 3.35.86.55 1.83.83 2.84.83v2.7c-1.66 0-3.2-.5-4.5-1.4v6.9c0 3.2-2.6 5.8-5.8 5.8a5.8 5.8 0 0 1-1.7-11.35v2.9a3.05 3.05 0 1 0 4.2 2.8V2Z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <path d="M23 12s0-3.4-.43-5a2.9 2.9 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.57.5a2.9 2.9 0 0 0-2 2C1 8.6 1 12 1 12s0 3.4.43 5a2.9 2.9 0 0 0 2 2c1.67.5 8.57.5 8.57.5s6.9 0 8.57-.5a2.9 2.9 0 0 0 2-2C23 15.4 23 12 23 12ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      );
    case "Etsy":
      return (
        <svg {...common}>
          <path d="M7.5 3h9.7l.5 3.6h-.9c-.5-1.7-1-2.2-2.7-2.2h-3.4v6h2c1.3 0 1.7-.5 2-1.9h.9v5h-.9c-.3-1.4-.7-1.9-2-1.9h-2v5.1c0 1 .4 1.4 1.6 1.4h1.9c1.9 0 2.6-.7 3.5-2.6h.8l-.7 3.5H7.3v-.8c1.5-.1 1.7-.3 1.7-1.5V6.3c0-1.2-.3-1.3-1.7-1.5V3Z" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-3.65 19.3c-.05-.8-.1-2.02.02-2.9.11-.78.72-3.36.72-3.36s-.18-.37-.18-.9c0-.85.5-1.48 1.1-1.48.53 0 .78.4.78.87 0 .53-.34 1.32-.5 2.05-.15.62.31 1.12.92 1.12 1.1 0 1.95-1.16 1.95-2.83 0-1.48-1.06-2.51-2.58-2.51-1.76 0-2.79 1.32-2.79 2.68 0 .53.2 1.1.46 1.41a.19.19 0 0 1 .04.18c-.05.2-.15.61-.17.7-.03.11-.1.14-.24.08-.87-.4-1.42-1.68-1.42-2.7 0-2.2 1.6-4.22 4.6-4.22 2.42 0 4.3 1.72 4.3 4.03 0 2.4-1.52 4.34-3.62 4.34-.71 0-1.37-.37-1.6-.8l-.44 1.66c-.16.6-.58 1.36-.87 1.83A10 10 0 1 0 12 2Z" />
        </svg>
      );
    default:
      return <span aria-hidden="true">{label.charAt(0)}</span>;
  }
}
