# Capa Modular Interativa

Configurador interativo de capas modulares personalizadas com cálculo de preço em tempo real.

## 🚀 Funcionalidades

- ✅ Seleção interativa de opções de personalização
- 💰 Cálculo automático de preço
- 🎨 Tema claro/escuro
- 🔧 Painel administrativo para gerenciar opções
- 💾 Persistência de dados no localStorage
- 🌌 Background animado

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide Icons

## 📦 Instalação

```bash
npm install
```

## 🏃 Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 👀 Preview da Build

```bash
npm run preview
```

## 🚀 Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/seu-repo)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Outras Plataformas

A aplicação é compatível com qualquer plataforma que suporte sites estáticos:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI (shadcn)
│   │   ├── AdminPage.tsx
│   │   ├── GalaxyBackground.tsx
│   │   ├── OptionsSelector.tsx
│   │   ├── PriceDisplay.tsx
│   │   └── ThemeToggle.tsx
│   ├── styles/           # Estilos globais
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # CSS global
├── public/               # Arquivos estáticos
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `src/styles/globals.css`:

```css
--color-primary: #FF4806;
--color-secondary: #0A142F;
```

### Opções Padrão

Edite o array `DEFAULT_OPTIONS` em `src/App.tsx`.

## 📝 Licença

Este projeto foi gerado a partir de um design Figma.

## 🔗 Links

- [Projeto Original no Figma](https://www.figma.com/design/Pa5VcVB5dtaQWE5jprP23d/Capa-Modular-Interativa)
