import { Link } from "react-router-dom";
import hero3Image from "@/assets/hero3.webp";

interface VideoHeroSectionProps {
  ctaLink?: string;
  className?: string;
}

export const VideoHeroSection = ({ 
  ctaLink = "/category/best-seller",
  className 
}: VideoHeroSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden bg-secondary aspect-video md:aspect-[16/9] ${className || ''}`}>
      {/* Hero Image */}
      <img 
        src={hero3Image} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 md:pb-24 section-padding">
        <div className="text-center">
          {/* Shop Now Button */}
          <Link
            to={ctaLink}
            className="inline-block px-8 py-3 bg-background text-foreground text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};
