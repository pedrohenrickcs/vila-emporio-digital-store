
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";

const Carrinho = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  const deliveryFee = totalPrice > 50 ? 0 : 5.00;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-12 max-w-md mx-auto">
              <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-gray-600 mb-6">
                Que tal adicionar alguns produtos frescos do nosso mercadinho?
              </p>
              <Link to="/produtos">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Ver Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center mb-8">
          <Link to="/produtos">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuar Comprando
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Meu Carrinho</h1>
            <p className="text-gray-600">{items.length} {items.length === 1 ? 'item' : 'itens'} no carrinho</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Produtos</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpar Carrinho
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.category}
                      </Badge>
                      <p className="text-orange-600 font-bold mt-1">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-16 text-center"
                        min="1"
                      />
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-800">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Taxa de entrega</span>
                    <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                      {deliveryFee === 0 ? "GRÁTIS" : `R$ ${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {totalPrice < 50 && (
                    <p className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                      Faltam R$ {(50 - totalPrice).toFixed(2)} para frete grátis!
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-orange-600">R$ {finalTotal.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="block">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Finalizar Compra
                  </Button>
                </Link>

                <div className="text-center">
                  <Link to="/produtos">
                    <Button variant="outline" className="w-full">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>

                {/* Delivery Info */}
                <div className="bg-green-50 p-4 rounded-lg text-sm">
                  <h4 className="font-semibold text-green-800 mb-2">Entrega Rápida</h4>
                  <p className="text-green-700">
                    Receba seus produtos em até 30 minutos na Vila Esperança e bairros vizinhos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Carrinho;
