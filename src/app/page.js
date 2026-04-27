import { HeroContent } from "@/components/hero-content";
import { SiteHeader } from "@/components/site-header";
import { SocialDock } from "@/components/social-dock";

export default function HomePage() {
  return (
    <main className="landing-shell">
      <SiteHeader />
      <HeroContent />
      <SocialDock />
    </main>
  );
}
