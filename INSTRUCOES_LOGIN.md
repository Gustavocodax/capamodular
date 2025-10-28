# Instruções para Configurar Login de Administrador

## Como criar um usuário administrador no Firebase

### Opção 1: Pelo Console do Firebase (Recomendado)

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto
3. No menu lateral, clique em **Authentication**
4. Clique na aba **Users**
5. Clique no botão **Add user**
6. Preencha:
   - **Email**: seu@email.com
   - **Password**: sua senha segura (mínimo 6 caracteres)
7. Clique em **Add user**

### Opção 2: Programaticamente (se preferir)

Você pode criar um script temporário para criar o usuário:

```typescript
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase';

async function createAdmin() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'admin@exemplo.com',
      'senhaSegura123'
    );
    console.log('Usuário criado:', userCredential.user.email);
  } catch (error) {
    console.error('Erro:', error);
  }
}

createAdmin();
```

## Como usar o sistema

### Para usuários normais:
- Acesse a aplicação normalmente
- O botão "Gerenciar Opções" **não aparecerá** se você não estiver logado
- Você pode usar o configurador livremente

### Para administradores:
1. Acesse a aplicação
2. Clique no botão **"Gerenciar Opções"** (só aparece se você estiver logado)
3. Se não estiver logado, será redirecionado para a tela de login
4. Faça login com o email e senha cadastrados no Firebase
5. Após o login, você terá acesso à página de administração
6. Para sair, clique no botão **"Sair"** no canto superior direito

## Segurança

- As senhas são gerenciadas pelo Firebase Authentication
- Apenas usuários autenticados podem acessar a página de administração
- O botão "Gerenciar Opções" só aparece para usuários logados
- Ao fazer logout, você volta automaticamente para a página principal

## Credenciais de Teste

Você mencionou que já criou um usuário no banco. Use essas credenciais para fazer login na aplicação.
