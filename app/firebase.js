import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjO1B_sU7vdK8mi6x0AA1mYrmonC0XMck",
  authDomain: "janpath-65ce1.firebaseapp.com",
  projectId: "janpath-65ce1",
  storageBucket: "janpath-65ce1.firebasestorage.app",
  messagingSenderId: "713099119206",
  appId: "1:713099119206:web:970be34701a715089bfba7",
  measurementId: "G-8SHH46Y6C1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };