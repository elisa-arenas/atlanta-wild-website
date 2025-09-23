import { Navigation } from "../Navigation";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TeamPage() {
  const players = [
    {
      id: 1,
      name: "Tom Sroka",
      position: "Strength Specialist",
      number: "23",
      bio: "Highland Games Pro, Strongman, MAS Wrestler",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 2,
      name: "Mixas Miller",
      position: "Utility Player",
      number: "96",
      bio: "Lightning-fast playmaker and defensive specialist.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 3,
      name: "Rafael Arreaza",
      position: "Utility Player",
      number: "20",
      bio: "Dominant force in the paint with incredible reach.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 4,
      name: "Kawika Henderson",
      position: "Strength Specialist",
      number: "51",
      bio: "Clutch performer known for game-winning shots.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 5,
      name: "Devon Braykovich",
      position: "Utility Player",
      number: "07",
      bio: "Versatile player who can play multiple positions.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 6,
      name: "Sidney Wilson",
      position: "Center",
      number: "21",
      bio: "Defensive anchor with exceptional shot-blocking ability.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 7,
      name: "Matt Cable",
      position: "Center",
      number: "21",
      bio: "Defensive anchor with exceptional shot-blocking ability.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 8,
      name: "Tyler Billington",
      position: "Center",
      number: "21",
      bio: "Defensive anchor with exceptional shot-blocking ability.",
      image: "/teamHeadshots/mix-headshot.jpg"
    },
    {
      id: 9,
      name: "Carrie Billington",
      position: "Utility Player",
      number: "16",
      bio: "Defensive anchor with exceptional shot-blocking ability.",
      image: "/teamHeadshots/mix-headshot.jpg"
    }
  ];

  const staff = [
    {
      id: 1,
      name: "Daniel Jackson",
      role: "Co-Coach",
      experience: "Former utility player turned head coach.",
      image: "/teamHeadshots/elisa-headshot.JPG"
    },
    {
      id: 2,
      name: "Robert Hibbard",
      role: "Co-Coach",
      experience: "Former utility player turned head coach.",
      image: "/teamHeadshots/elisa-headshot.JPG"
    },
    {
      id: 3,
      name: "Mia Austreng",
      role: "Co-owner",
      experience: "Specializes in player development.",
      image: "/teamHeadshots/elisa-headshot.JPG"
    },
    {
      id: 4,
      name: "Jonathon Chen",
      role: "Co-owner",
      experience: "6 years coaching experience",
      image: "/teamHeadshots/elisa-headshot.JPG"
    },
    {
      id: 5,
      name: "Kenniece Wilson-Smith",
      role: "Sponsorship Manager",
      experience: "12 years coaching experience",
      image: "/teamHeadshots/elisa-headshot.JPG"
    },
    {
      id: 6,
      name: "Elisa Arenas",
      role: "Social Media Manager",
      experience: "Atlanta Wild Website Developer",
      image: "/teamHeadshots/elisa-headshot.JPG"
    }
  ];

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-[#C8102E] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet the Team</h1>
          <p className="text-lg sm:text-xl text-white/90">The 2026 Atlanta Wild Team</p>
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
                    src={player.image} 
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
            {staff.map((person) => (
              <div key={person.id} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-black/30 flex items-center justify-center">
                  <ImageWithFallback
                    src={person.image} 
                    alt={person.name}
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
                  <h3 className="text-xl font-bold text-white mb-2">{person.name}</h3>
                  <p className="text-white font-semibold mb-2">{person.role}</p>
                  <p className="text-white/80 text-sm mb-3">{person.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}