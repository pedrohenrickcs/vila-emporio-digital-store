
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-background text-foreground p-2 rounded-lg">
                <span className="text-lg font-bold">EV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Empório da Vila</h3>
                <p className="text-sm text-primary-foreground/80">Seu mercadinho de bairro</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Há mais de 15 anos oferecendo produtos frescos e qualidade 
              para nossa comunidade, com o carinho de sempre.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hortifruti
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bebidas
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Padaria
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Laticínios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary-foreground mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua das Flores, 123<br />Vila Esperança - SP
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="text-primary-foreground/80 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="text-primary-foreground/80 text-sm">contato@emporiodavila.com.br</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-primary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Seg-Sáb: 7h às 22h</p>
                  <p>Domingo: 8h às 20h</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Empório da Vila. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
