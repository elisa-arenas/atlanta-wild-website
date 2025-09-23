import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";


const playersData = [
  {
    id: 1,
    name: "Tom Sokra",
    role: "Strength Specialist",
    image: "/teamImages/photo1.JPG",
    stats: "3,240 passing yards • 28 TDs • 92.5% completion rate",
    experience: "8 years pro"
  },
  {
    id: 2,
    name: "Mixas Miller",
    role: "Utility Player",
    image: "/teamImages/photo2.JPG",
    stats: "1,890 rushing yards • 15 TDs • 5.2 avg yards",
    experience: "5 years pro"
  },
  {
    id: 3,
    name: "James Washington",
    role: "Utility Player",
    image: "/teamImages/photo3.JPG",
    stats: "12.5 sacks • 45 tackles • 3 forced fumbles",
    experience: "6 years pro"
  },
  {
    id: 4,
    name: "Sidney Wilson",
    role: "Utility Player",
    image: "/teamImages/photo1.JPG",
    stats: "89 receptions • 1,340 yards • 11 TDs",
    experience: "4 years pro"
  }
];

export function PlayerProfiles() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            MEET OUR <span className="text-white">ATHLETES</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {playersData.map((player) => (
            <Card 
              key={player.id} 
              className="group overflow-hidden bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-gray-200 hover:border-red-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              
              <CardContent className="p-6 relative">
                <h3 className="text-xl mb-2 text-black">
                  {player.name}
                </h3>
                <p className="mb-4" style={{ color: '#C8102E' }}>
                  {player.role}
                </p>
                
                {/* Hover details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-6 -top-16 bg-white p-4 rounded-lg shadow-lg border-2 border-red-100">
                  <p className="text-sm text-gray-600 mb-2">{player.stats}</p>
                  <p className="text-xs text-gray-500">{player.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}