import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingBag, Menu, X, BookOpen } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";
import { useAuth } from "@/hooks/useAuth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const boxCategories = [
  { title: "Mystery Boxes", link: "/category/mystery-box" },
  { title: "YA Boxes", link: "/category/ya-box" },
  { title: "Kids Boxes", link: "/category/kids-box" },
  { title: "Romance Boxes", link: "/category/romance-box" },
  { title: "Thriller Boxes", link: "/category/thriller-box" },
  { title: "Non-Fiction Boxes", link: "/category/non-fiction-box" },
];

const mainNavItems = [
  { title: "BEST SELLERS", link: "/category/best-seller" },
  { title: "BOXES", link: "/category/boxes", hasSubmenu: true },
  { title: "GIFT CARDS", link: "/gift-cards" },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isBoxesOpen, setIsBoxesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBoxesMobileOpen, setIsBoxesMobileOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const handleAccountClick = () => {
    if (user) {
      navigate("/account");
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        isScrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-secondary/95 backdrop-blur-sm shadow-lg rounded-full px-4 lg:px-8 mx-auto max-w-[1800px]">
        <nav className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground hover:opacity-70 transition-opacity p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {mainNavItems.map((item) => (
                    <div key={item.link}>
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => setIsBoxesMobileOpen(!isBoxesMobileOpen)}
                            className="text-lg font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity w-full text-left"
                          >
                            {item.title}
                          </button>
                          {isBoxesMobileOpen && (
                            <div className="ml-4 mt-4 flex flex-col gap-3">
                              <Link
                                to={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-medium tracking-wide text-foreground hover:opacity-70 transition-opacity"
                              >
                                All Boxes
                              </Link>
                              {boxCategories.map((cat) => (
                                <Link
                                  key={cat.link}
                                  to={cat.link}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-base font-medium tracking-wide text-foreground hover:opacity-70 transition-opacity"
                                >
                                  {cat.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/category/best-seller"
              className="text-sm font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              BEST SELLERS
            </Link>
            
            {/* Boxes Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsBoxesOpen(true)}
              onMouseLeave={() => setIsBoxesOpen(false)}
            >
              <Link
                to="/category/boxes"
                className="text-sm font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
              >
                BOXES
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border shadow-lg transition-all duration-200 ${
                  isBoxesOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {boxCategories.map((cat) => (
                    <Link
                      key={cat.link}
                      to={cat.link}
                      className="block px-4 py-3 text-sm font-medium tracking-wide text-foreground hover:bg-secondary transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/gift-cards"
              className="text-sm font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
            >
              GIFT CARDS
            </Link>
          </div>

          {/* Center Logo - Text based */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <BookOpen className="w-6 h-6 lg:w-7 lg:h-7 text-foreground" />
            <span className="text-lg lg:text-xl font-bold tracking-widest text-foreground uppercase">
              Bookie Boxes
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button 
              onClick={handleAccountClick}
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              <User className={`w-5 h-5 ${user ? 'fill-foreground' : ''}`} />
            </button>
            <CartDrawer>
              <button className="relative text-foreground hover:opacity-70 transition-opacity hidden lg:block">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </CartDrawer>
          </div>
        </nav>
      </div>
    </header>
  );
};