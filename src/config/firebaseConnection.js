import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdWpCP7I71_MbU8kTj7kLFNiklMBwDXhU",
  authDomain: "teste-b4a1f.firebaseapp.com",
  projectId: "teste-b4a1f",
  storageBucket: "teste-b4a1f.firebasestorage.app",
  messagingSenderId: "1006965565493",
  appId: "1:1006965565493:web:49a7df622df8b1a3af297c",
  measurementId: "G-17MFHBVPTT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
