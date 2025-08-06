// src/auth/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA944D3Xp1CUaK5Pb02V2XbNdNsuGyhwFQ",
  authDomain: "ask-anna-fef06.firebaseapp.com",
  projectId: "ask-anna-fef06",
  storageBucket: "ask-anna-fef06.firebasestorage.app",
  messagingSenderId: "655848520137",
  appId: "1:655848520137:web:f5cf5937cba74231c19018",
  measurementId: "G-6GZN4DZC4M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, analytics };


