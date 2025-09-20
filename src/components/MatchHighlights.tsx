import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactPlayer from 'react-player';


const matchData = [
  {
    id: 1,
    date: "July 16, 2025",
    opponent: "South Beach Palms",
    result: "W 17-15",
    videoURL: "https://youtu.be/-MRqU8AeKdk",
    image: "https://images.unsplash.com/photo-1715270525118-ce589797568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHJ1bm5pbmd8ZW58MXx8fHwxNzU1NDc0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlight: "Regular Season"
  },
  {
    id: 2,
    date: "June 16, 2025",
    opponent: "Fort Lauderdale Lions",
    result: "L 19-6",
    videoURL: "https://youtu.be/-MRqU8AeKdk",
    image: "https://images.unsplash.com/photo-1547534171-243ab161cd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNrZXRiYWxsJTIwcGxheWVyJTIwYWN0aW9ufGVufDF8fHx8MTc1NTQzMTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlight: "Regular Season"
  },
  {
    id: 3,
    date: "May 27, 2025",
    opponent: "Florida Sharks",
    result: "L 100-63",
    videoURL: "https://youtu.be/-MRqU8AeKdk",
    image: "https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NDc0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlight: "Championship Rematch"
  }
];

export function MatchHighlights() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            RECENT WILD NEWS
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay up to date with the latest Atlanta Wild news, match results, and team updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchData.map((match) => (
            <Card 
              key={match.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-200"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={match.image}
                  alt={`Match against ${match.opponent}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className="text-white border-white" 
                    style={{ backgroundColor: '#C8102E' }}
                  >
                    {match.highlight}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{match.date}</p>
                    <h3 className="text-xl mb-2 text-black">
                      vs {match.opponent}
                    </h3>
                  </div>
                  <div 
                    className="text-2xl font-bold px-3 py-1 rounded-lg text-white"
                    style={{ backgroundColor: '#C8102E' }}
                  >
                    {match.result}
                  </div>
                </div>
                {/* Video section */}
                {match.videoURL && (
                  <div className="mt-4">
                    <ReactPlayer
                      // href={match.videoURL}
                      // url={match.videoURL}
                      light = {match.image} // makes the image the thumnail of the youtube video
                      width="100%"
                      height="200px"
                      controls
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}