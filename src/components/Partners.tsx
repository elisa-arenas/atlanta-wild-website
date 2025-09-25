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
	},
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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{partnersData.map((partner) => (
						<a
							key={partner.id}
							href={partner.website}
							target="_blank"
							rel="noopener noreferrer"
							className="
                  group flex flex-col items-center space-y-6 p-8 rounded-xl
                  bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-105
                "
						>
							<div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
								<ImageWithFallback
									src={partner.image}
									alt={`${partner.name} logo`}
									className="w-20 h-20 md:w-24 md:h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
								/>
							</div>

							<div className="text-center">
								<h3 className="text-xl mb-2 text-black">{partner.name}</h3>
								<p className="text-sm text-gray-500">
									{partner.description}
								</p>
							</div>
						</a>
					))}
				</div>

				<div className="text-center mt-16">
					<a
						href="mailto:info@atlantawild.com"
						className="inline-block px-8 py-4 text-lg font-bold text-black bg-white/80 backdrop-blur-sm border-gray-300 rounded-md shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 hover:scale-105"
					>
						Interested in partnering with Atlanta Wild? Contact Us
					</a>
				</div>
			</div>
		</section>
	);
}
