import teamImage from 'figma:asset/d2fc8335bf6e9be9243efcb93fe992849b2727b9.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={teamImage}
          alt="Atlanta Wild Team Champions - United Grid League"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-full">
        <div className="text-white space-y-4 sm:space-y-6 max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-tight drop-shadow-2xl break-words">
            <span className="text-white drop-shadow-lg block sm:inline" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)', 
              fontFamily: 'Impact, Arial Black, sans-serif' 
            }}>ATLANTA</span>{" "}
            <span className="block sm:inline" style={{ 
              color: '#C8102E', 
              textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)', 
              fontFamily: 'Impact, Arial Black, sans-serif' 
            }}>WILD</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-wider leading-none block mt-2 sm:mt-4" style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)',
              color: '#ffffff'
            }}>
              2024 UGL CHAMPIONS
            </span>
          </h1>
          
          <div className="space-y-2 sm:space-y-4 max-w-full">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-black uppercase tracking-wide leading-tight break-words" style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.9)',
              color: '#ffffff'
            }}>
              THE OFFICIAL ATLANTA TEAM OF THE UNITED GRID LEAGUE
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
}