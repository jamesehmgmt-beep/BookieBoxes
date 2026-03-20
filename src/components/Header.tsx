import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";
import { useAuth } from "@/hooks/useAuth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import bookieLogo from "@/assets/logotrans.webp";

const mainNavItems = [
  { title: "BEST SELLERS", link: "/category/best-seller" },
  { title: "NEW SETS", link: "/category/new-sets" },
  { title: "INSPIRED", link: "/category/inspired" },
  { title: "MOMS FAVS", link: "/category/moms-favs" },
  { title: "GIFT CARDS", link: "/gift-cards" },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Left Navigation - Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className={`${isScrolled ? 'text-foreground' : 'text-background'} hover:opacity-70 transition-opacity`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-background">
              <div className="flex flex-col gap-6 pt-12">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium tracking-wider text-foreground hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - Left */}
        <div className="hidden lg:flex items-center gap-8">
          {mainNavItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={`text-sm font-medium tracking-wider transition-opacity hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src={bookieLogo}
            alt="Bookie - Infant Clothing Store"
            className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            onClick={handleAccountClick}
            className={`hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
          >
            <User className={`w-5 h-5 ${user ? 'fill-foreground' : ''}`} />
          </button>
          
          <CartDrawer>
            <button className={`relative hover:opacity-70 transition-opacity ${
              isScrolled ? "text-foreground" : "text-background"
            }`}>
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDrawer>
        </div>
      </div>
    </header>
  );
};