import teamImage from 'figma:asset/d2fc8335bf6e9be9243efcb93fe992849b2727b9.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/teamImages/attempt7000.svg"
          alt="Atlanta Wild Team"
          className="w-full h-full object-cover"
        />
        {/* Removed all overlays and gradients */}
      </div>
    </section>
  );
}
