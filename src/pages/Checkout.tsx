
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "São Paulo",
    zipCode: "",
    paymentMethod: "pix",
    notes: ""
  });

  const deliveryFee = totalPrice > 50 ? 0 : 5.00;
  const finalTotal = totalPrice + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and show success message
    clearCart();
    toast({
      title: "Pedido realizado com sucesso!",
      description: "Você receberá uma confirmação por WhatsApp em breve.",
      duration: 5000,
    });

    // Redirect to success page or home
    navigate("/");
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Seu carrinho está vazio
          </h2>
          <Link to="/produtos">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Ver Produtos
            </Button>
          </Link>
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
          <Link to="/carrinho">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Carrinho
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Finalizar Compra</h1>
            <p className="text-gray-600">Complete seus dados para finalizar o pedido</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Endereço de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Rua/Avenida *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Nome da rua/avenida"
                      />
                    </div>
                    <div>
                      <Label htmlFor="number">Número *</Label>
                      <Input
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="complement">Complemento</Label>
                      <Input
                        id="complement"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                        placeholder="Apt, Casa, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="neighborhood">Bairro *</Label>
                      <Input
                        id="neighborhood"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                        required
                        placeholder="Vila Esperança"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="00000-000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-orange-50 border-orange-200 bg-orange-50">
                      <input
                        type="radio"
                        id="pix"
                        name="paymentMethod"
                        value="pix"
                        checked={formData.paymentMethod === "pix"}
                        onChange={handleInputChange}
                        className="text-orange-500"
                      />
                      <Smartphone className="h-5 w-5 text-orange-600" />
                      <div>
                        <Label htmlFor="pix" className="font-semibold cursor-pointer">PIX</Label>
                        <p className="text-sm text-gray-600">Pagamento instantâneo</p>
                      </div>
                      <Badge className="ml-auto bg-green-100 text-green-800">Recomendado</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        id="cash"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                      />
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <Label htmlFor="cash" className="font-semibold cursor-pointer">Dinheiro</Label>
                        <p className="text-sm text-gray-600">Pagamento na entrega</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Observações</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Alguma observação sobre seu pedido? (opcional)"
                    rows={3}
                  />
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
                  {/* Products */}
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600">
                            {item.quantity}x R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                        <span className="font-medium">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxa de entrega</span>
                      <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                        {deliveryFee === 0 ? "GRÁTIS" : `R$ ${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-orange-600">R$ {finalTotal.toFixed(2)}</span>
                  </div>

                  {/* Delivery Time */}
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <div className="flex items-center text-green-800 mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Entrega em 30 min</span>
                    </div>
                    <p className="text-green-700">
                      Para a região da Vila Esperança
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                  >
                    {isProcessing ? "Processando..." : "Confirmar Pedido"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
