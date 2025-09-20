import { Instagram, Twitter, Facebook, TicketCheckIcon, Camera, VideoIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialPosts = [
  {
    id: 1,
    url:"https://www.instagram.com/unitedgridleague/reel/DCR5pB6uLuY/",
    platform: "instagram",
    caption: "Championship celebration! 🏆 #AtlantaWild #Champions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1715270525118-ce589797568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhmb290YmFsbCUyMHBsYXllciUyMHJ1bm5pbmd8ZW58MXx8fHwxNzU1NDc0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platform: "instagram",
    caption: "Game day ready 💪 #WildSide #GameTime"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551390415-0de411440ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NDc0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platform: "instagram",
    caption: "Team bonding session 🤝 #TeamWork #WildFamily"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1547534171-243ab161cd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNrZXRiYWxsJTIwcGxheWVyJTIwYWN0aW9ufGVufDF8fHx8MTc1NTQzMTk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platform: "instagram",
    caption: "Training hard for the next game 🔥 #NeverSettle"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1619030945899-c4307ae42479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNlYmFsbCUyMHBsYXllciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTQ1OTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platform: "instagram",
    caption: "Captain's focus 🎯 #Leadership #AtlantaWild"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1739301679780-fe9f807fd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHN0YWRpdW0lMjBjcm93ZHxlbnwxfHx8fDE3NTU0NzQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    platform: "instagram",
    caption: "Our amazing fans! ❤️ #WildFans #HomeAdvantage"
  }
];

export function SocialMediaGallery() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            FOLLOW THE <span className="text-white">WILD SIDE</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay connected with Atlanta Wild across all social platforms. 
            Get behind-the-scenes content, game highlights, and exclusive team updates.
          </p>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://www.instagram.com/atlantawild/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 px-6 py-3 rounded-full text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: '#C8102E' }}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <div key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-gray-800">
              {/* <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-gray-800"
              ></a> */}
              <ImageWithFallback
                src={post.image}
                alt="Social media post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Instagram className="w-4 h-4 text-white" />
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white text-xs leading-tight line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}