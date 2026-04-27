import { BuyMeCoffee } from "@/components/buy-me-coffee";

const processCards = [
  {
    id: "01",
    title: "Space Mapping",
    text: "We read the market, the memes, and the attention pockets before we touch the visuals.",
  },
  {
    id: "02",
    title: "Positioning",
    text: "Narrative, offer, and voice get sharpened until the brand feels inevitable on the timeline.",
  },
  {
    id: "03",
    title: "Visual System",
    text: "Every color, frame, card, and interaction is tuned to feel expensive and culture-native.",
  },
  {
    id: "04",
    title: "Launch Assets",
    text: "We package the rollout with pages, social cuts, and proof-first moments worth sharing.",
  },
  {
    id: "05",
    title: "Community Fit",
    text: "The final layer makes the brand usable by holders, lurkers, and power users at once.",
  },
  {
    id: "06",
    title: "Wins Loop",
    text: "Receipts, milestones, and performance snapshots turn each launch into momentum for the next one.",
  },
];

const featureCards = [
  "Brand systems built for web3-native attention.",
  "Launch pages that look premium and convert signal.",
  "Case-study storytelling that makes wins feel tangible.",
  "Social identity packs for X, Telegram, and Discord.",
];

const tableRows = [
  ["Narrative clarity", true, false, false, false],
  ["Premium visual system", true, false, true, false],
  ["Launch-ready assets", true, false, false, false],
  ["Degen-native taste", true, false, false, false],
  ["Fast iteration cycles", true, true, false, false],
  ["Receipts-first proofing", true, false, false, false],
];

const reviews = [
  {
    quote:
      "ODIN turned our rough launch deck into a brand people instantly wanted to repost. The quality jump was obvious.",
    name: "Nero",
    role: "Founder, stealth memecoin",
  },
  {
    quote:
      "Everything felt cleaner, sharper, and more intentional. We stopped looking like just another crypto page.",
    name: "Maya",
    role: "Ops lead, onchain studio",
  },
  {
    quote:
      "The process was fast, but the craft still felt high-end. That balance is harder to find than people think.",
    name: "Santi",
    role: "Community builder",
  },
];

const faqs = [
  "What does ODIN/HQ actually build?",
  "Is this only for tokens and meme projects?",
  "Can you handle launch assets and socials too?",
  "What if we already have a rough identity?",
];

