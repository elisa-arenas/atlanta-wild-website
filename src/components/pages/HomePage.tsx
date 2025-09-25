import { Navigation } from "../Navigation";
import { Schedule } from "../Schedule";
import { PlayerProfiles } from "../PlayerProfiles";
import { Partners } from "../Partners";
import { MatchHighlights } from "../MatchHighlights";
import { TeamStory } from "../TeamStory";
import { SocialMediaGallery } from "../SocialMediaGallery";
import { Footer } from "../Footer";

export function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navigation />
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/teamImages/final.svg"
            alt="Atlanta Wild Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* <div className="relative w-full h-0.9 bg-gradient-to-r from-transparsent via-white to-transparent my-8"></div> */}
      <div className="bg-gradient-to-r from-back to-[#C8102E] w-full">
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