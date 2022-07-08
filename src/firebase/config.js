// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//! import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBQEyGMvsPffXEjc2j3HXKEHRLPzBu4lX0",
  authDomain: "espacio-obligado.firebaseapp.com",
  projectId: "espacio-obligado",
  storageBucket: "espacio-obligado.appspot.com",
  messagingSenderId: "219195506851",
  appId: "1:219195506851:web:4c3b849fdfa117f187bf16",
  measurementId: "G-QNVK6C1G5Y"
};

const app = initializeApp(firebaseConfig);

//! const analytics = getAnalytics(app);

export const db = getFirestore(app)

