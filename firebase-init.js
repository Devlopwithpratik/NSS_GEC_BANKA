import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { initializeFirestore, collection, addDoc, getDocs, getDoc, setDoc, doc, updateDoc, deleteDoc, query, orderBy, where } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "Enter Your Api Key",
  authDomain: "yourdomain.firebaseapp.com",
  projectId: "yourproject",
  storageBucket: "your/storage.firebasestorage.app",
  messagingSenderId: "510721207564",
  appId: "1:5107212iiyhdnd64:web:fff3f6d2cc2bdfcaf3ed29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  experimentalForceOwningTab: true,
});

export { app, db, auth, collection, addDoc, getDocs, getDoc, setDoc, doc, updateDoc, deleteDoc, query, orderBy, where, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, RecaptchaVerifier, signInWithPhoneNumber };
