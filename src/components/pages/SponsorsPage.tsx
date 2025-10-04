import { Navigation } from "../Navigation";

export function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      name: "Enduraphin",
      category: "Official Beverage Partner",
      description: "Fueling our athletes with On The Go, Ready-To-Mix Nutrition.",
      website: "https://enduraphin.com"
    },
    {
      id: 2,
      name: "TBA",
      category: "Official Equipment Partner",
      description: "Supporting our champions with premium energy drinks and sports nutrition.",
      website: "https://enduraphin.com"
    },
    // {
    //   id: 3,
    //   name: "TBA",
    //   category: "Official Beverage Partner",
    //   description: "Supporting Atlanta's finest athletes with non-carbonated boozy beverages.",
    //   website: "https://enduraphin.com"
    // }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-[#C8102E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Sponsors</h1>
          <p className="text-xl text-white/90">Proud partners supporting the Atlanta Wild championship journey.</p>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Logo placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#C8102E] to-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-white font-bold text-lg">{sponsor.name}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                  <p className="text-[#C8102E] font-semibold mb-3">{sponsor.category}</p>
                  <p className="text-white/70 text-sm mb-4">{sponsor.description}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C8102E] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-r from-[#C8102E] to-black rounded-lg p-8 mt-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Become a Sponsor</h2>
              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
                Join the Atlanta Wild family and support championship-level athletes while growing your brand 
                visibility in the United Grid League community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6 duration-300 hover:scale-105">
                  <h3 className="text-white font-bold text-lg mb-2">Brand Exposure</h3>
                  <p className="text-white/80 text-sm">Reach thousands of passionate fans across the league</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 duration-300 hover:scale-105">
                  <h3 className="text-white font-bold text-lg mb-2">Community Impact</h3>
                  <p className="text-white/80 text-sm">Support our athletes and community development</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 duration-300 hover:scale-105">
                  <h3 className="text-white font-bold text-lg mb-2">Exclusive Access</h3>
                  <p className="text-white/80 text-sm">Behind-the-scenes experiences</p>
                </div>
              </div>
              <a
                href="mailto:info@atlantawild.com"
                className="bg-white text-[#C8102E] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors duration-200 hover:scale-105 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}