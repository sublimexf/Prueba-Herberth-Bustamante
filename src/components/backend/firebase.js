import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1TDU3Z1uSMrZ5GSB9l4mraWaiKsP0lfI",
  authDomain: "prueba-6983d.firebaseapp.com",
  projectId: "prueba-6983d",
  storageBucket: "prueba-6983d.appspot.com",
  messagingSenderId: "608379179474",
  appId: "1:608379179474:web:d63567313c7019f04db80b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();