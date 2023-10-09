import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKey";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);