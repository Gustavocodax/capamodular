import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const authService = {
  // Login com email e senha
  login: async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);
      throw new Error(getErrorMessage(error.code));
    }
  },

  // Logout
  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  },

  // Observar mudanças no estado de autenticação
  onAuthChange: (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
  },

  // Obter usuário atual
  getCurrentUser: () => {
    return auth.currentUser;
  },
};

// Mensagens de erro em português
function getErrorMessage(errorCode: string): string {
  const errorMessages: Record<string, string> = {
    'auth/invalid-email': 'Email inválido',
    'auth/user-disabled': 'Usuário desabilitado',
    'auth/user-not-found': 'Usuário não encontrado',
    'auth/wrong-password': 'Senha incorreta',
    'auth/invalid-credential': 'Email ou senha incorretos',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde',
    'auth/network-request-failed': 'Erro de conexão. Verifique sua internet',
  };

  return errorMessages[errorCode] || 'Erro ao fazer login. Tente novamente';
}
