import { ImageWithFallback } from "./figma/ImageWithFallback";

const partnersData = [
  {
    id: 1,
    name: "Enduraphin",
    image:
      "https://images.unsplash.com/photo-1642785327983-eacdf8e55ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwbG9nbyUyMGJyYW5kfGVufDF8fHx8MTc1NTQ3NDc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    website: "https://www.sporttech.com",
    description: "Official Equipment Partner",
  },
  {
    id: 2,
    name: "FreshFlow",
    image:
      "https://images.unsplash.com/photo-1535990379313-5cd271a2da2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGxvZ298ZW58MXx8fHwxNzU1MzcxOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    website: "https://www.freshflow.com",
    description: "Official Beverage Sponsor",
  },
  {
    id: 3,
    name: "Athletic Pro",
    image:
      "https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzU1NDQ4OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    website: "https://www.athleticpro.com",
    description: "Official Apparel Partner",
  }
];

export function Partners() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black uppercase tracking-wider text-white"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            OUR <span className="text-white">SPONSORS</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're proud to work with our sponsors who share our commitment to
            excellence and support the Atlanta Wild in achieving championship
            success.
          </p>
        </div>

        {/* centered, wrapping row of sponsor cards */}
        <div className="flex justify-center">
          {/* max-w keeps the row from stretching full width; flex-wrap + gap centers cards */}
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {partnersData.map((partner) => (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex flex-col items-center space-y-4 p-6 rounded-xl
                  bg-gray-50 hover:bg-white border-2 border-transparent
                  hover:border-red-100 transition-all duration-300 hover:shadow-lg hover:scale-105
                  w-44 sm:w-48 md:w-56 lg:w-60
                "
              >
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <ImageWithFallback
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg mb-1 text-black">{partner.name}</h3>
                  <p className="text-sm text-gray-500">{partner.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10  hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <span className="text-white/90">Interested in partnering with Atlanta Wild?</span>
            <a href="mailto:partnerships@atlantawild.com" className="hover:underline text-white">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
