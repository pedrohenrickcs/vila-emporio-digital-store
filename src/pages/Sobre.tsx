
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Leaf, Clock, Award, MapPin } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Carinho e Atenção",
      description: "Tratamos cada cliente como parte da nossa família, com carinho e dedicação em cada atendimento."
    },
    {
      icon: Leaf,
      title: "Produtos Frescos",
      description: "Selecionamos diariamente os melhores produtos, priorizando frescor e qualidade."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Somos parte ativa da nossa vizinhança, apoiando e crescendo junto com nossa comunidade."
    },
    {
      icon: Award,
      title: "Tradição e Confiança",
      description: "Mais de 15 anos construindo relacionamentos baseados na confiança e qualidade."
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "O Início",
      description: "Seu João e Dona Maria abriram as portas do Empório da Vila com o sonho de servir a comunidade local."
    },
    {
      year: "2012",
      title: "Primeira Expansão",
      description: "Ampliamos nosso espaço e incluímos a seção de padaria própria, trazendo pães frescos todos os dias."
    },
    {
      year: "2016",
      title: "Delivery Local",
      description: "Começamos a fazer entregas no bairro, facilitando a vida dos nossos clientes."
    },
    {
      year: "2020",
      title: "Adaptação e Crescimento",
      description: "Durante a pandemia, fortalecemos nosso serviço de delivery e implementamos protocolos de segurança."
    },
    {
      year: "2024",
      title: "Era Digital",
      description: "Lançamos nossa loja online para atender melhor nossos clientes e alcançar novos vizinhos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Mais que um mercadinho, somos parte da família da Vila Esperança
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                O Sonho de Seu João e Dona Maria
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Em 2008, Seu João e Dona Maria realizaram o sonho de abrir um pequeno mercadinho 
                  no coração da Vila Esperança. Com pouco mais que determinação e muito amor pela 
                  comunidade, eles transformaram um pequeno espaço em um ponto de encontro do bairro.
                </p>
                <p>
                  O que começou como uma mercearia simples, cresceu organicamente através do 
                  boca-a-boca e da confiança conquistada dia após dia. Cada produto é selecionado 
                  com cuidado, cada cliente é tratado como família.
                </p>
                <p>
                  Hoje, depois de mais de 15 anos, o Empório da Vila continua fiel aos seus valores: 
                  qualidade, proximidade e carinho genuíno por cada pessoa que passa pela nossa porta.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Em Números</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600">Anos de História</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-gray-600">Produtos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-gray-600">Famílias Atendidas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">30min</div>
                    <div className="text-sm text-gray-600">Entrega Rápida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que nos guiam todos os dias na missão de servir nossa comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Trajetória</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Momentos importantes da nossa jornada ao longo dos anos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Badge className="bg-orange-500 text-white px-3 py-1 text-sm font-bold">
                      {event.year}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossa Missão</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Ser mais que um mercadinho: ser o ponto de encontro da comunidade, 
                oferecendo produtos de qualidade, atendimento caloroso e preços justos. 
                Queremos fazer parte do dia a dia das famílias, facilitando a vida e 
                criando momentos especiais através do simples ato de bem servir."
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Rua das Flores, 123 - Vila Esperança, São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
