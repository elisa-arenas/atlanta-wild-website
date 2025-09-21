import { Instagram, Twitter, Facebook, TicketCheckIcon, Camera, VideoIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/unitedgridleague/reel/DCR5pB6uLuY/",
    platform: "instagram",
    caption: "Championship celebration! 🏆 #AtlantaWild #Champions",
    thumbnail: "/instagramThumbnails/instaReel1Thumbail.png"
  },
  {
    id: 2,
    url: "https://www.instagram.com/atlantawild/reel/DAs-QtvOTO6/",
    platform: "instagram",
    caption: "Game day ready 💪❤️ #WildSide #GameTime",
    thumbnail: "/instagramThumbnails/reel2.png"
  },
  {
    id: 3,
    url: "https://www.instagram.com/unitedgridleague/reel/DOZZZtIEpTH/",
    platform: "instagram",
    caption: "Team bonding session 🤝❤️ #TeamWork #WildFamily",
    thumbnail: "/instagramThumbnails/reel3.png"
  },
  {
    id: 4,
    url: "https://www.instagram.com/unitedgridleague/reel/DOWN9s6jVNC/",
    platform: "instagram",
    caption: "Training hard for the next game 🔥🎯 #NeverSettle",
    thumbnail: "/instagramThumbnails/reel4.png"
  }
];

export function SocialMediaGallery() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            FOLLOW THE <span className="text-white">WILD SIDE</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay connected with Atlanta Wild across all social platforms. Get behind-the-scenes content, game highlights, and exclusive team updates.
          </p>

          <div className="flex justify-center space-x-6 mt-8">
            {/* Buttons for social links */}
            <a
              href="https://www.instagram.com/atlantawild/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: "#C8102E" }}
            >
              <Instagram className="w-5 h-5" />
              <span>@atlantawild</span>
            </a>
            <a 
              href="https://www.tiktok.com/@atlanta.wild" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: '#000000' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.288-1.982-1.288-3.338h-3.063v13.828c0 .746-.302 1.426-.79 1.915a2.72 2.72 0 01-1.915.79 2.72 2.72 0 01-1.915-.79 2.72 2.72 0 01-.79-1.915c0-.746.302-1.426.79-1.915a2.72 2.72 0 011.915-.79c.298 0 .583.048.849.137V9.197a5.782 5.782 0 00-.849-.063c-3.192 0-5.781 2.589-5.781 5.781s2.589 5.781 5.781 5.781 5.781-2.589 5.781-5.781V8.318a9.115 9.115 0 005.055 1.54V6.795c-.849 0-1.659-.302-2.301-.849-.302-.258-.565-.548-.789-.849-.302-.444-.516-.938-.611-1.458-.032-.175-.048-.357-.048-.541 0-.182.016-.357.048-.532.095-.52.309-1.014.611-1.458z"/>
              </svg>
              <span>@atlantawild</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-md group"
            >
              <div
                className="relative w-full"
                style={{
                  // Aspect ratio 9:16 — you can also use Tailwind's aspect-[9/16] if available
                  paddingTop: `${(16 / 9) * 100}%`,  
                  // this makes a vertical container
                }}
              >
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="
                    absolute top-0 left-0 w-full h-full object-cover object-center
                    transition-transform duration-300
                    group-hover:scale-205
                    group-hover:-translate-y-2"
                />
              </div>
              <div className="p-4 bg-gray-800">
                <p className="text-white text-sm">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}