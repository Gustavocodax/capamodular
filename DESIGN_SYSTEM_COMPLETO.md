# 🎨 Design System Turbo Hub - Documentação Completa

> **Versão:** 1.0.0  
> **Última Atualização:** Janeiro 2025  
> **Tecnologias:** React 18+, TypeScript 5+, Tailwind CSS v4, shadcn/ui, Lucide React

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Filosofia de Design](#filosofia-de-design)
3. [Arquitetura e Tecnologias](#arquitetura-e-tecnologias)
4. [Design Tokens](#design-tokens)
5. [Sistema de Cores](#sistema-de-cores)
6. [Tipografia](#tipografia)
7. [Espaçamento e Layout](#espaçamento-e-layout)
8. [Componentes UI](#componentes-ui)
9. [Especificações Técnicas Detalhadas](#especificações-técnicas-detalhadas)
10. [Biblioteca de Ícones](#biblioteca-de-ícones)
11. [Estados e Interações](#estados-e-interações)
12. [Responsividade](#responsividade)
13. [Modo Escuro](#modo-escuro)
14. [Acessibilidade](#acessibilidade)
15. [Guidelines e Boas Práticas](#guidelines-e-boas-práticas)
16. [Implementação](#implementação)
17. [Componentes Padrão](#componentes-padrão)

---

## 🎯 Visão Geral

O **Design System Turbo Hub** é um sistema completo de design que unifica a experiência visual e funcional de todas as aplicações do ecossistema Turbo Digital. Construído com as tecnologias mais modernas do mercado, oferece:

### Características Principais

- ✅ **45+ Componentes UI** prontos para uso
- ✅ **12 Design Tokens** configuráveis
- ✅ **Paleta Minimalista** com foco em laranja (#FF4806) e azul (#0A142F)
- ✅ **Modo Claro e Escuro** totalmente suportado
- ✅ **100% TypeScript** com tipagem completa
- ✅ **Responsivo** com design mobile-first
- ✅ **Acessível** seguindo padrões WCAG 2.1
- ✅ **Performance Otimizada** com lazy loading e code splitting

### Métricas do Sistema

| Métrica | Valor | Descrição |
|---------|-------|-----------|
| **Componentes** | 45+ | Componentes UI prontos para uso |
| **Design Tokens** | 12 | Variáveis de design configuradas |
| **Breakpoints** | 5 | Pontos de responsividade (sm, md, lg, xl, 2xl) |
| **Temas** | 2 | Modo claro e escuro |
| **Ícones** | 100+ | Ícones do Lucide React organizados |
| **Cores Principais** | 2 | Laranja e Azul (+ neutros) |

---

## 💡 Filosofia de Design

### Princípios Fundamentais

#### 1. **Simplicidade Minimalista**
- Interface limpa e focada na funcionalidade
- Apenas duas cores principais: laranja (#FF4806) e azul (#0A142F)
- Vermelho (#dc2626) exclusivamente para erros
- Neutros (preto, branco, cinzas) para o resto

#### 2. **Strokes over Shadows**
- Preferência por bordas (strokes) ao invés de sombras
- Visual mais limpo e moderno
- Melhor performance de renderização
- Inputs com fundo branco no tema claro e apenas bordas

#### 3. **Consistência Visual**
- Elementos visuais uniformes em toda a plataforma
- Hierarquia tipográfica clara e respeitada
- Espaçamentos padronizados e previsíveis

#### 4. **Robustez e Ergonomia**
- Componentes mais substanciais (botões de 44px de altura)
- Áreas de toque adequadas para mobile (mínimo 44x44px)
- Inputs robustos de 48px de altura

#### 5. **Acessibilidade First**
- Contraste adequado em todos os elementos
- Navegação por teclado completa
- Suporte a leitores de tela
- Estados de foco sempre visíveis

---

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológica

```
Frontend Framework
├── React 18.3.1
├── TypeScript 5+
└── Vite 6.3.5

Styling
├── Tailwind CSS v4
├── CSS Variables (Design Tokens)
└── PostCSS

UI Components
├── shadcn/ui (Radix UI)
├── Lucide React (Ícones)
└── Recharts (Gráficos)

Utilities
├── class-variance-authority
├── clsx
└── tailwind-merge
```

### Estrutura de Pastas

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui base
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ... (45+ componentes)
│   ├── figma/                 # Componentes específicos do Figma
│   ├── StandardLayout.tsx     # Layout padrão unificado
│   ├── StandardHeader.tsx     # Header padrão
│   ├── StandardFooter.tsx     # Footer padrão
│   └── [Custom].tsx           # Componentes customizados
├── styles/
│   └── globals.css            # Tokens e estilos globais
├── guidelines/
│   └── Guidelines.md          # Guidelines de desenvolvimento
├── assets/                    # Imagens e assets
└── imports/                   # Imports do Figma
```

---

## 🎨 Design Tokens

### Variáveis CSS Principais

```css
:root {
  /* Tipografia */
  --font-size: 16px;
  --font-family: 'Montserrat', sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  
  /* Cores Principais */
  --primary: #FF4806;              /* Laranja Turbo */
  --primary-foreground: #ffffff;
  --secondary: #0A142F;            /* Azul Turbo */
  --secondary-foreground: #ffffff;
  
  /* Cores de Sistema */
  --background: #ffffff;
  --foreground: #000000;
  --card: #ffffff;
  --card-foreground: #000000;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --accent: #FFF4E6;
  --accent-foreground: #FF4806;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  
  /* Bordas e Inputs */
  --border: rgba(10, 20, 47, 0.15);
  --input: rgba(10, 20, 47, 0.1);
  --input-background: #ffffff;
  --ring: #FF4806;
  
  /* Border Radius */
  --radius: 0.375rem;              /* 6px - menos arredondado */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  
  /* Gráficos */
  --chart-1: #FF4806;
  --chart-2: #0A142F;
  --chart-3: #666666;
}
```

### Modo Escuro

```css
.dark {
  --background: #000000;
  --foreground: #ffffff;
  --card: #111111;
  --card-foreground: #ffffff;
  --muted: #1a1a1a;
  --muted-foreground: #999999;
  --accent: #2A1A0D;
  --accent-foreground: #FF8C42;
  --border: rgba(255, 255, 255, 0.1);
  --input: #1a1a1a;
  --input-background: #1a1a1a;
  --switch-background: #333333;
}
```


## 🌈 Sistema de Cores

### Paleta Simplificada

A filosofia do design system é usar **apenas duas cores principais** para manter a interface limpa, consistente e profissional.

#### Cores da Marca Turbo Digital

| Cor | Hex | RGB | Uso Principal |
|-----|-----|-----|---------------|
| **Laranja Primary** | `#FF4806` | `rgb(255, 72, 6)` | CTAs principais, destaques, progresso, links ativos, botões primários, indicadores de sucesso |
| **Azul Secondary** | `#0A142F` | `rgb(10, 20, 47)` | Elementos secundários, backgrounds alternativos, texto secundário, navegação |
| **Branco** | `#ffffff` | `rgb(255, 255, 255)` | Fundo principal (tema claro), texto em fundos escuros |
| **Preto** | `#000000` | `rgb(0, 0, 0)` | Texto principal (tema claro), fundo principal (tema escuro) |

#### Cores Funcionais (não são cores da marca)

| Cor | Hex | RGB | Uso Exclusivo |
|-----|-----|-----|---------------|
| **Vermelho Erro** | `#dc2626` | `rgb(220, 38, 38)` | Mensagens de erro, alertas críticos, botões de exclusão, validações de formulário, estados de falha |

#### Cores Neutras

| Cor | Hex | Uso |
|-----|-----|-----|
| **Cinza Claro (Muted)** | `#f5f5f5` | Backgrounds secundários, elementos desabilitados |
| **Cinza Médio** | `#666666` | Texto secundário, ícones inativos |
| **Cinza Escuro (Dark Muted)** | `#1a1a1a` | Backgrounds no modo escuro |
| **Cinza Texto (Dark)** | `#999999` | Texto secundário no modo escuro |

### Orientações de Uso das Cores

#### ✅ Laranja (#FF4806) - Use para:
- CTAs principais e botões de ação
- Destaques importantes
- Progresso e indicadores de sucesso
- Elementos de marca
- Links ativos
- Indicadores de seleção

#### ✅ Azul (#0A142F) - Use para:
- Elementos secundários
- Backgrounds alternativos
- Texto secundário
- Navegação
- Elementos de apoio da marca

#### ⚠️ Vermelho (#dc2626) - Use APENAS para:
- Mensagens de erro
- Alertas críticos
- Botões de exclusão/remoção
- Validações de formulário com erro
- Estados de falha

#### ❌ NÃO use:
- Outras cores coloridas (verde, amarelo, roxo, etc.)
- Gradientes complexos (exceto os da marca)
- Cores customizadas fora da paleta

### Cores para Gráficos

Apenas as cores da marca devem ser usadas em gráficos e visualizações:

```css
--chart-1: #FF4806;  /* Laranja - dados primários */
--chart-2: #0A142F;  /* Azul - dados secundários */
--chart-3: #666666;  /* Cinza - dados terciários */
```

### Contraste e Acessibilidade

| Combinação | Contraste | Status WCAG |
|------------|-----------|-------------|
| Laranja (#FF4806) em Branco | 4.52:1 | ✅ AA Normal |
| Preto (#000000) em Branco | 21:1 | ✅ AAA |
| Cinza (#666666) em Branco | 5.74:1 | ✅ AA Normal |
| Branco em Laranja (#FF4806) | 4.52:1 | ✅ AA Normal |
| Branco em Azul (#0A142F) | 16.78:1 | ✅ AAA |

---

## 📝 Tipografia

### Fonte Principal

**Montserrat** - Fonte sans-serif moderna e legível

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

--font-family: 'Montserrat', sans-serif;
```

### Pesos de Fonte Disponíveis

| Peso | Valor | Nome | Uso Recomendado |
|------|-------|------|-----------------|
| **Normal** | 400 | Regular | Texto de corpo, parágrafos, descrições |
| **Medium** | 500 | Medium | Títulos (h1-h4), labels, botões |
| **Semi Bold** | 600 | Semi Bold | Destaques especiais |
| **Bold** | 700 | Bold | Títulos muito importantes (raramente usado) |

### Hierarquia Tipográfica

#### Especificações Completas

| Elemento | Tamanho | Classe Tailwind | Peso | Classe Peso | Line Height | Uso |
|----------|---------|-----------------|------|-------------|-------------|-----|
| **h1** | 24px (1.5rem) | `text-2xl` | 500 | `font-medium` | 1.5 (36px) | Títulos principais de páginas |
| **h2** | 20px (1.25rem) | `text-xl` | 500 | `font-medium` | 1.5 (30px) | Títulos de seções principais |
| **h3** | 18px (1.125rem) | `text-lg` | 500 | `font-medium` | 1.5 (27px) | Subtítulos, títulos de cards |
| **h4** | 16px (1rem) | `text-base` | 500 | `font-medium` | 1.5 (24px) | Títulos menores, labels importantes |
| **p** | 16px (1rem) | `text-base` | 400 | `font-normal` | 1.5 (24px) | Texto de corpo, parágrafos |
| **small** | 14px (0.875rem) | `text-sm` | 400 | `font-normal` | 1.5 (21px) | Textos auxiliares, captions |
| **tiny** | 12px (0.75rem) | `text-xs` | 400 | `font-normal` | 1.5 (18px) | Labels, metadata, timestamps |

### Regras Importantes de Tipografia

#### ❌ NÃO use classes Tailwind de tipografia

O CSS global já define automaticamente a tipografia para todos os elementos HTML:

```css
/* Definido automaticamente no globals.css */
h1 { font-size: var(--text-2xl); font-weight: 500; line-height: 1.5; }
h2 { font-size: var(--text-xl); font-weight: 500; line-height: 1.5; }
h3 { font-size: var(--text-lg); font-weight: 500; line-height: 1.5; }
/* ... */
```

#### ✅ Use apenas quando necessário sobrescrever

```tsx
// ❌ Ruim - desnecessário
<h1 className="text-2xl font-medium">Título</h1>

// ✅ Bom - deixa o CSS global definir
<h1>Título</h1>

// ✅ Bom - sobrescreve quando necessário
<h1 className="text-3xl">Título Maior</h1>
```

### Cores de Texto

| Classe | Variável CSS | Uso |
|--------|--------------|-----|
| `text-foreground` | `var(--foreground)` | Texto principal (#000 light / #fff dark) |
| `text-muted-foreground` | `var(--muted-foreground)` | Texto secundário (#666 light / #999 dark) |
| `text-primary` | `var(--primary)` | Texto em cor primária (#FF4806) |
| `text-primary-foreground` | `var(--primary-foreground)` | Texto sobre fundo primário (#fff) |
| `text-destructive` | `var(--destructive)` | Texto de erro (#dc2626) |

---

## 📐 Espaçamento e Layout

### Sistema de Espaçamento

Base: **4px** (0.25rem)

| Nome | Valor | Pixels | Classes Tailwind | Uso Recomendado |
|------|-------|--------|------------------|-----------------|
| **0** | 0rem | 0px | `gap-0, p-0, m-0` | Reset de espaçamento |
| **0.5** | 0.125rem | 2px | `gap-0.5, p-0.5, m-0.5` | Espaçamento mínimo |
| **1** | 0.25rem | 4px | `gap-1, p-1, m-1` | Espaçamento entre ícone e texto |
| **2** | 0.5rem | 8px | `gap-2, p-2, m-2` | Espaçamento pequeno |
| **3** | 0.75rem | 12px | `gap-3, p-3, m-3` | Espaçamento médio-pequeno |
| **4** | 1rem | 16px | `gap-4, p-4, m-4` | Espaçamento padrão |
| **6** | 1.5rem | 24px | `gap-6, p-6, m-6` | Espaçamento grande |
| **8** | 2rem | 32px | `gap-8, p-8, m-8` | Espaçamento entre seções |
| **12** | 3rem | 48px | `gap-12, p-12, m-12` | Espaçamento muito grande |

### Border Radius (Arredondamento)

| Nome | Valor | Pixels | Classe Tailwind | CSS Variable | Uso |
|------|-------|--------|-----------------|--------------|-----|
| **xs** | 0.125rem | 2px | `rounded-xs` | `var(--radius-xs)` | Elementos muito pequenos |
| **sm** | 0.125rem | 2px | `rounded-sm` | `calc(var(--radius) - 4px)` | Badges compactos |
| **md** | 0.25rem | 4px | `rounded-md` | `calc(var(--radius) - 2px)` | Inputs, selects |
| **DEFAULT** | 0.375rem | 6px | `rounded` | `var(--radius)` | **Padrão** - Botões, cards |
| **lg** | 0.5rem | 8px | `rounded-lg` | `var(--radius-lg)` | Cards grandes, modais |
| **xl** | 0.625rem | 10px | `rounded-xl` | `calc(var(--radius) + 4px)` | Containers principais |
| **full** | 9999px | ∞ | `rounded-full` | - | Badges pill, avatares |

### Grid System

```tsx
// Mobile first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Conteúdo */}
</div>
```

### Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Conteúdo centralizado com padding responsivo */}
</div>
```

---

## 🧩 Componentes UI

### Lista Completa de Componentes

#### Componentes de Entrada

1. **Button** - Botões de ação
2. **Input** - Campo de texto
3. **Textarea** - Área de texto multilinha
4. **Select** - Dropdown de seleção
5. **Checkbox** - Caixa de seleção
6. **Radio Group** - Grupo de botões de rádio
7. **Switch** - Interruptor toggle
8. **Slider** - Controle deslizante
9. **Input OTP** - Input de código OTP

#### Componentes de Exibição

10. **Card** - Container principal para conteúdo
11. **Badge** - Marcadores e labels
12. **Avatar** - Imagens de perfil com fallback
13. **Alert** - Notificações e alertas
14. **Progress** - Barras de progresso
15. **Skeleton** - Loading placeholders
16. **Separator** - Divisores visuais
17. **Aspect Ratio** - Containers com proporção fixa

#### Componentes de Navegação

18. **Tabs** - Navegação por abas
19. **Breadcrumb** - Navegação hierárquica
20. **Pagination** - Navegação de páginas
21. **Navigation Menu** - Menu de navegação
22. **Sidebar** - Barra lateral
23. **Menubar** - Barra de menus

#### Componentes de Layout

24. **Dialog** - Modais e diálogos
25. **Sheet** - Painéis laterais
26. **Drawer** - Gavetas deslizantes
27. **Popover** - Conteúdo flutuante
28. **Tooltip** - Dicas contextuais
29. **Hover Card** - Cards de hover
30. **Accordion** - Conteúdo expansível
31. **Collapsible** - Seções recolhíveis
32. **Resizable** - Painéis redimensionáveis
33. **Scroll Area** - Área com scroll customizado

#### Componentes de Dados

34. **Table** - Tabelas de dados
35. **Command** - Interface de comandos
36. **Calendar** - Seletor de datas
37. **Chart** - Gráficos usando Recharts

#### Componentes de Menu

38. **Dropdown Menu** - Menus dropdown
39. **Context Menu** - Menus contextuais

#### Componentes de Formulário

40. **Form** - Wrapper de formulário com validação
41. **Label** - Labels de formulário
42. **Toggle** - Botão de alternância
43. **Toggle Group** - Grupo de toggles

#### Componentes de Feedback

44. **Sonner** - Toast notifications
45. **Alert Dialog** - Diálogos de confirmação


## 📏 Especificações Técnicas Detalhadas

### Botões (Button)

#### Dimensões por Tamanho

| Tamanho | Altura | Classe Altura | Padding X | Classe Padding X | Padding Y | Classe Padding Y | Border Radius | Uso Recomendado |
|---------|--------|---------------|-----------|------------------|-----------|------------------|---------------|-----------------|
| **Small** | 36px | `h-9` | 12px | `px-3` | auto | - | 6px (`rounded-md`) | Botões secundários, toolbars, ações compactas |
| **Default** | 44px | `h-11` | 16px | `px-4` | 8px | `py-2` | 6px (`rounded-md`) | Botões padrão em formulários e ações principais |
| **Large** | 48px | `h-12` | 24px | `px-6` | auto | - | 6px (`rounded-md`) | CTAs principais, hero sections |
| **Icon** | 44px × 44px | `size-11` | - | - | - | - | 6px (`rounded-md`) | Botões de ícone apenas, ações rápidas |

#### Especificações de Ícones em Botões

- **Tamanho padrão de ícone**: 16px (`h-4 w-4`)
- **Espaçamento entre ícone e texto**: 8px (`gap-2`)
- **Padding quando tem ícone (sm)**: 10px horizontal (`has-[>svg]:px-2.5`)
- **Padding quando tem ícone (default)**: 12px horizontal (`has-[>svg]:px-3`)
- **Padding quando tem ícone (lg)**: 16px horizontal (`has-[>svg]:px-4`)

#### Variantes de Botão

| Variante | Background | Texto | Border | Hover | Uso |
|----------|------------|-------|--------|-------|-----|
| **default** | `#FF4806` | `#ffffff` | - | `bg-primary/90` | Ações principais, CTAs |
| **secondary** | `#0A142F` | `#ffffff` | - | `bg-secondary/80` | Ações secundárias |
| **outline** | `transparent` | `foreground` | `1px` | `bg-accent` | Ações alternativas |
| **ghost** | `transparent` | `foreground` | - | `bg-accent` | Ações sutis |
| **destructive** | `#dc2626` | `#ffffff` | - | `bg-destructive/90` | Ações de exclusão |
| **link** | `transparent` | `#FF4806` | - | `underline` | Links textuais |

#### Estados de Interação

- **Focus Ring**: 3px de largura, cor primária com 50% de opacidade (`ring-[3px] ring-ring/50`)
- **Transição**: 200ms para todas as propriedades (`transition-all`)
- **Hover**: Opacidade de 90% da cor de fundo
- **Disabled**: 50% de opacidade, cursor não permitido (`disabled:opacity-50 disabled:pointer-events-none`)

#### Código de Exemplo

```tsx
import { Button } from './components/ui/button';
import { Download } from 'lucide-react';

// Botão padrão
<Button>Clique Aqui</Button>

// Botão com ícone
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

// Botão de ícone apenas
<Button size="icon" variant="outline">
  <Download className="h-4 w-4" />
</Button>

// Botão grande destrutivo
<Button size="lg" variant="destructive">
  Excluir Permanentemente
</Button>
```

---

### Inputs e Campos de Texto

#### Input (Campo de Texto)

| Propriedade | Valor | Classe Tailwind | Uso |
|-------------|-------|-----------------|-----|
| **Altura** | 48px | `h-12` | Altura robusta para melhor usabilidade |
| **Padding Horizontal** | 12px | `px-3` | Espaçamento interno lateral |
| **Padding Vertical** | 12px | `py-3` | Espaçamento interno vertical |
| **Border Radius** | 6px | `rounded-md` | Arredondamento padrão |
| **Border Width** | 1px | `border` | Borda sutil |
| **Font Size** | 16px (base) | `text-base` | Tamanho de fonte padrão |
| **Background (Light)** | `#ffffff` | `bg-input-background` | Fundo branco limpo |
| **Background (Dark)** | `#1a1a1a` | `bg-input-background` | Fundo escuro |
| **Border Color** | `rgba(10, 20, 47, 0.1)` | `border-input` | Borda sutil |

#### Textarea

| Propriedade | Valor | Classe Tailwind |
|-------------|-------|-----------------|
| **Altura Mínima** | 80px | `min-h-[80px]` |
| **Padding** | 12px | `p-3` |
| **Border Radius** | 6px | `rounded-md` |
| **Resize** | Vertical | `resize-y` |

#### Select

| Propriedade | Valor | Classe Tailwind |
|-------------|-------|-----------------|
| **Altura** | 48px | `h-12` |
| **Padding Horizontal** | 12px | `px-3` |
| **Padding Vertical** | 12px | `py-3` |
| **Border Radius** | 6px | `rounded-md` |

#### Checkbox e Switch

| Componente | Tamanho | Classe | Border Width |
|------------|---------|--------|--------------|
| **Checkbox** | 16px × 16px | `h-4 w-4` | 2px |
| **Switch** | 20px altura | `h-5` | 2px |

#### Estados de Focus em Inputs

- **Focus Ring**: 3px de largura (`ring-[3px]`)
- **Focus Border**: Cor primária (`focus-visible:border-ring`)
- **Focus Ring Color**: Primária com 50% opacidade (`focus-visible:ring-ring/50`)
- **Transição**: 200ms para border-color

#### Filosofia dos Inputs

**Design Minimalista:**
- Tema claro: Fundo branco + stroke (borda)
- Tema escuro: Fundo escuro + stroke
- Evitar fundos coloridos ou sombras excessivas

#### Código de Exemplo

```tsx
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Label } from './components/ui/label';

// Input básico
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" />
</div>

// Textarea
<div className="space-y-2">
  <Label htmlFor="message">Mensagem</Label>
  <Textarea id="message" placeholder="Digite sua mensagem..." />
</div>

// Select
<div className="space-y-2">
  <Label>Categoria</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione uma categoria" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="cat1">Categoria 1</SelectItem>
      <SelectItem value="cat2">Categoria 2</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

### Cards

#### Dimensões e Espaçamentos

| Componente | Padding | Classe Padding | Border Radius | Classe Border Radius | Border Width | Classe Border |
|------------|---------|----------------|---------------|----------------------|--------------|---------------|
| **Card Container** | 24px | `p-6` | 8px | `rounded-lg` | 1px | `border` |
| **Card Header** | 24px | `p-6` | - | - | - | - |
| **Card Content** | 24px horizontal, 16px vertical | `px-6 py-4` | - | - | - | - |
| **Card Footer** | 24px | `p-6` | - | - | - | - |

#### Estrutura de Card

```
Card (container)
├── CardHeader (padding: 24px)
│   ├── CardTitle
│   └── CardDescription
├── CardContent (padding: 24px horizontal, 16px vertical)
└── CardFooter (padding: 24px)
```

#### Código de Exemplo

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './components/ui/card';
import { Button } from './components/ui/button';

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card vai aqui.</p>
  </CardContent>
  <CardFooter>
    <Button>Ação Principal</Button>
  </CardFooter>
</Card>
```

---

### Badges

| Tamanho | Altura | Padding X | Classe Padding X | Padding Y | Classe Padding Y | Font Size | Classe Font | Border Radius |
|---------|--------|-----------|------------------|-----------|------------------|-----------|-------------|---------------|
| **Default** | 22px | 10px | `px-2.5` | 2px | `py-0.5` | 12px | `text-xs` | 4px (`rounded-md`) |

#### Variantes de Badge

| Variante | Background | Texto | Border | Uso |
|----------|------------|-------|--------|-----|
| **default** | `#FF4806` | `#ffffff` | - | Badges primários |
| **secondary** | `#0A142F` | `#ffffff` | - | Badges secundários |
| **outline** | `transparent` | `foreground` | `1px` | Badges com borda |
| **destructive** | `#dc2626` | `#ffffff` | - | Badges de erro |

#### Código de Exemplo

```tsx
import { Badge } from './components/ui/badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

---

### Avatares

| Tamanho | Dimensão | Classe |
|---------|----------|--------|
| **Small** | 32px | `h-8 w-8` |
| **Default** | 40px | `h-10 w-10` |
| **Large** | 48px | `h-12 w-12` |

#### Código de Exemplo

```tsx
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Nome do Usuário" />
  <AvatarFallback>NU</AvatarFallback>
</Avatar>
```

---

### Tabelas

#### Especificações

| Elemento | Padding | Font Size | Font Weight | Border |
|----------|---------|-----------|-------------|--------|
| **Table Header** | 12px | 14px (`text-sm`) | 500 (`font-medium`) | Bottom 1px |
| **Table Cell** | 12px | 14px (`text-sm`) | 400 (`font-normal`) | Bottom 1px |
| **Table Caption** | 12px | 14px (`text-sm`) | 400 (`font-normal`) | - |

#### Código de Exemplo

```tsx
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

<Table>
  <TableCaption>Lista de usuários</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>João Silva</TableCell>
      <TableCell>joao@email.com</TableCell>
      <TableCell>Ativo</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---


## 🎭 Biblioteca de Ícones

### Fonte dos Ícones

**Lucide React** - Biblioteca de ícones moderna e consistente

- **Total de ícones**: 100+ ícones organizados
- **Estilo**: Outline consistente
- **Tamanhos padrão**: 16px, 20px, 24px, 32px
- **Customizável**: Cor, tamanho e stroke width

### Tamanhos de Ícones

| Tamanho | Dimensão | Classe Tailwind | Uso Recomendado |
|---------|----------|-----------------|-----------------|
| **Small** | 16px | `h-4 w-4` | Dentro de botões, badges, textos inline |
| **Medium** | 20px | `h-5 w-5` | Navegação, actions, menus |
| **Large** | 24px | `h-6 w-6` | Headers, features, destaque |
| **XL** | 32px | `h-8 w-8` | Ilustrações, placeholders, hero sections |

### Categorias de Ícones

#### 1. Interface & Navegação
- Home, Menu, X, ChevronLeft, ChevronRight, ChevronUp, ChevronDown
- ArrowLeft, ArrowRight, ArrowUp, ArrowDown
- MoreHorizontal, MoreVertical, Plus, Minus, Check
- Search, Filter

#### 2. Usuário & Perfil
- User, Users, UserPlus, UserMinus, UserCheck, UserX
- Crown, Award, Shield, ShieldCheck
- Lock, Unlock, Key, Eye, EyeOff

#### 3. Comunicação
- Mail, Phone, MessageCircle, MessageSquare, Send
- Bell, BellOff, Share, Heart, Star
- Bookmark, BookmarkPlus, ThumbsUp, ThumbsDown

#### 4. Arquivo & Documento
- File, Files, FileText, FolderOpen, Folder, Archive
- Download, Upload, Save, Copy, Edit, Trash, Printer
- Image, Video, Music

#### 5. Configurações & Sistema
- Settings, Power, PowerOff, Wifi, WifiOff
- Battery, BatteryLow, Volume2, VolumeX
- Mic, MicOff, Camera, CameraOff
- Monitor, Smartphone, Tablet, Laptop, Headphones, Speaker

#### 6. E-commerce & Negócios
- ShoppingCart, ShoppingBag, CreditCard, Banknote, Coins
- TrendingUp, TrendingDown, BarChart, PieChart, LineChart
- Activity, Target

#### 7. Status & Ações
- CheckCircle, XCircle, AlertCircle, AlertTriangle, Info, HelpCircle
- Loader, Maximize, Minimize, ZoomIn, ZoomOut
- RefreshCw, Undo, Redo, Scissors, Clipboard
- Link, ExternalLink

### Uso de Ícones

```tsx
import { IconName } from 'lucide-react';

// Ícone básico
<IconName className="h-4 w-4" />

// Ícone com cor do tema
<IconName className="h-4 w-4 text-primary" />

// Ícone em botão
<Button>
  <IconName className="mr-2 h-4 w-4" />
  Texto do Botão
</Button>

// Ícone de ação
<Button size="icon" variant="ghost">
  <IconName className="h-4 w-4" />
</Button>
```

### Exemplos Práticos

```tsx
import { Download, Edit, Trash, Share, Heart, Star } from 'lucide-react';

// Botões de ação
<div className="flex gap-2">
  <Button>
    <Download className="mr-2 h-4 w-4" />
    Download
  </Button>
  <Button variant="outline" size="icon">
    <Edit className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
    <Trash className="h-4 w-4" />
  </Button>
</div>

// Ícones de status
<div className="flex items-center gap-2">
  <CheckCircle className="h-5 w-5 text-primary" />
  <span>Sucesso</span>
</div>

<div className="flex items-center gap-2">
  <AlertCircle className="h-5 w-5 text-destructive" />
  <span>Erro</span>
</div>
```

---

## ⚡ Estados e Interações

### Estados de Focus

| Propriedade | Valor | Classe Tailwind | Uso |
|-------------|-------|-----------------|-----|
| **Ring Width** | 3px | `ring-[3px]` | Largura do anel de foco |
| **Ring Offset** | 2px | `ring-offset-2` | Espaço entre elemento e ring |
| **Ring Color** | `#FF4806` | `ring-ring` | Cor primária |
| **Ring Opacity** | 50% | `ring-ring/50` | Opacidade do ring |
| **Border Focus** | `#FF4806` | `focus-visible:border-ring` | Borda ao focar |

### Estados de Hover

| Componente | Efeito | Classe Tailwind |
|------------|--------|-----------------|
| **Botões** | Background com 90% de opacidade | `hover:bg-primary/90` |
| **Cards** | Border primária com 20% de opacidade | `hover:border-primary/20` |
| **Links** | Cor primária | `hover:text-primary` |
| **Ícones** | Cor primária | `hover:text-primary` |

### Estados Active

| Componente | Efeito | Classe Tailwind |
|------------|--------|-----------------|
| **Botões** | Background com 95% de opacidade | `active:bg-primary/95` |
| **Inputs** | Ring visível + border primária | `focus-visible:ring-[3px]` |

### Estados Disabled

| Propriedade | Valor | Classe Tailwind |
|-------------|-------|-----------------|
| **Opacidade** | 50% | `disabled:opacity-50` |
| **Cursor** | not-allowed | `disabled:cursor-not-allowed` |
| **Pointer Events** | none | `disabled:pointer-events-none` |

### Transições e Animações

| Propriedade | Duração | Easing | Classe Tailwind | Uso |
|-------------|---------|--------|-----------------|-----|
| **Colors** | 200ms | ease | `transition-colors` | Mudanças de cor |
| **All** | 200ms | ease | `transition-all` | Múltiplas propriedades |
| **Transform** | 300ms | ease-in-out | `transition-transform` | Transformações |
| **Opacity** | 150ms | ease | `transition-opacity` | Mudanças de opacidade |

### Animações Especiais

```css
/* Spinner de loading */
.animate-spin {
  animation: spin 1s linear infinite;
}

/* Pulse para indicadores */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Exemplos de Uso

```tsx
// Botão com transição suave
<Button className="transition-all duration-200 hover:scale-105">
  Hover Me
</Button>

// Card com hover effect
<Card className="transition-colors hover:border-primary/20">
  <CardContent>Conteúdo</CardContent>
</Card>

// Input com focus ring
<Input className="focus-visible:ring-[3px] focus-visible:ring-ring/50" />

// Loading spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
```

---

## 📱 Responsividade

### Breakpoints

| Nome | Valor | Dispositivo | Uso |
|------|-------|-------------|-----|
| **sm** | 640px | Mobile landscape | Telefones em paisagem |
| **md** | 768px | Tablet | Tablets em retrato |
| **lg** | 1024px | Desktop | Desktops pequenos |
| **xl** | 1280px | Large desktop | Desktops grandes |
| **2xl** | 1536px | Extra large | Monitores grandes |

### Mobile First Approach

Sempre comece com o design mobile e adicione breakpoints para telas maiores:

```tsx
// ❌ Ruim - Desktop first
<div className="grid-cols-4 md:grid-cols-2 sm:grid-cols-1">

// ✅ Bom - Mobile first
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

### Exemplos de Layouts Responsivos

#### Grid Responsivo

```tsx
// 1 coluna no mobile, 2 no tablet, 3 no desktop, 4 em telas grandes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</div>
```

#### Padding Responsivo

```tsx
// Padding menor no mobile, maior no desktop
<div className="px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Conteúdo */}
  </div>
</div>
```

#### Tipografia Responsiva

```tsx
// Texto menor no mobile, maior no desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Título Responsivo
</h1>
```

#### Visibilidade Condicional

```tsx
// Esconder no mobile, mostrar no desktop
<div className="hidden lg:block">
  Conteúdo apenas desktop
</div>

// Mostrar no mobile, esconder no desktop
<div className="block lg:hidden">
  Conteúdo apenas mobile
</div>
```

#### Flexbox Responsivo

```tsx
// Coluna no mobile, linha no desktop
<div className="flex flex-col lg:flex-row gap-4">
  <div className="flex-1">Conteúdo 1</div>
  <div className="flex-1">Conteúdo 2</div>
</div>
```

### Componentes Responsivos

#### Header Responsivo

```tsx
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/logo.png" className="h-8 w-auto" />
        <span className="hidden md:inline">Turbo Hub</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </nav>
      
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  </div>
</header>
```

#### Card Grid Responsivo

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
  {cards.map(card => (
    <Card key={card.id} className="p-4 lg:p-6">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-base lg:text-lg">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm lg:text-base">{card.content}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### Testes de Responsividade

#### Checklist

- [ ] Testado em iPhone (375px)
- [ ] Testado em iPad (768px)
- [ ] Testado em Desktop (1024px)
- [ ] Testado em Desktop Grande (1440px)
- [ ] Navegação funciona em todos os tamanhos
- [ ] Imagens são responsivas
- [ ] Textos são legíveis em mobile
- [ ] Botões têm área de toque adequada (mínimo 44x44px)
- [ ] Formulários são usáveis em mobile
- [ ] Tabelas têm scroll horizontal em mobile

---

## 🌓 Modo Escuro

### Implementação

O modo escuro é implementado através da classe `.dark` no elemento HTML:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

### Hook Personalizado

```tsx
import { useDarkMode } from './components/ui/use-dark-mode';

function MyComponent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
}
```

### Cores no Modo Escuro

| Token | Modo Claro | Modo Escuro |
|-------|------------|-------------|
| `--background` | `#ffffff` | `#000000` |
| `--foreground` | `#000000` | `#ffffff` |
| `--card` | `#ffffff` | `#111111` |
| `--muted` | `#f5f5f5` | `#1a1a1a` |
| `--muted-foreground` | `#666666` | `#999999` |
| `--accent` | `#FFF4E6` | `#2A1A0D` |
| `--border` | `rgba(10, 20, 47, 0.15)` | `rgba(255, 255, 255, 0.1)` |
| `--input-background` | `#ffffff` | `#1a1a1a` |

### Uso Automático

Todos os componentes do design system suportam modo escuro automaticamente através das variáveis CSS:

```tsx
// ✅ Bom - Usa variáveis CSS
<div className="bg-background text-foreground">
  <Card className="bg-card">
    <p className="text-muted-foreground">Texto secundário</p>
  </Card>
</div>

// ❌ Ruim - Cores fixas
<div className="bg-white text-black">
  <div className="bg-gray-100">
    <p className="text-gray-600">Texto secundário</p>
  </div>
</div>
```

### Classes Específicas para Dark Mode

```tsx
// Aplicar estilos apenas no modo escuro
<div className="bg-white dark:bg-black">
  Conteúdo
</div>

// Bordas diferentes por tema
<div className="border-gray-200 dark:border-gray-800">
  Conteúdo
</div>
```

### Imagens e Logos

```tsx
import { useDarkMode } from './components/ui/use-dark-mode';
import logoLight from './assets/logo-light.png';
import logoDark from './assets/logo-dark.png';

function Logo() {
  const isDarkMode = useDarkMode();
  
  return (
    <img 
      src={isDarkMode ? logoDark : logoLight} 
      alt="Logo" 
      className="h-8 w-auto"
    />
  );
}
```

---


## ♿ Acessibilidade

### Princípios WCAG 2.1

O design system segue os padrões de acessibilidade WCAG 2.1 nível AA.

### Contraste de Cores

#### Requisitos Mínimos

| Tipo de Texto | Contraste Mínimo | Status |
|---------------|------------------|--------|
| **Texto Normal** | 4.5:1 | ✅ Atendido |
| **Texto Grande** (18px+ ou 14px+ bold) | 3:1 | ✅ Atendido |
| **Elementos UI** | 3:1 | ✅ Atendido |

#### Combinações Validadas

| Combinação | Contraste | Status WCAG |
|------------|-----------|-------------|
| Preto em Branco | 21:1 | ✅ AAA |
| Branco em Azul (#0A142F) | 16.78:1 | ✅ AAA |
| Cinza (#666) em Branco | 5.74:1 | ✅ AA |
| Branco em Laranja (#FF4806) | 4.52:1 | ✅ AA |

### Navegação por Teclado

#### Teclas Suportadas

| Tecla | Ação |
|-------|------|
| **Tab** | Navegar para próximo elemento focável |
| **Shift + Tab** | Navegar para elemento anterior |
| **Enter** | Ativar botão/link |
| **Space** | Ativar botão/checkbox |
| **Escape** | Fechar modal/dropdown |
| **Arrow Keys** | Navegar em listas/menus |
| **Home** | Ir para início da lista |
| **End** | Ir para fim da lista |

#### Ordem de Foco

```tsx
// ✅ Bom - Ordem lógica de foco
<form>
  <Input id="name" />      {/* Tab 1 */}
  <Input id="email" />     {/* Tab 2 */}
  <Button type="submit">   {/* Tab 3 */}
    Enviar
  </Button>
</form>

// ❌ Ruim - Ordem confusa
<div>
  <Button tabIndex={3}>Terceiro</Button>
  <Input tabIndex={1} />
  <Input tabIndex={2} />
</div>
```

### ARIA (Accessible Rich Internet Applications)

#### Labels Descritivos

```tsx
// ✅ Bom - Label descritivo
<Button aria-label="Fechar modal">
  <X className="h-4 w-4" />
</Button>

// ❌ Ruim - Sem label
<Button>
  <X className="h-4 w-4" />
</Button>
```

#### Estados ARIA

```tsx
// Botão de toggle
<Button 
  aria-pressed={isPressed}
  onClick={() => setIsPressed(!isPressed)}
>
  Toggle
</Button>

// Elemento expansível
<Button 
  aria-expanded={isOpen}
  aria-controls="content-id"
  onClick={() => setIsOpen(!isOpen)}
>
  Expandir
</Button>

// Conteúdo oculto
<div 
  id="content-id"
  aria-hidden={!isOpen}
>
  Conteúdo
</div>
```

#### Relacionamentos ARIA

```tsx
// Input com descrição
<div>
  <Label htmlFor="password">Senha</Label>
  <Input 
    id="password" 
    type="password"
    aria-describedby="password-help"
  />
  <p id="password-help" className="text-sm text-muted-foreground">
    Mínimo 8 caracteres
  </p>
</div>

// Input com erro
<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email"
    aria-invalid={hasError}
    aria-describedby="email-error"
  />
  {hasError && (
    <p id="email-error" className="text-sm text-destructive">
      Email inválido
    </p>
  )}
</div>
```

### Elementos Semânticos

```tsx
// ✅ Bom - Elementos semânticos
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">Sobre</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Título Principal</h1>
    <p>Conteúdo do artigo...</p>
  </article>
</main>

<footer>
  <p>© 2025 Turbo Hub</p>
</footer>

// ❌ Ruim - Divs genéricos
<div className="header">
  <div className="nav">
    <div className="link">Home</div>
    <div className="link">Sobre</div>
  </div>
</div>
```

### Textos Alternativos

```tsx
// Imagens informativas
<img 
  src="/product.jpg" 
  alt="Notebook Dell Inspiron 15 com tela de 15.6 polegadas"
/>

// Imagens decorativas
<img 
  src="/decoration.svg" 
  alt=""
  aria-hidden="true"
/>

// Ícones com significado
<Button>
  <Download className="h-4 w-4" aria-hidden="true" />
  <span>Download</span>
</Button>

// Ícones sem texto
<Button aria-label="Baixar arquivo">
  <Download className="h-4 w-4" />
</Button>
```

### Leitores de Tela

#### Live Regions

```tsx
// Anúncios importantes
<div 
  role="alert" 
  aria-live="assertive"
>
  Erro ao salvar dados!
</div>

// Atualizações não urgentes
<div 
  role="status" 
  aria-live="polite"
>
  Dados salvos com sucesso
</div>
```

#### Skip Links

```tsx
// Link para pular navegação
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
>
  Pular para conteúdo principal
</a>

<nav>
  {/* Navegação */}
</nav>

<main id="main-content">
  {/* Conteúdo principal */}
</main>
```

### Formulários Acessíveis

```tsx
<form>
  {/* Label sempre associado ao input */}
  <div className="space-y-2">
    <Label htmlFor="name">Nome Completo *</Label>
    <Input 
      id="name" 
      required
      aria-required="true"
    />
  </div>

  {/* Grupo de radio buttons */}
  <fieldset>
    <legend>Escolha uma opção</legend>
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Opção 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Opção 2</Label>
      </div>
    </RadioGroup>
  </fieldset>

  {/* Mensagens de erro */}
  <div className="space-y-2">
    <Label htmlFor="email">Email *</Label>
    <Input 
      id="email" 
      type="email"
      aria-invalid={emailError ? "true" : "false"}
      aria-describedby={emailError ? "email-error" : undefined}
    />
    {emailError && (
      <p id="email-error" className="text-sm text-destructive" role="alert">
        {emailError}
      </p>
    )}
  </div>

  <Button type="submit">Enviar Formulário</Button>
</form>
```

### Checklist de Acessibilidade

#### Antes de Fazer Deploy

- [ ] Todos os elementos interativos são acessíveis por teclado
- [ ] Ordem de foco é lógica e previsível
- [ ] Estados de foco são claramente visíveis
- [ ] Contraste de cores atende WCAG AA
- [ ] Imagens têm textos alternativos apropriados
- [ ] Formulários têm labels associados
- [ ] Mensagens de erro são anunciadas
- [ ] Modais podem ser fechados com Escape
- [ ] Conteúdo dinâmico usa live regions
- [ ] Elementos semânticos são usados corretamente
- [ ] Testado com leitor de tela (NVDA/JAWS/VoiceOver)
- [ ] Testado apenas com teclado
- [ ] Testado com zoom de 200%

---

## 📚 Guidelines e Boas Práticas

### Consistência Visual

#### ✅ Faça

- Use sempre os design tokens definidos
- Mantenha hierarquia tipográfica clara (h1 > h2 > h3 > h4)
- Aplique espaçamentos padronizados (4px, 8px, 16px, 24px, 32px)
- Use componentes do design system antes de criar novos
- Mantenha a paleta de cores simplificada (laranja, azul, neutros)

#### ❌ Não Faça

- Não use cores customizadas fora da paleta
- Evite quebrar a hierarquia tipográfica
- Não ignore os espaçamentos padrão
- Não crie componentes customizados sem necessidade
- Não use mais de 2 cores principais

### Performance

#### ✅ Faça

- Use lazy loading para componentes pesados
- Otimize imagens para diferentes densidades
- Implemente loading states para operações assíncronas
- Use memoização quando apropriado
- Implemente code splitting por rotas

#### ❌ Não Faça

- Não carregue recursos desnecessários
- Evite re-renders excessivos
- Não ignore estados de loading
- Não use imagens não otimizadas
- Não carregue toda a aplicação de uma vez

### Código Limpo

#### ✅ Faça

```tsx
// Componente bem estruturado
import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

interface UserCardProps {
  name: string;
  email: string;
  onEdit: () => void;
}

export function UserCard({ name, email, onEdit }: UserCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{email}</p>
        <Button onClick={onEdit} className="mt-4">
          Editar
        </Button>
      </CardContent>
    </Card>
  );
}
```

#### ❌ Não Faça

```tsx
// Componente mal estruturado
export function UserCard(props: any) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-md">
      <h3 className="text-xl font-bold">{props.name}</h3>
      <p className="text-gray-600">{props.email}</p>
      <button 
        onClick={props.onEdit}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
      >
        Editar
      </button>
    </div>
  );
}
```

### Estrutura de Componentes

#### ✅ Faça

- Sempre forneça props `className` para customização
- Use `forwardRef` quando necessário
- Implemente todos os estados (hover, focus, disabled)
- Documente props complexas com TypeScript
- Mantenha componentes pequenos e focados

#### ❌ Não Faça

- Não crie componentes monolíticos
- Evite props sem tipagem
- Não ignore estados de interação
- Não misture lógica de negócio com UI
- Não use `any` como tipo

### Nomenclatura

```tsx
// ✅ Bom
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  isLoading?: boolean;
  onClick?: () => void;
}

// ❌ Ruim
interface BtnProps {
  v?: string;
  s?: string;
  loading?: boolean;
  click?: Function;
}
```

### Organização de Imports

```tsx
// ✅ Bom - Organizado por categoria
// React e hooks
import React, { useState, useEffect } from 'react';

// Componentes UI
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

// Ícones
import { Download, Edit } from 'lucide-react';

// Utilitários
import { cn } from './components/ui/utils';

// Tipos
import type { User } from './types';

// ❌ Ruim - Desorganizado
import { Download } from 'lucide-react';
import type { User } from './types';
import React from 'react';
import { Button } from './components/ui/button';
import { cn } from './components/ui/utils';
```

---

## 🚀 Implementação

### Instalação

#### 1. Criar Projeto

```bash
# Criar projeto com Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
```

#### 2. Instalar Dependências

```bash
# Dependências principais
npm install react react-dom typescript

# Tailwind CSS v4
npm install tailwindcss postcss autoprefixer

# shadcn/ui dependencies
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog
npm install @radix-ui/react-aspect-ratio @radix-ui/react-avatar
npm install @radix-ui/react-checkbox @radix-ui/react-collapsible
npm install @radix-ui/react-context-menu @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu @radix-ui/react-hover-card
npm install @radix-ui/react-label @radix-ui/react-menubar
npm install @radix-ui/react-navigation-menu @radix-ui/react-popover
npm install @radix-ui/react-progress @radix-ui/react-radio-group
npm install @radix-ui/react-scroll-area @radix-ui/react-select
npm install @radix-ui/react-separator @radix-ui/react-slider
npm install @radix-ui/react-slot @radix-ui/react-switch
npm install @radix-ui/react-tabs @radix-ui/react-toggle
npm install @radix-ui/react-toggle-group @radix-ui/react-tooltip

# Utilitários
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install sonner
npm install recharts
npm install cmdk
npm install embla-carousel-react
npm install input-otp
npm install react-day-picker
npm install react-hook-form
npm install react-resizable-panels
npm install vaul
```

#### 3. Configurar Tailwind CSS

```bash
npx tailwindcss init -p
```

#### 4. Configurar Arquivos

**src/index.css:**

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --font-family: 'Montserrat', sans-serif;
  --background: #ffffff;
  --foreground: #000000;
  --primary: #FF4806;
  --primary-foreground: #ffffff;
  --secondary: #0A142F;
  --secondary-foreground: #ffffff;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --accent: #FFF4E6;
  --accent-foreground: #FF4806;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: rgba(10, 20, 47, 0.15);
  --input: rgba(10, 20, 47, 0.1);
  --input-background: #ffffff;
  --ring: #FF4806;
  --radius: 0.375rem;
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  --card: #111111;
  --muted: #1a1a1a;
  --muted-foreground: #999999;
  --accent: #2A1A0D;
  --border: rgba(255, 255, 255, 0.1);
  --input-background: #1a1a1a;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-family);
  }
}
```

### Uso dos Componentes

```tsx
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Entrar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

---


## 🏛️ Componentes Padrão

### StandardLayout

Layout completo com header e footer padronizados para todas as aplicações.

#### Props

```typescript
interface StandardLayoutProps {
  appName: string;                    // Nome da aplicação
  version?: string;                   // Versão (padrão: '1.0.0')
  user?: {                            // Dados do usuário
    email: string;
    name?: string;
  };
  onBack?: () => void;                // Callback para voltar
  onLogout?: () => void;              // Callback para logout
  showBackButton?: boolean;           // Mostrar botão voltar
  children: React.ReactNode;          // Conteúdo da aplicação
  className?: string;                 // Classes adicionais
  additionalMenuItems?: Array<{       // Itens de menu extras
    id: string;
    label: string;
    icon?: React.ComponentType;
    onClick: () => void;
  }>;
  showFooter?: boolean;               // Mostrar footer (padrão: true)
}
```

#### Uso

```tsx
import { StandardLayout } from './components/StandardLayout';
import { Download } from 'lucide-react';

function MyApp() {
  const user = {
    name: 'João Silva',
    email: 'joao@email.com'
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleLogout = () => {
    // Lógica de logout
  };

  const handleExport = () => {
    // Lógica de exportação
  };

  return (
    <StandardLayout
      appName="Minha Aplicação"
      version="1.0.0"
      user={user}
      onBack={handleBack}
      onLogout={handleLogout}
      showBackButton={true}
      additionalMenuItems={[
        {
          id: 'export',
          label: 'Exportar',
          icon: Download,
          onClick: handleExport
        }
      ]}
    >
      {/* Conteúdo da sua aplicação */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1>Bem-vindo à Minha Aplicação</h1>
      </div>
    </StandardLayout>
  );
}
```

---

### StandardHeader

Header unificado para todas as aplicações com navegação, menu de usuário e modo escuro.

#### Características

- Logo da Turbo Hub com breadcrumb
- Menu de usuário com avatar
- Toggle de modo escuro
- Menu mobile responsivo
- Notificações (opcional)
- Itens de menu customizáveis

#### Props

```typescript
interface StandardHeaderProps {
  appName: string;
  user?: {
    email: string;
    name?: string;
  };
  onBack?: () => void;
  onLogout?: () => void;
  showBackButton?: boolean;
  className?: string;
  additionalMenuItems?: Array<{
    id: string;
    label: string;
    icon?: React.ComponentType;
    onClick: () => void;
  }>;
}
```

#### Uso

```tsx
import { StandardHeader } from './components/StandardHeader';
import { Settings } from 'lucide-react';

<StandardHeader
  appName="Design System"
  user={{
    name: 'João Silva',
    email: 'joao@email.com'
  }}
  onBack={() => window.location.href = '/'}
  onLogout={() => console.log('Logout')}
  showBackButton={true}
  additionalMenuItems={[
    {
      id: 'settings',
      label: 'Configurações',
      icon: Settings,
      onClick: () => console.log('Settings')
    }
  ]}
/>
```

---

### StandardFooter

Footer unificado com informações da aplicação e links úteis.

#### Características

- Logo e descrição da Turbo Hub
- Links de produto
- Links de suporte
- Informações de copyright
- Versão da aplicação

#### Props

```typescript
interface StandardFooterProps {
  className?: string;
  appName?: string;
  version?: string;
}
```

#### Uso

```tsx
import { StandardFooter } from './components/StandardFooter';

<StandardFooter
  appName="Minha Aplicação"
  version="1.0.0"
/>
```

---

## 📊 Exemplos Práticos Completos

### Exemplo 1: Formulário de Contato

```tsx
import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Checkbox } from './components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error('Você precisa aceitar os termos');
      return;
    }

    // Lógica de envio
    toast.success('Mensagem enviada com sucesso!');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Entre em Contato</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="João Silva"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="joao@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Sua Empresa Ltda"
              />
            </div>

            <div className="space-y-2">
              <Label>Tipo de Projeto</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="app">Aplicativo</SelectItem>
                  <SelectItem value="design">Design System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Conte-nos sobre seu projeto..."
              className="min-h-[120px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, acceptTerms: checked as boolean })
              }
            />
            <Label htmlFor="terms" className="cursor-pointer">
              Aceito os termos de serviço e política de privacidade
            </Label>
          </div>

          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

---

### Exemplo 2: Dashboard com Cards

```tsx
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart } from 'lucide-react';

export function Dashboard() {
  const metrics = [
    {
      title: 'Receita Total',
      value: 'R$ 45.231',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Usuários Ativos',
      value: '2.350',
      change: '+15.3%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Vendas',
      value: '1.234',
      change: '-5.2%',
      trend: 'down',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="space-y-8">
      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon 
                    className={`h-4 w-4 ${
                      metric.trend === 'up' ? 'text-primary' : 'text-destructive'
                    }`} 
                  />
                  <span 
                    className={`text-sm ${
                      metric.trend === 'up' ? 'text-primary' : 'text-destructive'
                    }`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs mês anterior</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Projetos em Andamento */}
      <Card>
        <CardHeader>
          <CardTitle>Projetos em Andamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: 'Website Redesign', progress: 75, status: 'Em andamento' },
            { name: 'Mobile App', progress: 45, status: 'Em andamento' },
            { name: 'Design System', progress: 90, status: 'Quase pronto' }
          ].map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-muted-foreground">{project.status}</p>
                </div>
                <Badge>{project.progress}%</Badge>
              </div>
              <Progress value={project.progress} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
```

---

### Exemplo 3: Tabela de Dados

```tsx
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Edit, Trash, Search } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users: User[] = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', role: 'Viewer', status: 'inactive' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Usuários</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
```

---

## 🎓 Recursos e Referências

### Documentação Oficial

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI](https://www.radix-ui.com/)

### Ferramentas Úteis

- [Figma](https://www.figma.com/) - Design e prototipagem
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verificar contraste
- [WAVE](https://wave.webaim.org/) - Teste de acessibilidade
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoria de performance

### Comunidade

- [GitHub - Turbo Hub](https://github.com/turbo-hub)
- [Discord - Turbo Digital](https://discord.gg/turbodigital)

---

## 📝 Changelog

### Versão 1.0.0 (Janeiro 2025)

#### Adicionado
- ✅ Sistema completo de design tokens
- ✅ 45+ componentes UI baseados em shadcn/ui
- ✅ Paleta de cores simplificada (laranja + azul)
- ✅ Tipografia com Montserrat
- ✅ Modo escuro completo
- ✅ Componentes padrão (StandardLayout, StandardHeader, StandardFooter)
- ✅ Biblioteca de 100+ ícones do Lucide React
- ✅ Sistema de espaçamento padronizado
- ✅ Guidelines de acessibilidade WCAG 2.1 AA
- ✅ Documentação completa em português

#### Filosofia
- ✅ Strokes over Shadows
- ✅ Simplicidade minimalista
- ✅ Apenas 2 cores principais
- ✅ Componentes robustos (44px+ altura)
- ✅ Mobile-first e responsivo

---

## 🤝 Contribuindo

### Como Contribuir

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines de Contribuição

- Siga os padrões de código estabelecidos
- Mantenha a consistência visual
- Documente novas funcionalidades
- Adicione testes quando apropriado
- Atualize o changelog

---

## 📄 Licença

© 2025 Turbo Hub - Todos os direitos reservados.

Este design system é propriedade da Turbo Digital e está disponível apenas para uso interno e projetos autorizados.

---

## 👥 Equipe

**Desenvolvido por:**
- Equipe de Design da Turbo Digital
- Equipe de Desenvolvimento da Turbo Hub

**Contato:**
- Email: design@turbohub.com
- Website: https://turbohub.com

---

## 🎯 Próximos Passos

### Roadmap

#### Q1 2025
- [ ] Adicionar mais variantes de componentes
- [ ] Criar biblioteca de templates
- [ ] Implementar temas customizáveis
- [ ] Adicionar animações avançadas

#### Q2 2025
- [ ] Criar Figma plugin
- [ ] Desenvolver CLI para scaffolding
- [ ] Adicionar mais exemplos práticos
- [ ] Melhorar documentação interativa

#### Q3 2025
- [ ] Implementar design tokens 2.0
- [ ] Adicionar suporte a mais frameworks
- [ ] Criar curso de treinamento
- [ ] Expandir biblioteca de ícones

---

**Última Atualização:** Outubro 2025  
**Versão do Documento:** 1.0.0  
**Mantido por:** Equipe Turbo Hub

---

