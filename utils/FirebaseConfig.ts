// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlSgmoRYARHv0IGKX7u1f2oJrkyvCGC9o",
  authDomain: "pokedex-266fa.firebaseapp.com",
  projectId: "pokedex-266fa",
  storageBucket: "pokedex-266fa.appspot.com",
  messagingSenderId: "980737527826",
  appId: "1:980737527826:web:08803b765d46e144e9c8cb",
  measurementId: "G-D2T6KP8CB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");