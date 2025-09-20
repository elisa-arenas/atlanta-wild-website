import { Navigation } from "../Navigation";
import { Hero } from "../Hero";
import { Schedule } from "../Schedule";
import { PlayerProfiles } from "../PlayerProfiles";
import { Partners } from "../Partners";
import { MatchHighlights } from "../MatchHighlights";
import { TeamStory } from "../TeamStory";
import { SocialMediaGallery } from "../SocialMediaGallery";
import { Footer } from "../Footer";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navigation />
      <Hero onNavigate={onNavigate} />
      <div className="bg-gradient-to-r from-black to-[#C8102E] w-full">
        <Schedule />
        <PlayerProfiles />
        <Partners />
        <MatchHighlights />
        <TeamStory />
        <SocialMediaGallery />
        <Footer />
      </div>
    </div>
  );
}