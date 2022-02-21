import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvYZ0iKRRh7jTjAK9tNik33z4Hr41bWF8",
  authDomain: "challenge-7d2d9.firebaseapp.com",
  projectId: "challenge-7d2d9",
  storageBucket: "challenge-7d2d9.appspot.com",
  messagingSenderId: "623778524729",
  appId: "1:623778524729:web:9481ee65e786d2ee27a7e8",
  measurementId: "G-R48N3HJD0Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };