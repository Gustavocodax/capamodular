# 🎯 Comandos Úteis - Capa Modular Interativa

## 📦 Instalação e Setup

```bash
# Instalar dependências
npm install

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 🏃 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Servidor estará em: http://localhost:3000
```

## 🏗️ Build e Preview

```bash
# Criar build de produção
npm run build

# Preview da build localmente
npm run preview

# Limpar build anterior
rm -rf build
```

## 🚀 Deploy

### Vercel

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (produção)
vercel --prod

# Ver logs
vercel logs
```

### Netlify

```bash
# Instalar CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy (preview)
netlify deploy

# Deploy (produção)
netlify deploy --prod

# Ver status
netlify status
```

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar ao package.json:
# "homepage": "https://seu-usuario.github.io/seu-repo"
# "scripts": { "deploy": "gh-pages -d build" }

# Deploy
npm run deploy
```

## 🔍 Verificação e Testes

```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar build
./scripts/deploy-check.sh

# Ver tamanho da build
du -sh build
ls -lh build/assets/
```

## 🧹 Limpeza

```bash
# Limpar node_modules
rm -rf node_modules

# Limpar build
rm -rf build

# Limpar cache do npm
npm cache clean --force

# Limpar tudo
rm -rf node_modules build package-lock.json
```

## 📊 Análise

```bash
# Analisar bundle size
npm run build -- --mode analyze

# Ver dependências desatualizadas
npm outdated

# Atualizar dependências
npm update
```

## 🔧 Manutenção

```bash
# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix

# Verificar versão do Node
node -v

# Verificar versão do npm
npm -v
```

## 🌐 Variáveis de Ambiente

```bash
# Criar arquivo de ambiente local
cp .env.example .env.local

# Editar variáveis
nano .env.local

# Variáveis devem começar com VITE_
# Exemplo: VITE_API_URL=https://api.exemplo.com
```

## 🐛 Debug

```bash
# Build com informações detalhadas
npm run build -- --debug

# Limpar cache do Vite
rm -rf node_modules/.vite

# Verificar portas em uso
lsof -i :3000

# Matar processo na porta 3000
kill -9 $(lsof -t -i:3000)
```

## 📱 Testes em Dispositivos

```bash
# Descobrir IP local
ifconfig | grep "inet " | grep -v 127.0.0.1

# Acessar de outro dispositivo na mesma rede
# http://SEU_IP:3000
```

## 🔄 Git

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "feat: aplicação pronta para deploy"

# Adicionar remote
git remote add origin https://github.com/seu-usuario/seu-repo.git

# Push
git push -u origin main
```

## 📦 Backup

```bash
# Criar backup do projeto
tar -czf capa-modular-backup-$(date +%Y%m%d).tar.gz \
  --exclude=node_modules \
  --exclude=build \
  --exclude=.git \
  .

# Restaurar backup
tar -xzf capa-modular-backup-YYYYMMDD.tar.gz
```

## 🎨 Customização

```bash
# Editar cores principais
nano src/styles/globals.css

# Editar opções padrão
nano src/App.tsx

# Editar configuração do Vite
nano vite.config.ts
```

## 📈 Performance

```bash
# Analisar performance com Lighthouse
# Abrir Chrome DevTools > Lighthouse > Generate Report

# Ou usar CLI
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## 🔐 Segurança

```bash
# Verificar dependências vulneráveis
npm audit

# Atualizar dependências com vulnerabilidades
npm audit fix

# Forçar atualização (cuidado!)
npm audit fix --force
```

## 📝 Logs

```bash
# Ver logs do Vercel
vercel logs [deployment-url]

# Ver logs do Netlify
netlify logs

# Logs locais do Vite
npm run dev -- --debug
```

## 🚨 Troubleshooting Comum

```bash
# Erro: "Cannot find module"
rm -rf node_modules package-lock.json
npm install

# Erro: "Port 3000 already in use"
kill -9 $(lsof -t -i:3000)

# Erro: "Build failed"
rm -rf node_modules/.vite
npm run build

# Erro: "TypeScript errors"
npx tsc --noEmit

# Erro: "Out of memory"
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 💡 Dicas

```bash
# Abrir projeto no VS Code
code .

# Abrir no navegador
open http://localhost:3000

# Ver estrutura do projeto
tree -I 'node_modules|build' -L 3

# Contar linhas de código
find src -name '*.tsx' -o -name '*.ts' | xargs wc -l
```
