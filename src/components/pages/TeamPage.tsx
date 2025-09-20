import { Navigation } from "../Navigation";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TeamPage() {
  const players = [
    {
      id: 1,
      name: "Tom Sroka",
      position: "Strength Specialist",
      number: "23",
      stats: "15.2 PPG, 8.1 RPG",
      bio: "Highland Games Pro, Strongman, MAS Wrestler"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      position: "Guard",
      number: "12",
      stats: "12.8 PPG, 6.3 APG",
      bio: "Lightning-fast playmaker and defensive specialist."
    },
    {
      id: 3,
      name: "Jordan Williams",
      position: "Center",
      number: "45",
      stats: "18.5 PPG, 11.2 RPG",
      bio: "Dominant force in the paint with incredible reach."
    },
    {
      id: 4,
      name: "Taylor Brown",
      position: "Guard",
      number: "8",
      stats: "11.7 PPG, 5.9 APG",
      bio: "Clutch performer known for game-winning shots."
    },
    {
      id: 5,
      name: "Cameron Davis",
      position: "Forward",
      number: "33",
      stats: "14.3 PPG, 7.8 RPG",
      bio: "Versatile player who can play multiple positions."
    },
    {
      id: 6,
      name: "Riley Thompson",
      position: "Center",
      number: "21",
      stats: "9.2 PPG, 9.7 RPG",
      bio: "Defensive anchor with exceptional shot-blocking ability."
    }
  ];

  const coaches = [
    {
      id: 1,
      name: "Coach Robert Hibbard",
      role: "Head Coach",
      experience: "Former utility player turned head coach.",
      bio: "US Army Vet, Physical Therapist Assistant"
    },
    {
      id: 2,
      name: "Co-owner Mia Austreng",
      role: "Co-owner",
      experience: "Specializes in player development and strategic planning.",
      bio: "Owner of Compass North Nutrition, Community&Sales Manger of Hairstrong Band."
    },
    {
      id: 3,
      name: "Co-owner Jonathon Chen",
      role: "Co-owner",
      experience: "6 years coaching experience",
      bio: "Professional Ballroom and Latin Dancer and NASM Certified."
    },
    {
      id: 4,
      name: "Kenniece Wilson-Smith",
      role: "Sponsorship Manager",
      experience: "12 years coaching experience",
      bio: "CEO of TBC Media Group, Chief Brand Officer of Wilson Smith Brand, Founder of Get The Bag Girl."
    },
    {
      id: 5,
      name: "Elisa Arenas",
      role: "Social Media Manager",
      experience: "Atlanta Wild Website Developer",
      bio: "Software Engineer, Freelancer in Photo, Video, and Web Development"
    },
    {
      id: 6,
      name: "Assistant Coach XXX",
      role: "Defensive Coordinator",
      experience: "6 years coaching experience",
      bio: "Former defensive specialist with expertise in game analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-[#C8102E] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet the Team</h1>
          <p className="text-lg sm:text-xl text-white/90">The champions who brought home the 2024 UGL Championship</p>
        </div>
      </div>

      {/* Players Section */}
      <div className="py-16 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Athletes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <div key={player.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-[#C8102E] to-black/50 flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={player.name}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-white mb-2">#{player.number}</div>
                          <div className="text-white text-lg">{player.position}</div>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                  <p className="text-[#C8102E] font-semibold mb-2">{player.position} • #{player.number}</p>
                  <p className="text-white/80 text-sm mb-3">{player.stats}</p>
                  <p className="text-white/70 text-sm">{player.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <div className="py-16 bg-gradient-to-r from-[#C8102E] to-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Coaching & Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="aspect-square bg-black/30 flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={coach.name}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{coach.name}</h3>
                  <p className="text-white font-semibold mb-2">{coach.role}</p>
                  <p className="text-white/80 text-sm mb-3">{coach.experience}</p>
                  <p className="text-white/70 text-sm">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}