const items = [
  "Autonomous Investment Briefs",
  "Crypto-Native Intelligence Engine",
  "Real-Time Market Execution Feeds",
  "On-Chain Insights & Automated Tracking",
  "Live DeFi Protocol Monitoring",
  "Web3 News & Signal Updates",
  'Enter the "Agent Control Room"',
  "Launch on Telegram",
];

export function FeatureRail() {
  return (
    <aside className="feature-rail" aria-label="Feature links">
      {items.map((item, index) => (
        <a
          key={item}
          href="#"
          className={`feature-card${index === 2 ? " is-active" : ""}${index === items.length - 1 ? " is-external" : ""}`}
        >
          <span>{item}</span>
          {(index === 2 || index === items.length - 1) && (
            <span aria-hidden="true" className="feature-arrow">
              ↗
            </span>
          )}
        </a>
      ))}
    </aside>
  );
}
