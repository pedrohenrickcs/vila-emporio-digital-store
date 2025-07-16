
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Todos", "Hortifruti", "Bebidas", "Padaria", "Laticínios", "Carnes", "Limpeza", "Higiene"
  ];

  const products = [
    {
      id: 1,
      name: "Tomate Orgânico 1kg",
      price: 8.90,
      image: "/placeholder.svg",
      category: "Hortifruti",
      discount: 15,
      rating: 5,
      inStock: true
    },
    {
      id: 2,
      name: "Pão Francês (unidade)",
      price: 0.50,
      image: "/placeholder.svg",
      category: "Padaria",
      rating: 4,
      inStock: true
    },
    {
      id: 3,
      name: "Leite Integral 1L",
      price: 5.20,
      image: "/placeholder.svg",
      category: "Laticínios",
      rating: 5,
      inStock: true
    },
    {
      id: 4,
      name: "Refrigerante Coca-Cola 2L",
      price: 8.90,
      image: "/placeholder.svg",
      category: "Bebidas",
      discount: 22,
      rating: 4,
      inStock: true
    },
    {
      id: 5,
      name: "Banana Prata 1kg",
      price: 4.50,
      image: "/placeholder.svg",
      category: "Hortifruti",
      discount: 13,
      rating: 4,
      inStock: true
    },
    {
      id: 6,
      name: "Queijo Mussarela 200g",
      price: 12.90,
      image: "/placeholder.svg",
      category: "Laticínios",
      rating: 5,
      inStock: true
    },
    {
      id: 7,
      name: "Detergente Líquido 500ml",
      price: 3.20,
      image: "/placeholder.svg",
      category: "Limpeza",
      rating: 4,
      inStock: true
    },
    {
      id: 8,
      name: "Bife de Alcatra 1kg",
      price: 45.90,
      image: "/placeholder.svg",
      category: "Carnes",
      rating: 5,
      inStock: false
    },
    {
      id: 9,
      name: "Cerveja Skol Lata 350ml",
      price: 2.80,
      image: "/placeholder.svg",
      category: "Bebidas",
      rating: 3,
      inStock: true
    },
    {
      id: 10,
      name: "Alface Americana",
      price: 3.50,
      image: "/placeholder.svg",
      category: "Hortifruti",
      rating: 4,
      inStock: true
    },
    {
      id: 11,
      name: "Shampoo Pantene 400ml",
      price: 18.90,
      image: "/placeholder.svg",
      category: "Higiene",
      discount: 10,
      rating: 4,
      inStock: true
    },
    {
      id: 12,
      name: "Croissant de Chocolate",
      price: 4.50,
      image: "/placeholder.svg",
      category: "Padaria",
      rating: 5,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Nossos Produtos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre tudo o que você precisa para sua casa com a qualidade e carinho de sempre
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer px-3 py-2 ${
                    selectedCategory === category
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "hover:bg-secondary/80"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-card rounded-lg shadow-sm p-8 max-w-md mx-auto">
              <div className="text-muted-foreground mb-4">
                <Filter className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar sua busca ou escolher uma categoria diferente
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          </div>
        )}

        {/* Products Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Exibindo {filteredProducts.length} de {products.length} produtos
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Produtos;
