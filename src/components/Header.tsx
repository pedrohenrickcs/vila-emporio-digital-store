
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="hidden md:flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Seg-Sáb: 7h-22h | Dom: 8h-20h</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Rua das Flores, 123 - Vila Esperança</span>
              <span className="sm:hidden">Vila Esperança</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-full">
              <span className="text-xl font-bold">EV</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Empório da Vila</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Seu mercadinho de bairro</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-orange-200 focus:border-orange-400"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/carrinho">
              <Button variant="outline" className="relative border-orange-200 text-orange-600 hover:bg-orange-50">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                    {itemCount}
                  </Badge>
                )}
                <span className="hidden sm:inline ml-2">Carrinho</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 border-orange-200 focus:border-orange-400"
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-orange-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-orange-600 font-medium py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
