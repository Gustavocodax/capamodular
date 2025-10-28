# 🎨 Configurador de Capas Modulares - Turbo Digital

Sistema interativo de configuração de capas modulares com painel administrativo protegido por autenticação.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilização
- **shadcn/ui** - Componentes UI
- **Firebase** - Backend (Firestore + Authentication)
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📋 Funcionalidades

### Para Usuários
- ✅ Seleção interativa de opções modulares
- ✅ Visualização em tempo real do orçamento
- ✅ Interface responsiva e moderna
- ✅ Modo claro e escuro
- ✅ Animações suaves

### Para Administradores
- ✅ Painel administrativo protegido por login
- ✅ Adicionar novas opções
- ✅ Editar opções existentes
- ✅ Excluir opções com confirmação
- ✅ Gerenciamento em tempo real via Firebase

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Crie um arquivo .env na raiz do projeto com:
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
VITE_FIREBASE_APP_ID=seu_app_id

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🔐 Acesso Administrativo

### URL de Acesso
Para acessar o painel administrativo, adicione `#/admin` à URL:
- Desenvolvimento: `http://localhost:5173/#/admin`
- Produção: `https://seudominio.com/#/admin`

### Criar Usuário Administrador

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Vá em **Authentication** > **Users**
4. Clique em **Add user**
5. Adicione email e senha
6. Use essas credenciais para fazer login

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   ├── AdminPage.tsx          # Página de administração
│   ├── LoginPage.tsx          # Página de login
│   ├── OptionsSelector.tsx    # Seletor de opções
│   ├── PriceDisplay.tsx       # Display de preços
│   ├── AddOptionDialog.tsx    # Diálogo adicionar opção
│   ├── EditOptionDialog.tsx   # Diálogo editar opção
│   ├── DeleteOptionDialog.tsx # Diálogo confirmar exclusão
│   ├── GalaxyBackground.tsx   # Background animado
│   └── ThemeToggle.tsx        # Toggle tema claro/escuro
├── hooks/
│   ├── useOptions.ts          # Hook para gerenciar opções
│   └── useAuth.ts             # Hook para autenticação
├── services/
│   ├── optionsService.ts      # Serviço de opções (Firebase)
│   └── authService.ts         # Serviço de autenticação
├── lib/
│   └── firebase.ts            # Configuração Firebase
├── App.tsx                    # Componente principal
└── main.tsx                   # Entry point
```

## 🎨 Design System

O projeto segue um design system completo documentado em `DESIGN_SYSTEM_COMPLETO.md`:

- **Cores principais**: Laranja (#FF4806) e Azul (#0A142F)
- **Tipografia**: Montserrat
- **Componentes**: 45+ componentes UI padronizados
- **Responsividade**: Mobile-first
- **Acessibilidade**: WCAG 2.1

## 🔒 Segurança

- Autenticação via Firebase Authentication
- Área administrativa protegida por login
- Botão de administração oculto para usuários não autenticados
- Validação de formulários
- Tratamento de erros em português

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Todos os componentes são totalmente responsivos com design mobile-first.

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

O build gera os arquivos otimizados na pasta `dist/`.

### Recomendações de Deploy
- **Vercel** (recomendado)
- **Netlify**
- **Firebase Hosting**

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build de produção
npm run lint         # Executa ESLint
```

## 🐛 Troubleshooting

### Erro de autenticação
- Verifique se as variáveis de ambiente estão configuradas corretamente
- Confirme que o Firebase Authentication está habilitado no console

### Opções não aparecem
- Verifique a conexão com o Firebase
- Confirme que há opções cadastradas no Firestore
- Collection: `options`

### Tela branca
- Verifique o console do navegador para erros
- Confirme que todas as dependências estão instaladas
- Limpe o cache: `npm run build` e `npm run dev`

## 📄 Licença

Este projeto é propriedade da Turbo Digital.

## 👥 Suporte

Para suporte, entre em contato com a equipe Turbo Digital.

---

Desenvolvido com ❤️ pela Turbo Digital
