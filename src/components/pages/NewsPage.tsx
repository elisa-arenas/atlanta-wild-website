import { Navigation } from "../Navigation";

export function NewsPage() {
  const matchData = [
    {
      id: 1,
      title: "Match vs South Beach Palms",
      summary: "Result: W 17-15",
      date: "July 16, 2025",
      category: "Regular Season",
      videoURL: "https://youtu.be/-MRqU8AeKdk"
    },
    {
      id: 2,
      title: "Match vs Fort Lauderdale Lions",
      summary: "Result: L 19-6",
      date: "June 16, 2025",
      category: "Regular Season",
      videoURL: "https://youtu.be/4mYcfcCcPzM"
    },
    {
      id: 3,
      title: "Match vs Florida Sharks",
      summary: "Result: L 100-63",
      date: "May 27, 2025",
      category: "Championship Rematch",
      videoURL: "https://youtu.be/jr4m7vsbNVc"
    }
  ];

  const featuredArticle = {
    id: 1,
    title: "Atlanta Wild Wins 2024 UGL Championship!",
    summary: "As the confetti settled on the grid floor, the 2024 United Grid League Championship will be remembered as a showcase of athletic excellence and strategic team competition that came down to the final race.",
    date: "November 27, 2024",
    category: "Championship",
    videoURL: "https://youtu.be/X8eh7fxa1EU",
    newsArticle: "https://unitedgridleague.com/teams/atlantawild/grid-league-championship-2024-sharks-vs-wild-2/",
    featured: true
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-[#C8102E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Recent Wild News</h1>
          <p className="text-xl text-white/90">Stay updated with the latest from your championship team</p>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#C8102E] to-black rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <a
                  href={featuredArticle.videoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video lg:aspect-square bg-black/30 flex items-center justify-center"
                >
                  <img
                    src={`https://img.youtube.com/vi/${featuredArticle.videoURL.split("/").pop()}/hqdefault.jpg`}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredArticle.title}</h2>
                  <p className="text-white/90 text-lg mb-6">{featuredArticle.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">{featuredArticle.date}</span>
                    <a
                      href={featuredArticle.newsArticle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#C8102E] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchData.map((match) => {
              const videoId = match.videoURL.includes("youtu.be")
                ? match.videoURL.split("/").pop()
                : new URL(match.videoURL).searchParams.get("v");

              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <div key={match.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <a href={match.videoURL} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-video bg-gradient-to-br from-[#C8102E] to-black/50 flex items-center justify-center">
                      <img
                        src={thumbnailUrl}
                        alt={match.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="p-6">
                    <span className="inline-block bg-[#C8102E] text-white px-2 py-1 rounded text-xs font-semibold mb-3">
                      {match.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{match.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">{match.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs">{match.date}</span>
                      <button className="text-[#C8102E] hover:text-red-400 transition-colors duration-200 text-sm font-semibold">
                        Watch Now →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}