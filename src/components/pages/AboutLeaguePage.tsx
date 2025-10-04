import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutLeaguePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-[#C8102E]">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="teamImages/mix-in-action.jpg"
            alt="Stadium background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ 
            fontFamily: 'Impact, Arial Black, sans-serif',
            textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
          }}>
            UNITED <span style={{ color: '#C8102E' }}>GRID</span> LEAGUE
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            The World’s First, Spectator Team Sport
          </p>
        </div>
      </section>

      {/* About the League */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                WHAT IS THE <span style={{ color: '#C8102E' }}>UGL</span>?
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                The United Grid League is the ultimate race based game requiring
                intense teamwork, high skill athleticism, and in-depth strategy.
                It is the world’s first, spectator team sport featuring men and women
                competing alongside and against one another. 
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Founded in 2017, the UGL has rapidly become the most prestigious league in 
                competitive athletics, and it is the first team sport specifically designed to
                be entertaining in the modern era.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="/teamImages/tom-in-action.jpg"
                alt="Athletes competing"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-white mb-12" style={{ 
            fontFamily: 'Impact, Arial Black, sans-serif'
          }}>
            COMPETITION <span style={{ color: '#C8102E' }}>FORMAT</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#C8102E' }}>
              <h3 className="text-2xl font-black text-white mb-4" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                THE GRID
              </h3>
              <p className="text-white/80 leading-relaxed">
                The playing surface features two parallel lanes each with a start line, finish line, 
                four quadrants, and hash marks along the side that are used in some races. There is 
                a central rig between lanes used for bodyweight elements. This layout enables clear 
                visualization of race progress for both competitors and spectators.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#C8102E' }}>
              <h3 className="text-2xl font-black text-white mb-4" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                RACE
              </h3>
              <p className="text-white/80 leading-relaxed">
                A series of athletic movements called elements to be performed as the head coach decides. 
                These races are consistent in rules and structure from match to match but vary in element 
                based on the match format of the day.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#C8102E' }}>
              <h3 className="text-2xl font-black text-white mb-4" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                MATCH
              </h3>
              <p className="text-white/80 leading-relaxed">
                Two teams going head to head in a series of races. Teams accumulate points based on race 
                outcomes. The team with the most points at the end of the match, wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* League Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ 
            fontFamily: 'Impact, Arial Black, sans-serif'
          }}>
            BY THE <span style={{ color: '#C8102E' }}>NUMBERS</span>
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>8</div>
              <div className="text-white/80 font-semibold">Elite Teams</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>100+</div>
              <div className="text-white/80 font-semibold">Professional Athletes</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>4</div>
              <div className="text-white/80 font-semibold">Competition Cities</div>
            </div>
            {/* <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>2.5M+</div>
              <div className="text-white/80 font-semibold">Global Fans</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Championship Info */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-8" style={{ 
            fontFamily: 'Impact, Arial Black, sans-serif'
          }}>
            THE <span style={{ color: '#C8102E' }}>CHAMPIONSHIP</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Every year, the top 8 teams battle for the ultimate prize in a grueling 
            championship series that showcases the very best of athletic competition. 
            The 2024 champions, Atlanta Wild, demonstrated unparalleled dominance 
            throughout the season.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-2">
              <img src="/icons/atl-wild-logo.png" alt="Atlanta Wild Logo" className="h-16" />
              <img src="/icons/ugl-icon.webp" alt="UGL Logo" className="h-16" />
            </div>
        </div>
      </section>
    </div>
  );
}