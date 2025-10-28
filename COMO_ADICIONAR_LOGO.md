# Como Adicionar sua Logo

## Opção 1: Substituir o favicon.svg (Recomendado)

1. Coloque sua logo em formato SVG na pasta `public/`
2. Renomeie para `favicon.svg` (ou mantenha o nome e atualize o componente)
3. A logo aparecerá automaticamente em todas as páginas

## Opção 2: Adicionar logo em outro formato (PNG, JPG)

1. Coloque sua logo na pasta `public/` (ex: `logo.png`)
2. Abra o arquivo `src/components/Logo.tsx`
3. Altere a linha:
   ```tsx
   src="/favicon.svg"
   ```
   Para:
   ```tsx
   src="/logo.png"
   ```

## Opção 3: Usar logo diferente para cada tema

Se você quiser logos diferentes para modo claro e escuro:

```tsx
// src/components/Logo.tsx
import { useTheme } from './ThemeProvider'; // Se você tiver um provider

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { theme } = useTheme();
  
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';

  return (
    <img
      src={logoSrc}
      alt="Turbo Digital"
      className={`${sizes[size]} w-auto ${className}`}
    />
  );
}
```

## Tamanhos da Logo

A logo aparece em 3 tamanhos diferentes:

- **sm** (h-8 / 32px): Para espaços compactos
- **md** (h-12 / 48px): Tamanho padrão (usado na página principal e admin)
- **lg** (h-16 / 64px): Tamanho grande (usado na página de login)

## Onde a Logo Aparece

✅ **Página Principal** (Configurador)
- Canto superior esquerdo
- Tamanho: md (48px)

✅ **Página de Login**
- Centro do card, acima do título
- Tamanho: lg (64px)

✅ **Página de Administração**
- Canto superior esquerdo
- Tamanho: md (48px)

## Recomendações

- **Formato**: SVG (melhor qualidade e performance)
- **Dimensões**: Proporção horizontal (ex: 200x50px)
- **Fundo**: Transparente
- **Cores**: Que funcionem bem em modo claro e escuro

## Exemplo de Logo SVG

Coloque sua logo SVG em `public/logo.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <!-- Seu conteúdo SVG aqui -->
</svg>
```

Depois atualize o componente Logo para usar `/logo.svg` ao invés de `/favicon.svg`.