export function HeroContent() {
  return (
    <div className="page-stack">
      <section className="hero-panel" id="wins">
        <div className="hero-copy">
          <span className="eyebrow">degen-native creative partner</span>
          <h1>
            The home for
            <br />
            <span>space, craftsmanship,</span>
            <br />
            and visible wins.
          </h1>
          <p>
            Built for founders, operators, and web3 teams who want their
            presence to feel as sharp as their conviction. ODIN/HQ turns raw
            momentum into premium identity, launch-ready pages, and social
            signal people remember.
          </p>

          <div className="hero-actions">
            <a href="#proof" className="cta-primary">
              View wins
            </a>
            <a href="#coffee" className="cta-secondary">
              Buy a coffee
            </a>
          </div>

          <div className="hero-meta">
            <span>Trusted by founders, traders, and builders</span>
            <strong>4.9/5 signal rating</strong>
          </div>
        </div>

        <div className="hero-visual" aria-label="Brand dashboard preview">
          <div className="hero-glow" />
          <div className="hero-device">
            <div className="mini-card mini-card-top">
              <span>Weekly wins</span>
              <strong>$5.27M</strong>
              <small>reach across launch assets</small>
            </div>

            <div className="hero-screen">
              <div className="screen-top">
                <span>ODIN score</span>
                <strong>89</strong>
              </div>
              <div className="screen-stats">
                <article>
                  <strong>15</strong>
                  <span>launches</span>
                </article>
                <article>
                  <strong>12</strong>
                  <span>partners</span>
                </article>
                <article>
                  <strong>49</strong>
                  <span>wins</span>
                </article>
                <article>
                  <strong>20</strong>
                  <span>spaces</span>
                </article>
              </div>
              <div className="screen-bar">
                <span>Momentum</span>
                <div>
                  <i />
                </div>
              </div>
              <a href="#process" className="screen-button">
                Explore process
              </a>
            </div>

            <div className="coin coin-one" />
            <div className="coin coin-two" />
            <div className="coin coin-three" />
            <div className="mini-card mini-card-bottom">
              <span>Positioning status</span>
              <strong>live and compounding</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <span>Trusted in fast-moving corners of the space</span>
        <div>
          <p>Launch circles</p>
          <p>Alpha groups</p>
          <p>Onchain teams</p>
          <p>Founder networks</p>
        </div>
      </section>

      <BuyMeCoffee />

      <section className="content-section" id="process">
        <div className="section-copy center">
          <span className="eyebrow">How does it work?</span>
          <h2>A clean process that still feels native to crypto speed.</h2>
        </div>

        <div className="process-grid">
          {processCards.map((card) => (
            <article key={card.id} className="process-card">
              <span className="process-id">{card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section market-section">
        <div className="section-copy">
          <span className="eyebrow">Seamless access to global markets with craft</span>
          <h2>Bridging crypto attention and premium brand execution.</h2>
          <p>
            Good web3 work is part narrative, part interface, part social
            gravity. This page architecture makes all three visible.
          </p>
          <div className="pill-row">
            <span>Brand strategy</span>
            <span>Onchain aesthetics</span>
            <span>Community-ready assets</span>
          </div>
        </div>

        <div className="donut-panel" aria-label="Breakdown chart">
          <div className="donut-chart">
            <div className="donut-center">craft</div>
          </div>
          <div className="donut-legend">
            <div>
              <i className="legend-brand" />
              <span>Brand system 40%</span>
            </div>
            <div>
              <i className="legend-launch" />
              <span>Launch assets 25%</span>
            </div>
            <div>
              <i className="legend-social" />
              <span>Social presence 20%</span>
            </div>
            <div>
              <i className="legend-proof" />
              <span>Proof capture 15%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section visual-section" id="proof">
        <div className="visual-collage" aria-hidden="true">
          <div className="floating-panel panel-left">
            <span>Launch page</span>
            <strong>crafted to feel expensive</strong>
          </div>
          <div className="phone-card phone-left" />
          <div className="core-emblem">O</div>
          <div className="phone-card phone-right" />
          <div className="floating-panel panel-right">
            <span>Social kit</span>
            <strong>made for repost velocity</strong>
          </div>
        </div>

        <div className="section-copy">
          <span className="eyebrow">Everything in one system</span>
          <h2>One direction for the page, the socials, the wins, and the story.</h2>
          <p>
            Instead of scattered assets, your client gets a single visual
            language that looks consistent across launch threads, landing pages,
            deck screenshots, and community touchpoints.
          </p>
        </div>
      </section>

      <section className="content-section token-section">
        <div className="token-chart">
          <div className="ring-chart">
            <div className="ring-chart-inner">100%</div>
          </div>
          <ul>
            <li>
              <span>35%</span>
              <p>Identity system</p>
            </li>
            <li>
              <span>25%</span>
              <p>Landing experience</p>
            </li>
            <li>
              <span>20%</span>
              <p>Launch support</p>
            </li>
            <li>
              <span>20%</span>
              <p>Social ecosystem</p>
            </li>
          </ul>
        </div>

        <div className="token-copy">
          <span className="eyebrow">What is inside the system?</span>
          <h2>A client-ready stack that makes the whole brand feel coherent.</h2>
          <div className="number-list">
            <article>
              <strong>01</strong>
              <div>
                <h3>Token-like precision</h3>
                <p>Clear hierarchy, focused sections, and attention funnels that feel deliberate.</p>
              </div>
            </article>
            <article>
              <strong>02</strong>
              <div>
                <h3>Timeline-native visuals</h3>
                <p>The same visual DNA can stretch into thumbnails, banners, threads, and social promos.</p>
              </div>
            </article>
            <article>
              <strong>03</strong>
              <div>
                <h3>Receipts built into the story</h3>
                <p>Wins, testimonials, and proof points do more than decorate the page. They drive trust.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section roadmap-section">
        <div className="section-copy">
          <span className="eyebrow">Roadmap</span>
          <h2>From first spark to public momentum.</h2>
        </div>
        <div className="roadmap-card">
          <div className="roadmap-step active">
            <strong>Phase 01</strong>
            <p>Brand audit, mood direction, market reading.</p>
          </div>
          <div className="roadmap-step active">
            <strong>Phase 02</strong>
            <p>UI build, launch page, and social asset system.</p>
          </div>
          <div className="roadmap-step">
            <strong>Phase 03</strong>
            <p>Proof layering, testimonials, and conversion polish.</p>
          </div>
          <div className="roadmap-step">
            <strong>Phase 04</strong>
            <p>Expansion into case studies, dashboards, and community loops.</p>
          </div>
        </div>
      </section>

      <section className="content-section feature-section">
        <div className="section-copy">
          <span className="eyebrow">Our features</span>
          <h2>Made to give a founder’s space more gravity.</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article key={feature} className="feature-card">
              <h3>{feature}</h3>
              <a href="#coffee">Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section table-section">
        <div className="section-copy center">
          <span className="eyebrow">Standout features</span>
          <h2>Not every page in crypto needs to look the same.</h2>
        </div>
        <div className="comparison-table">
          <div className="table-head">
            <span>Feature</span>
            <span>ODIN/HQ</span>
            <span>Template</span>
            <span>Agency</span>
            <span>Freelancer</span>
          </div>
          {tableRows.map(([label, odin, template, agency, freelancer]) => (
            <div key={label} className="table-row">
              <span>{label}</span>
              <span>{odin ? "●" : "○"}</span>
              <span>{template ? "●" : "○"}</span>
              <span>{agency ? "●" : "○"}</span>
              <span>{freelancer ? "●" : "○"}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section review-section">
        <div className="section-copy">
          <span className="eyebrow">Trader reviews</span>
          <h2>Clients mostly notice the difference in how confident the brand suddenly feels.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.name} className="review-card">
              <span className="stars">★★★★★</span>
              <p>{review.quote}</p>
              <strong>{review.name}</strong>
              <small>{review.role}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section faq-section" id="faq">
        <div className="section-copy">
          <span className="eyebrow">Frequently asked questions</span>
          <h2>Fast answers for teams deciding how serious they want to look.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article key={faq} className="faq-item">
              <span>{faq}</span>
              <strong>{index === 0 ? "−" : "+"}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2>The ultimate degen home for builders with taste.</h2>
        </div>
        <div className="hero-actions">
          <a href="#coffee" className="cta-primary">
            Buy coffee
          </a>
          <a href="#wins" className="cta-secondary">
            Revisit wins
          </a>
        </div>
      </section>
    </div>
  );
}
