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
              Founded in 1995, the Atlanta Wild began as more than just a sports team – 
              we started as a dream to bring championship-level athletics to our city. 
              Through decades of dedication, strategic gameplay, and unwavering community 
              support, we've evolved into the powerhouse organization you see today.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Our journey hasn't been without challenges, but each obstacle has only 
              strengthened our resolve. From our first championship in 2003 to our recent 
              title defense, every victory belongs to our incredible fans, dedicated staff, 
              and the exceptional athletes who wear our colors with pride.
            </p>
            
            {/* Pull Quote */}
            <div 
              className="relative p-8 rounded-xl text-white my-12"
              style={{ backgroundColor: '#C8102E' }}
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-white/50" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed pl-12">
                "We don't just play to win games. We play to inspire a city, 
                to show what's possible when talent meets determination."
              </blockquote>
              <cite className="block mt-6 text-lg text-white/80">
                — Marcus Johnson, Team Captain
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