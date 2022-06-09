// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9fsHAjM04pL3eX-09waT7ENej521mYIA',
  authDomain: 'nextjs-netflix-clone-d4cd1.firebaseapp.com',
  projectId: 'nextjs-netflix-clone-d4cd1',
  storageBucket: 'nextjs-netflix-clone-d4cd1.appspot.com',
  messagingSenderId: '151328955523',
  appId: '1:151328955523:web:77104e7b1a92a70cd94fb6',
  measurementId: 'G-NK33WTFS0W',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
