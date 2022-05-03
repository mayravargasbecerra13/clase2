// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDoBA5vqcGDAMOPBzBrrWKYInOSiJZE9fg",
  authDomain: "react-coderhouse-679f2.firebaseapp.com",
  projectId: "react-coderhouse-679f2",
  storageBucket: "react-coderhouse-679f2.appspot.com",
  messagingSenderId: "718706891609",
  appId: "1:718706891609:web:c4e989fe129ad5eef98a48"
}





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)