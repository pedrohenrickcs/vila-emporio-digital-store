
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  rating?: number;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
      duration: 2000,
    });
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{product.discount}%
            </Badge>
          )}
          {product.inStock === false && (
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center rounded-t-lg">
              <span className="text-background font-semibold">Fora de Estoque</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < product.rating! 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-muted-foreground'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {product.discount ? (
              <>
                <span className="text-muted-foreground line-through text-sm">
                  R$ {product.price.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-primary">
                  R$ {discountedPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-primary">
                R$ {product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          disabled={product.inStock === false}
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock === false ? 'Indisponível' : 'Adicionar'}
        </Button>
      </CardContent>
    </Card>
  );
};
