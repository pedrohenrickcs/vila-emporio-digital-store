# Empório da Vila 🛒

Este é o protótipo de uma loja online para um mercadinho de bairro chamado **Empório da Vila**, criado utilizando **React** com **Vite**, **Tailwind CSS** e **ShadCN**.

## 🎯 Objetivo
O projeto foi desenvolvido para transmitir uma sensação de tranquilidade e proximidade com o cliente, com um visual limpo, acolhedor e um toque industrial moderno. Ele serve como base para evoluir para uma loja funcional com carrinho, checkout e listagem de produtos.

## 🧠 Como o Prompt foi Criado
O prompt original foi elaborado para gerar um projeto React com:
- **Paleta de cores**: tons suaves de laranja, amarelo, marrom claro, verde, azul e branco
- **Estilo visual**: aconchegante, leve, com inspiração industrial
- **Componentização**: Navbar, ProductCard, Toaster
- **Páginas iniciais**: Home com produtos em destaque
- **Mock de dados**: `data/products.ts` para simular produtos reais
- **Organização de pastas**: `app/`, `components/`, `data/`, `lib/`, `styles/`

### Prompt utilizado
```txt
Crie um projeto web com React e Vite para uma loja online de um mercadinho de bairro chamado "Empório da Vila". A loja deve transmitir uma sensação de tranquilidade e proximidade com o cliente, com um visual limpo, acolhedor e um toque industrial moderno.

Use Tailwind CSS para o design e ShadCN para os componentes. O layout deve ser responsivo e otimizado para mobile.

🔹 Paleta de cores: tons suaves de laranja, amarelo, marrom claro, verde, azul e branco
🔹 Estilo visual: aconchegante, com leve inspiração industrial (tipografia com presença, ícones delicados, cantos arredondados, sombra suave)
🔹 Tipografia clara, com boa hierarquia visual e leitura fluida

Funcionalidades principais:
1. Página inicial com banner e produtos em destaque
2. Página de produtos filtrável por categoria
3. Carrinho de compras
4. Página de checkout simples
5. Página “Sobre”
6. Página de contato com formulário

Extras:
- Estrutura modular de componentes
- Boas práticas para SEO e performance
- Nome do projeto: emporio-da-vila
```

## 🚀 Tecnologias Utilizadas
- **React** com **Vite**
- **Tailwind CSS** para o estilo
- **ShadCN/UI** para componentes
- **TypeScript** para tipagem

## 📂 Estrutura de Pastas
```
app/
  layout.tsx
  page.tsx
components/
  ui/
    Navbar.tsx
    ProductCard.tsx
data/
  products.ts
lib/
  utils.ts
types/
  index.ts
styles/
  globals.css
```

## 📌 Como Rodar
```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:5173
```

## 📜 Licença
Este projeto é livre para uso e modificação.
