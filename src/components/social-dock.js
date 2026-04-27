export function SocialDock() {
  const links = [
    { label: "X", handle: "@odinhq", href: "https://x.com/" },
    { label: "TG", handle: "Telegram", href: "https://t.me/" },
    { label: "DC", handle: "Discord", href: "https://discord.com/" },
  ];

  return (
    <footer className="social-dock" id="contact" aria-label="Social links">
      <div className="social-dock-copy">
        <span className="social-dock-label">Main socials</span>
        <p>Telegram for signals. Twitter for trends. Odin stays active where web3 attention actually moves.</p>
      </div>
      <div className="social-dock-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.handle}>
            <span>{link.label}</span>
            <small>{link.handle}</small>
          </a>
        ))}
      </div>
    </footer>
  );
}
