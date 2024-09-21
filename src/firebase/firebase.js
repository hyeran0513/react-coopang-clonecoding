// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_APP_KEY!,
    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEING_SENDER_ID!,
    // appId: process.env.NEXT_PUBLIC_APP_ID!

    apiKey: "AIzaSyCv_Lr7_vXjfX5Z1B7-dqYkFGK2U8wPclI",
    authDomain: "react-coupang-clonecoding.firebaseapp.com",
    projectId: "react-coupang-clonecoding",
    storageBucket: "react-coupang-clonecoding.appspot.com",
    messagingSenderId: "96868951801",
    appId: "1:96868951801:web:9b497daa4ea2c49cf62428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;