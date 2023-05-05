import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, persistentLocalCache } from "firebase/firestore";

/* troubleshoting tips: 
    1) make sure firebase is installed:
        npm install firebase
    2) install firebase-tools:
        npm install firebase-tools
*/

// Do not modify this:
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase, 500MB cachesize
const app = initializeApp(firebaseConfig, {
  cacheSizeBytes: 200,
  localCache: persistentLocalCache(/*settings*/ {}),
});

// Authentification:
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Datase: Firestore
export const db = getFirestore(app);
