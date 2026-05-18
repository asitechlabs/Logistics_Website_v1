import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl0yObKLznPI04hm1252iCWgI_aaIfGeM",
  authDomain: "asi-logistics.firebaseapp.com",
  projectId: "asi-logistics",
  storageBucket: "asi-logistics.firebasestorage.app",
  messagingSenderId: "208547532073",
  appId: "1:208547532073:web:3242b99d1c14b7a60cbb38"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const emailsCollection = collection(db, 'contact_emails');