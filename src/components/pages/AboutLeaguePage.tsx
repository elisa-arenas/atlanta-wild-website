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
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBsZWFndWUlMjBzdGFkaXVtfGVufDF8fHx8MTc1NTk3NjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
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
            The Premier Athletic Competition Redefining Sports Excellence
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
                The United Grid League represents the pinnacle of modern athletic competition, 
                combining strength, strategy, and precision in a revolutionary format that tests 
                the limits of human performance.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Founded in 2020, the UGL has rapidly become the most prestigious league in 
                competitive athletics, featuring the world's elite teams competing across 
                multiple disciplines in state-of-the-art facilities.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc1NTk3NjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
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
                POWER ROUNDS
              </h3>
              <p className="text-white/80 leading-relaxed">
                Teams compete in strength-based challenges that test raw power, 
                endurance, and technique across multiple disciplines.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#C8102E' }}>
              <h3 className="text-2xl font-black text-white mb-4" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                PRECISION TRIALS
              </h3>
              <p className="text-white/80 leading-relaxed">
                Athletes demonstrate accuracy and technical skill in specialized 
                events requiring perfect form and timing.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border-l-4" style={{ borderLeftColor: '#C8102E' }}>
              <h3 className="text-2xl font-black text-white mb-4" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif'
              }}>
                TEAM CHALLENGES
              </h3>
              <p className="text-white/80 leading-relaxed">
                Collaborative events that test teamwork, strategy, and 
                coordinated execution under pressure.
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>16</div>
              <div className="text-white/80 font-semibold">Elite Teams</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>240+</div>
              <div className="text-white/80 font-semibold">Professional Athletes</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>12</div>
              <div className="text-white/80 font-semibold">Competition Cities</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2" style={{ color: '#C8102E' }}>2.5M+</div>
              <div className="text-white/80 font-semibold">Global Fans</div>
            </div>
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
          <div className="bg-white/10 p-8 rounded-lg inline-block">
            <div className="text-3xl font-black text-white mb-2">
              ATLANTA <span style={{ color: '#C8102E' }}>WILD</span>
            </div>
            <div className="text-lg text-white/80">2024 UGL Champions</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}