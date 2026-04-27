import { BuyMeCoffee } from "@/components/buy-me-coffee";

const processCards = [
  {
    id: "01",
    title: "Signal Reading",
    text: "Odin tracks market structure, trend shifts, and degen attention before most of the timeline catches up.",
  },
  {
    id: "02",
    title: "Narrative Positioning",
    text: "Each project gets a sharper story, cleaner angle, and stronger market identity built for web3 attention.",
  },
  {
    id: "03",
    title: "Team Formation",
    text: "From mods to managers to builders, the right people get plugged into the system to keep momentum alive.",
  },
  {
    id: "04",
    title: "Project Structure",
    text: "Odin helps shape launches across Solana and web3 with the operational layer needed to move from idea to execution.",
  },
  {
    id: "05",
    title: "Community Pressure",
    text: "Telegram, X, and community flow are managed with the right mix of culture, clarity, and controlled energy.",
  },
  {
    id: "06",
    title: "Compounding Edge",
    text: "Signals, execution, and team structure turn isolated wins into a system that keeps producing over time.",
  },
];

const featureCards = [
  "Solana-native project building with trader instinct.",
  "Telegram signals and Twitter trend intelligence under one roof.",
  "Team building across managers, mods, operators, and builders.",
  "A portfolio home that presents Odin as a full web3 system.",
];

const tableRows = [
  ["Solana-native positioning", true, false, false, false],
  ["Signal-led market reads", true, false, false, false],
  ["Team builder mindset", true, false, true, false],
  ["Community management layer", true, false, false, true],
  ["Trend-aware execution", true, true, false, false],
  ["Operator plus brand presence", true, false, false, false],
];

const reviews = [
  {
    quote:
      "Odin understands how traders think, how communities move, and how projects need to position on Solana. That mix is rare.",
    name: "Sol founder",
    role: "Launch partner",
  },
  {
    quote:
      "It never felt like we hired one person. It felt like we plugged into a system that already knew how to move.",
    name: "Community lead",
    role: "Web3 project operator",
  },
  {
    quote:
      "From signals to team structure to narrative clarity, Odin brought conviction and coordination at the same time.",
    name: "Builder",
    role: "Onchain ecosystem contributor",
  },
];

const faqs = [
  "What does Odin actually do across web3 projects?",
  "Is this mainly for Solana and degen trading culture?",
  "Can Odin help with team building, mods, and management too?",
  "Do you also post signals and talk about market trends?",
];

