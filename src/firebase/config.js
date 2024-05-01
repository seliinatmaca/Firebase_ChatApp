// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAJG__PBK3KT8MoSTTqrFf4bMdDxCImho",
  authDomain: "appchat-e91c2.firebaseapp.com",
  projectId: "appchat-e91c2",
  storageBucket: "appchat-e91c2.appspot.com",
  messagingSenderId: "655362156428",
  appId: "1:655362156428:web:6df7c3dfe46f58d37818a9",
  measurementId: "G-ELCR4VCFM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebasedeki auth yapısının referansını react uygulamsına alma
export const auth = getAuth(app);

//google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//firebasdeki firestore veritabanının referansını al
export const db = getFirestore(app);
