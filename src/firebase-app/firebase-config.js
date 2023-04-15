import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxV1P5tGZpMZ0UV4oAkFC82W31qq3879w",
  authDomain: "monkey-blogging-5e78c.firebaseapp.com",
  projectId: "monkey-blogging-5e78c",
  storageBucket: "monkey-blogging-5e78c.appspot.com",
  messagingSenderId: "122166394821",
  appId: "1:122166394821:web:1ab90c4d7288a14a0495ac",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
