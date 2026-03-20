import { Link } from "react-router-dom";
export const CategoryButtons = () => {
  return <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Wrap Your Little One in Comfort.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Soft, pure cotton essentials made for your baby's delicate skin — adorable sets your little miracle will love.</p>
          <Link to="/category/best-seller" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop Best Sellers</Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">Adorable sets, on repeat.</h2>
          <p className="text-muted-foreground mb-6 max-w-md">Cozy, cute staples designed for everyday comfort — from playtime to naptime.</p>
          <Link to="/category/new-sets" className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity">Shop New Sets</Link>
        </div>
      </div>
    </section>;
};