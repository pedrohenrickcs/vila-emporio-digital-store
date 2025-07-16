
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Facebook,
  Instagram
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornaremos em breve!",
      duration: 4000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123\nVila Esperança, São Paulo - SP",
      color: "text-orange-600"
    },
    {
      icon: Phone,
      title: "Telefone/WhatsApp",
      info: "(11) 99999-9999",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@emporiodavila.com.br",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sábado: 7h às 22h\nDomingo: 8h às 20h",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Fale Conosco
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Envie sua Mensagem
                </CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato em breve
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Digite sua mensagem aqui..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Prefere falar direto?
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-green-200 text-green-700 hover:bg-green-50"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp: (11) 99999-9999
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar: (11) 99999-9999
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${contact.color} bg-gray-50 p-3 rounded-full`}>
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">
                      Rua das Flores, 123
                    </p>
                    <p className="text-gray-600 text-sm">
                      Vila Esperança, São Paulo - SP
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Estamos localizados no coração da Vila Esperança, 
                  próximo à praça central e fácil acesso por transporte público.
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Siga-nos nas Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Acompanhe nossas novidades, promoções e produtos frescos!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contato;
