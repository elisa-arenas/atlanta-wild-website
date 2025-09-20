export function TeamOverview() {
  return (
    <section 
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ 
        background: `linear-gradient(135deg, #C8102E 0%, #000000 100%)` 
      }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8">
          Built for Victory
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          The Atlanta Wild isn't just a team – we're a force of nature. With years of 
          dedication, countless hours of training, and an unbreakable bond, we've earned 
          our place as champions. Our legacy is written in sweat, determination, and the 
          roar of our fans.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div className="space-y-4">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: '#C8102E' }}>
              12
            </div>
            <p className="text-lg">Championship Titles</p>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: '#C8102E' }}>
              85%
            </div>
            <p className="text-lg">Win Rate This Season</p>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: '#C8102E' }}>
              50K+
            </div>
            <p className="text-lg">Passionate Fans</p>
          </div>
        </div>
      </div>
    </section>
  );
}