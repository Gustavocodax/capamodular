#!/bin/bash

# Script de verificação pré-deploy
# Executa checagens antes de fazer deploy

echo "🔍 Verificando aplicação antes do deploy..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de erros
ERRORS=0

# 1. Verificar Node.js
echo "📦 Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓${NC} Node.js instalado: $NODE_VERSION"
else
    echo -e "${RED}✗${NC} Node.js não encontrado"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. Verificar dependências
echo "📚 Verificando dependências..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules existe"
else
    echo -e "${YELLOW}⚠${NC} node_modules não encontrado. Execute: npm install"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. Testar build
echo "🏗️  Testando build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Build executado com sucesso"
else
    echo -e "${RED}✗${NC} Erro no build"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 4. Verificar arquivos essenciais
echo "📄 Verificando arquivos essenciais..."
FILES=("package.json" "vite.config.ts" "tsconfig.json" "index.html" "src/main.tsx" "src/App.tsx")
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file não encontrado"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 5. Verificar build output
echo "📦 Verificando output da build..."
if [ -d "build" ]; then
    if [ -f "build/index.html" ]; then
        echo -e "${GREEN}✓${NC} build/index.html existe"
    else
        echo -e "${RED}✗${NC} build/index.html não encontrado"
        ERRORS=$((ERRORS + 1))
    fi
    
    if [ -d "build/assets" ]; then
        echo -e "${GREEN}✓${NC} build/assets existe"
    else
        echo -e "${RED}✗${NC} build/assets não encontrado"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}✗${NC} Pasta build não encontrada"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 6. Verificar tamanho da build
echo "📊 Tamanho da build:"
if [ -d "build" ]; then
    BUILD_SIZE=$(du -sh build | cut -f1)
    echo "   Total: $BUILD_SIZE"
    
    if [ -d "build/assets" ]; then
        echo "   Assets:"
        ls -lh build/assets/ | tail -n +2 | awk '{print "   - " $9 ": " $5}'
    fi
fi
echo ""

# Resultado final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ Tudo pronto para deploy!${NC}"
    echo ""
    echo "Próximos passos:"
    echo "  • Vercel: vercel --prod"
    echo "  • Netlify: netlify deploy --prod"
    echo "  • GitHub Pages: npm run deploy"
    exit 0
else
    echo -e "${RED}✗ Encontrados $ERRORS erro(s)${NC}"
    echo "Corrija os erros antes de fazer deploy."
    exit 1
fi
