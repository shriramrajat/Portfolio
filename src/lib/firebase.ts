import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Firebase configuration
// Uses environment variables if available, otherwise falls back to hardcoded values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAmwL6X9h3WofStaUausY4yH1BpsjQtc0M",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-bbe14.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-bbe14",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-bbe14.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "282996100500",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:282996100500:web:c413a272c9494ff13f9381",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-9G3W55LHWJ"
};

// Initialize Firebase
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

// Initialize Analytics only in browser environment
export const analytics: Analytics | null = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
