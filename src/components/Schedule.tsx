import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

export function Schedule() {
  const [currentView, setCurrentView] = useState('future'); // 'previous' or 'future'
  
  const previousMatches = [
    {
      id: 1,
      opponent: "Florida Sharks",
      date: "May 10, 2025",
      time: "7:00 PM EST",
      venue: "Atlanta Grid Arena",
      isHome: true,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />, 
      result: "W 85-72"
    },
    {
      id: 2,
      opponent: "Fort Lauderdale Lions",
      date: "June 16, 2025",
      time: "8:00 PM EST",
      venue: "Steel Dome",
      isHome: false,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />, 
      result: "L 78-65"
    },
    {
      id: 3,
      opponent: "South Beach Palms",
      date: "July 16, 2025",
      time: "6:30 PM EST",
      venue: "Atlanta Grid Arena",
      isHome: true,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />, 
      result: "W 92-88"
    },
    {
      id: 4,
      opponent: "Denver Altitude",
      date: "December 8, 2024",
      time: "9:00 PM EST",
      venue: "Mile High Arena",
      isHome: false,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />, 
      result: "L 68-75"
    },
    {
      id: 5,
      opponent: "Las Vegas Neon",
      date: "December 1, 2024",
      time: "10:00 PM EST",
      venue: "Neon Stadium",
      isHome: false,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />, 
      result: "W 83-79"
    }
  ];

  const futureMatches = [
    {
      id: 6,
      opponent: "Phoenix Thunder",
      date: "February 15, 2025",
      time: "7:00 PM EST",
      venue: "Atlanta Grid Arena",
      isHome: true,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />
    },
    {
      id: 7,
      opponent: "Dallas Forge",
      date: "February 28, 2025", 
      time: "8:30 PM EST",
      venue: "Forge Stadium",
      isHome: false,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />
    },
    {
      id: 8,
      opponent: "Seattle Storm",
      date: "March 8, 2025",
      time: "6:00 PM EST", 
      venue: "Atlanta Grid Arena",
      isHome: true,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />
    },
    {
      id: 9,
      opponent: "New York Lightning",
      date: "March 22, 2025",
      time: "7:30 PM EST",
      venue: "Thunder Dome",
      isHome: false,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />
    },
    {
      id: 10,
      opponent: "California Quakes",
      date: "April 5, 2025",
      time: "10:00 PM EST",
      venue: "Atlanta Grid Arena",
      isHome: true,
      logo: <img src="/icons/ugl-icon.webp" alt="Match Logo" className="h-8 w-8" />
    }
  ];

  const displayMatches = currentView === 'future' ? futureMatches.slice(0, 3) : previousMatches.slice(0, 3);

  return (
    <section id="season-schedule" className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-20 w-full overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            2026 SCHEDULE
          </h2>

          
          {/* Navigation Buttons with Stats - Mobile Responsive */}
          <div className="space-y-6 mb-8 max-w-6xl mx-auto">
            {/* Season Stats - Above buttons on mobile, center on desktop */}
            <div className="flex justify-center">
              <div className="flex items-center gap-8 md:gap-12 text-center text-white">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black" style={{ color: '#C8102E' }}>
                    0-0
                  </div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wide text-white/80">Current Record</p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black" style={{ color: '#C8102E' }}>
                    15
                  </div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wide text-white/80">Games Remaining</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <button
                onClick={() => setCurrentView('previous')}
                className="flex items-center gap-2 px-4 sm:px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 bg-transparent border-2 text-white hover:bg-white hover:text-black text-sm sm:text-base"
                style={{ borderColor: '#ffffff' }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Previous Matches</span>
              </button>
              
              <button
                onClick={() => setCurrentView('future')}
                className="flex items-center gap-2 px-4 sm:px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 bg-transparent border-2 text-white hover:bg-white hover:text-black text-sm sm:text-base"
                style={{ borderColor: '#ffffff' }}
              >
                <span className="whitespace-nowrap">Future Matches</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayMatches.map((match, index) => (
            <Card 
              key={match.id}
              className="bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-6 space-y-4">
                {/* Match Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{match.logo}</div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-wide text-black">
                        vs {match.opponent}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Match Details */}
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" style={{ color: '#C8102E' }} />
                    <span className="font-semibold">{match.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" style={{ color: '#C8102E' }} />
                    <span className="font-semibold">{match.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" style={{ color: '#C8102E' }} />
                    <span className="font-semibold">{match.venue}</span>
                  </div>
                </div>

                {/* Action Button or Result */}
                <div className="pt-4 border-t border-gray-300">
                  {currentView === 'future' ? (
                    <a 
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 px-4 bg-transparent border-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 text-center text-black"
                      style={{ borderColor: '#C8102E' }}

                    >
                      WATCH LIVE
                    </a>
                  ) : (
                    <div className="text-center">
                      <div className={`text-2xl font-black ${match.result?.startsWith('W') ? 'text-green-400' : 'text-red-400'}`}>
                        {match.result}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
      

    </section>
  );
}