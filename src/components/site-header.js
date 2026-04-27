const navItems = [
  { label: "Wins", href: "#wins" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true" />
        <div>
          <span className="brand-name">ODIN/HQ</span>
          <span className="brand-tag">space, signal and craftsmanship</span>
        </div>
      </div>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <a href="#contact" className="demo-button">
        Let&apos;s build
      </a>
    </header>
  );
}
