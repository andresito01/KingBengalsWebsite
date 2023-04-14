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
  apiKey: "AIzaSyCuZ7r9jmYipbG4qxeyO-ve8pzvL5vAwVY",
  authDomain: "kingbengals-website.firebaseapp.com",
  projectId: "kingbengals-website",
  storageBucket: "kingbengals-website.appspot.com",
  messagingSenderId: "455631563599",
  appId: "1:455631563599:web:d0040ef2eb26b0327bb33a",
  measurementId: "G-E531K05PS1",
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
