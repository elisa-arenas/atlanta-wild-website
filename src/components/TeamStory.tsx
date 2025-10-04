import { Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TeamStory() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              OUR LEGACY OF <span className="text-white">EXCELLENCE</span>
            </h2>
            
            <p className="text-lg text-white/90 leading-relaxed">
              paragraph here. paragraph here. paragraph here. paragraph here.
              paragraph here. paragraph here. paragraph here. paragraph here.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              paragraph here. paragraph here. paragraph here. paragraph here.
              paragraph here. paragraph here. paragraph here. paragraph here.
            </p>
            
            <div 
              className="relative p-8 rounded-xl text-white my-12"
              style={{ backgroundColor: '#C8102E' }}
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-white/50" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed pl-12">
                "Inspirational Quote Here..."
              </blockquote>
              <cite className="block mt-6 text-lg text-white/80">
                — Tom Sroka, Team Captain
              </cite>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="/public/teamImages/photo4.jpg"
                alt="Atlanta Wild stadium crowd"
                className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Decorative accent */}
            <div 
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 z-0"
              style={{ backgroundColor: '#C8102E' }}
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-30 z-0"
              style={{ backgroundColor: '#000000' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}