export function HeroContent() {
  return (
    <div className="page-stack">
      <section className="hero-panel" id="wins">
        <div className="hero-copy">
          <span className="eyebrow">solana, signals, teams, momentum</span>
          <h1>
            ODIN is not
            <br />
            <span>just a person.</span>
            <br />
            ODIN is a system.
          </h1>
          <p>
            Sensei in degen trading, Solana-native projects, and web3 teams
            that need more than hype. Odin works across signals, market
            trends, project building, team building, management, moderation,
            and online positioning.
          </p>
          <p>
            <strong>Been in the space for over a decade.</strong>
          </p>

          <div className="hero-actions">
            <a href="#proof" className="cta-primary">
              Explore the system
            </a>
            <a href="#coffee" className="cta-secondary">
              Support Odin
            </a>
          </div>

          <div className="hero-meta">
            <span>Telegram signals. Twitter trend reads. Web3 team execution.</span>
            <strong>10+ years in the space</strong>
          </div>
        </div>

        <div className="hero-visual" aria-label="Brand dashboard preview">
          <div className="hero-glow" />
          <div className="hero-device">
            <div className="mini-card mini-card-top">
              <span>Trend radar</span>
              <strong>live</strong>
              <small>signals, narrative and market watch</small>
            </div>

            <div className="hero-screen">
              <div className="screen-top">
                <span>ODIN system</span>
                <strong>24/7</strong>
              </div>
              <div className="screen-stats">
                <article>
                  <strong>10+</strong>
                  <span>years</span>
                </article>
                <article>
                  <strong>Sol</strong>
                  <span>native</span>
                </article>
                <article>
                  <strong>X</strong>
                  <span>trends</span>
                </article>
                <article>
                  <strong>TG</strong>
                  <span>signals</span>
                </article>
              </div>
              <div className="screen-bar">
                <span>Market pulse</span>
                <div>
                  <i />
                </div>
              </div>
              <a href="#process" className="screen-button">
                See how Odin moves
              </a>
            </div>

            <div className="coin coin-one" />
            <div className="coin coin-two" />
            <div className="coin coin-three" />
            <div className="mini-card mini-card-bottom">
              <span>Operator status</span>
              <strong>active across signal, teams, and execution</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <span>Built for the fast-moving side of Solana and web3</span>
        <div>
          <p>Degen trading</p>
          <p>Signal channels</p>
          <p>Project teams</p>
          <p>Operator networks</p>
        </div>
      </section>

      <BuyMeCoffee />

      <section className="content-section" id="process">
        <div className="section-copy center">
          <span className="eyebrow">How the system works</span>
          <h2>Odin reads the market, builds the structure, and keeps the machine moving.</h2>
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
          <span className="eyebrow">Signals, trends, and execution</span>
          <h2>From market reads to project structure, Odin covers more than one lane.</h2>
          <p>
            The edge is not just posting calls. It is understanding where the
            market is moving, what the narrative is becoming, and how a team
            should position before attention peaks.
          </p>
          <div className="pill-row">
            <span>Signal analysis</span>
            <span>Trend mapping</span>
            <span>Project execution</span>
          </div>
        </div>

        <div className="donut-panel" aria-label="Breakdown chart">
          <div className="donut-chart">
            <div className="donut-center">craft</div>
          </div>
          <div className="donut-legend">
            <div>
              <i className="legend-brand" />
              <span>Signals 40%</span>
            </div>
            <div>
              <i className="legend-launch" />
              <span>Projects 25%</span>
            </div>
            <div>
              <i className="legend-social" />
              <span>Teams 20%</span>
            </div>
            <div>
              <i className="legend-proof" />
              <span>Trends 15%</span>
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
          <span className="eyebrow">Everything under Odin</span>
          <h2>One system for signal, presence, team structure, and project momentum.</h2>
          <p>
            Odin is not boxed into one title. Trader, builder, manager,
            operator, strategist, and community force can all exist under the
            same roof when the system is aligned.
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
              <p>Signals and market reads</p>
            </li>
            <li>
              <span>25%</span>
              <p>Project building</p>
            </li>
            <li>
              <span>20%</span>
              <p>Team and management</p>
            </li>
            <li>
              <span>20%</span>
              <p>Social presence</p>
            </li>
          </ul>
        </div>

        <div className="token-copy">
          <span className="eyebrow">What lives inside Odin?</span>
          <h2>A web3 operating system built around people, projects, and timing.</h2>
          <div className="number-list">
            <article>
              <strong>01</strong>
              <div>
                <h3>Trading instinct</h3>
                <p>Signals and market reads come from years of living inside volatile cycles and learning how attention really moves.</p>
              </div>
            </article>
            <article>
              <strong>02</strong>
              <div>
                <h3>Builder mindset</h3>
                <p>Projects need structure, team alignment, and operators who can execute beyond surface-level hype.</p>
              </div>
            </article>
            <article>
              <strong>03</strong>
              <div>
                <h3>Community pressure control</h3>
                <p>Telegram, X, moderation, and ongoing management all feed into the same larger strategy.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section roadmap-section">
        <div className="section-copy">
          <span className="eyebrow">Operating model</span>
          <h2>From market read to project momentum.</h2>
        </div>
        <div className="roadmap-card">
          <div className="roadmap-step active">
            <strong>Phase 01</strong>
            <p>Read the market, map the trend, spot the opening.</p>
          </div>
          <div className="roadmap-step active">
            <strong>Phase 02</strong>
            <p>Shape the project, the team, and the public angle.</p>
          </div>
          <div className="roadmap-step">
            <strong>Phase 03</strong>
            <p>Run signals, social pressure, moderation, and execution rhythm.</p>
          </div>
          <div className="roadmap-step">
            <strong>Phase 04</strong>
            <p>Compound attention into reputation, proof, and longer-term trust.</p>
          </div>
        </div>
      </section>

      <section className="content-section feature-section">
        <div className="section-copy">
          <span className="eyebrow">Core strengths</span>
          <h2>Made for web3 projects that need more than one-dimensional help.</h2>
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
          <span className="eyebrow">What makes Odin different</span>
          <h2>Not every operator can read the market, build teams, and shape public presence together.</h2>
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
          <span className="eyebrow">What people notice</span>
          <h2>The difference is usually in the clarity, timing, and pressure the system can handle.</h2>
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
          <h2>Quick answers about Odin, the system, and what it can support.</h2>
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
          <span className="eyebrow">Over a decade in the space</span>
          <h2>Odin is not just a person. Odin is a system built for web3 momentum.</h2>
        </div>
        <div className="hero-actions">
          <a href="#coffee" className="cta-primary">
            Support the system
          </a>
          <a href="#wins" className="cta-secondary">
            Back to the top
          </a>
        </div>
      </section>
    </div>
  );
}
