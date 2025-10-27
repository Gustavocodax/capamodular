/**
 * Script para popular o Firebase com dados iniciais
 * 
 * Como usar:
 * 1. Instale: npm install -D tsx dotenv
 * 2. Execute: npx tsx scripts/populate-firebase.ts
 */

import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { DEFAULT_OPTIONS } from '../src/data/defaultOptions';

// Carregar variáveis de ambiente do .env.local
config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

async function populateFirebase() {
  console.log('🔥 Inicializando Firebase...');
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  console.log('📝 Adicionando opções ao Firestore...\n');
  
  for (const option of DEFAULT_OPTIONS) {
    try {
      const docRef = await addDoc(collection(db, 'options'), {
        ...option,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      console.log(`✅ ${option.name} - ID: ${docRef.id}`);
    } catch (error) {
      console.error(`❌ Erro ao adicionar ${option.name}:`, error);
    }
  }
  
  console.log('\n✨ Concluído!');
  process.exit(0);
}

populateFirebase().catch((error) => {
  console.error('❌ Erro:', error);
  process.exit(1);
});
