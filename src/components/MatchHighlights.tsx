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
    highlight: "Regular Season"
  },
  {
    id: 2,
    date: "June 16, 2025",
    opponent: "Fort Lauderdale Lions",
    result: "L 19-6",
    videoURL: "https://youtu.be/4mYcfcCcPzM",
    highlight: "Regular Season"
  },
  {
    id: 3,
    date: "May 27, 2025",
    opponent: "Florida Sharks",
    result: "L 100-63",
    videoURL: "https://youtu.be/jr4m7vsbNVc",
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
        {matchData.map((match) => {
          // extract videoId from either youtu.be or youtube.com URLs
          const videoId = match.videoURL.includes("youtu.be")
            ? match.videoURL.split("/").pop()
            : new URL(match.videoURL).searchParams.get("v");

          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <Card
              key={match.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-200"
            >
              <div className="relative h-48 overflow-hidden">
                <a
                  href={match.videoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <ImageWithFallback
                    src={thumbnailUrl}
                    alt={`Match against ${match.opponent}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
                <div className="absolute top-4 left-4">
                  <Badge
                    className="text-white border-white"
                    style={{ backgroundColor: "#C8102E" }}
                  >
                    {match.highlight}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{match.date}</p>
                    <h3 className="text-xl mb-2 text-black">vs {match.opponent}</h3>
                  </div>
                  <div
                    className="text-2xl font-bold px-3 py-1 rounded-lg text-white"
                    style={{ backgroundColor: "#C8102E" }}
                  >
                    {match.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}


        </div>
      </div>
    </section>
  );
}