// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyEUvTHaxqbekYoPSjy3ruVeMheeE1gf0",
  authDomain: "my-app-f1101.firebaseapp.com",
  projectId: "my-app-f1101",
  storageBucket: "my-app-f1101.firebasestorage.app",
  messagingSenderId: "994530125821",
  appId: "1:994530125821:web:a3972f7afd2f97207f5b94",
  getURL:"https://console.firebase.google.com/project/my-app-f1101/database/my-app-f1101-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app