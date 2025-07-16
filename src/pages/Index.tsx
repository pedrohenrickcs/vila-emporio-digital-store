
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Truck, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const categories = [
    { name: "Hortifruti", icon: "🥕", color: "bg-green-100 text-green-800" },
    { name: "Bebidas", icon: "🥤", color: "bg-blue-100 text-blue-800" },
    { name: "Padaria", icon: "🍞", color: "bg-yellow-100 text-yellow-800" },
    { name: "Laticínios", icon: "🥛", color: "bg-orange-100 text-orange-800" },
    { name: "Carnes", icon: "🥩", color: "bg-red-100 text-red-800" },
    { name: "Limpeza", icon: "🧽", color: "bg-purple-100 text-purple-800" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Tomate Orgânico",
      price: 8.90,
      image: "/placeholder.svg",
      category: "Hortifruti",
      discount: 15
    },
    {
      id: 2,
      name: "Pão Francês",
      price: 0.50,
      image: "/placeholder.svg",
      category: "Padaria"
    },
    {
      id: 3,
      name: "Leite Integral 1L",
      price: 5.20,
      image: "/placeholder.svg",
      category: "Laticínios"
    }
  ];

  const offers = [
    { product: "Banana Prata", originalPrice: 4.50, salePrice: 3.90, discount: 13 },
    { product: "Refrigerante 2L", originalPrice: 8.90, salePrice: 6.90, discount: 22 },
    { product: "Açúcar Cristal 1kg", originalPrice: 4.20, salePrice: 3.50, discount: 17 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Empório da Vila
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Seu mercadinho de bairro, com carinho e qualidade
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Produtos frescos, preços justos e atendimento acolhedor. 
            Aqui você encontra tudo o que precisa para sua casa.
          </p>
          <Link to="/produtos">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Delivery no seu bairro em até 30 minutos</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Produtos frescos selecionados diariamente</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pertinho de Você</h3>
              <p className="text-gray-600">No coração do seu bairro há mais de 15 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ofertas do Dia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-200">
                <CardHeader className="text-center">
                  <Badge className="bg-red-500 text-white w-fit mx-auto mb-2">
                    -{offer.discount}%
                  </Badge>
                  <CardTitle className="text-lg">{offer.product}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center items-center gap-3 mb-4">
                    <span className="text-gray-500 line-through text-sm">
                      R$ {offer.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-2xl font-bold text-orange-600">
                      R$ {offer.salePrice.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossas Categorias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/produtos" className="group">
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-gray-100 group-hover:border-orange-200">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <Badge className={`${category.color} text-sm font-medium`}>
                      {category.name}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Produtos em Destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/produtos">
              <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Empório da Vila
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Há mais de 15 anos servindo nossa comunidade com produtos frescos, 
                preços justos e um atendimento que faz você se sentir em casa. 
                Somos mais que um mercadinho - somos parte da sua família.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Segunda a Sábado: 7h às 22h | Domingo: 8h às 20h</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Rua das Flores, 123 - Vila Esperança</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/sobre">
                  <Button variant="outline" className="mr-4 border-green-300 text-green-700 hover:bg-green-50">
                    Nossa História
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Área de Entrega</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Mapa da região</p>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Entregamos em toda Vila Esperança e bairros vizinhos
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
