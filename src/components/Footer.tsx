import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Team Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2 text-white">
                Atlanta <span style={{ color: '#C8102E' }}>Wild</span>
              </h3>
              <p className="text-white/80">
                The Official Atlanta Team of the United Grid League
              </p>
            </div>
            
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" style={{ color: '#C8102E' }} />
                <span>1500 Wild Stadium Way, Atlanta, GA 30309</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: '#C8102E' }} />
                <span>(404) 555-WILD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: '#C8102E' }} />
                <span>mia@atlantawild.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="/#season-schedule" className="hover:text-white transition-colors">Season Schedule</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Team Roster</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">Team News</a></li>
              <li><a href="/sponsors" className="hover:text-white transition-colors">Our Sponsors</a></li>

            </ul>
          </div>



          {/* League & Social */}
          <div>
            <h4 className="text-lg mb-6 text-white">Connect With Us</h4>
            
            {/* League Logo Placeholder */}
            <div className="mb-6">
              <div 
                className="w-32 h-12 flex items-center justify-center text-white rounded-md mb-4"
                style={{ backgroundColor: '#C8102E' }}
              >
                <span className="text-sm">United Grid League</span>
              </div>
              <p className="text-white/80 text-sm">Official member of the UGL</p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-white/80 text-sm">Follow the Wild Side:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/atlantawild/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:opacity-80"
                  style={{ backgroundColor: '#C8102E' }}
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@atlanta.wild" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  title="Follow us on TikTok"
                >
                  {/* TikTok icon using a simple SVG since Lucide doesn't have TikTok */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.288-1.982-1.288-3.338h-3.063v13.828c0 .746-.302 1.426-.79 1.915a2.72 2.72 0 01-1.915.79 2.72 2.72 0 01-1.915-.79 2.72 2.72 0 01-.79-1.915c0-.746.302-1.426.79-1.915a2.72 2.72 0 011.915-.79c.298 0 .583.048.849.137V9.197a5.782 5.782 0 00-.849-.063c-3.192 0-5.781 2.589-5.781 5.781s2.589 5.781 5.781 5.781 5.781-2.589 5.781-5.781V8.318a9.115 9.115 0 005.055 1.54V6.795c-.849 0-1.659-.302-2.301-.849-.302-.258-.565-.548-.789-.849-.302-.444-.516-.938-.611-1.458-.032-.175-.048-.357-.048-.541 0-.182.016-.357.048-.532.095-.52.309-1.014.611-1.458z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              <p>&copy; 2024 Atlanta Wild. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
}