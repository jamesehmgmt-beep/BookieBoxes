import { Link } from "react-router-dom";
import bestsellerImage from "@/assets/bestseller.jpg";
import newsetsImage from "@/assets/newsets.jpg";
import inspiredImage from "@/assets/inspired.jpg";
import momfavsImage from "@/assets/momfavs.jpg";

export const CategoryGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {/* Best Sellers */}
        <Link
          to="/category/best-seller"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={bestsellerImage} 
            alt="Best Sellers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              BEST SELLERS
            </span>
          </div>
        </Link>

        {/* New Sets */}
        <Link
          to="/category/new-sets"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={newsetsImage} 
            alt="New Sets"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              NEW SETS
            </span>
          </div>
        </Link>

        {/* Inspired */}
        <Link
          to="/category/inspired"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={inspiredImage} 
            alt="Inspired"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              INSPIRED
            </span>
          </div>
        </Link>

        {/* Moms Favs */}
        <Link
          to="/category/moms-favs"
          className="category-card group aspect-[3/4] relative"
        >
          <img 
            src={momfavsImage} 
            alt="Moms Favs"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 z-10 flex items-end justify-center pb-8">
            <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-background drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
              MOMS FAVS
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
