const TELEGRAM_CHANNEL_URL = "https://t.me/callsbyisaac";

export function FixedTelegramCta() {
  return (
    <a
      href={TELEGRAM_CHANNEL_URL}
      className="fixed-telegram-cta"
      target="_blank"
      rel="noreferrer"
      aria-label="Follow Telegram channel for degen trading signals and leads"
    >
      <span className="fixed-telegram-badge">Live signals</span>
      <strong>Follow Telegram channel</strong>
      <small>for degen trading signals and leads</small>
    </a>
  );
}
