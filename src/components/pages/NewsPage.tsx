import { Navigation } from "../Navigation";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Atlanta Wild Wins 2024 UGL Championship!",
      summary: "In a thrilling final match, the Wild defeated the Metro Titans 28-21 to claim their first championship title.",
      date: "March 15, 2024",
      category: "Championship",
      featured: true
    },
    {
      id: 2,
      title: "Marcus Johnson Named League MVP",
      summary: "Team captain Marcus Johnson receives the prestigious Most Valuable Player award for his outstanding season performance.",
      date: "March 20, 2024",
      category: "Awards"
    },
    {
      id: 3,
      title: "Wild Signs Three New Players for 2025 Season",
      summary: "The organization announces the signing of three promising athletes as they prepare for the upcoming season.",
      date: "February 28, 2024",
      category: "Roster"
    },
    {
      id: 4,
      title: "Championship Parade Draws Record Crowds",
      summary: "Over 50,000 fans lined the streets of Atlanta to celebrate the Wild's historic championship victory.",
      date: "March 18, 2024",
      category: "Community"
    },
    {
      id: 5,
      title: "Wild Training Facility Receives Major Upgrade",
      summary: "The team unveils state-of-the-art training equipment and facilities to maintain their competitive edge.",
      date: "February 10, 2024",
      category: "Facilities"
    },
    {
      id: 6,
      title: "Coach Stevens Extends Contract Through 2027",
      summary: "Head coach Mike Stevens signs a contract extension, ensuring continuity for the championship team.",
      date: "January 25, 2024",
      category: "Coaching"
    }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

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
                <div className="aspect-video lg:aspect-square bg-black/30 flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C8102E] to-black">
                        <div className="text-center text-white">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-lg">Featured Story</p>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredArticle.title}</h2>
                  <p className="text-white/90 text-lg mb-6">{featuredArticle.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">{featuredArticle.date}</span>
                    <button className="bg-white text-[#C8102E] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Read More
                    </button>
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
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-[#C8102E] to-black/50 flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={article.title}
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    }
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#C8102E] text-white px-2 py-1 rounded text-xs font-semibold mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">{article.date}</span>
                    <button className="text-[#C8102E] hover:text-red-400 transition-colors duration-200 text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-gradient-to-r from-[#C8102E] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/90 text-lg mb-8">
            Get the latest Wild news, exclusive content, and behind-the-scenes updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/50"
            />
            <button className="bg-white text-[#C8102E] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}