// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
 use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBCooW-0yR5e8DfOquzTai7QBldJ5Hq1U",
  authDomain: "invoice-927e4.firebaseapp.com",
  projectId: "invoice-927e4",
  storageBucket: "invoice-927e4.appspot.com",
  messagingSenderId: "191057517784",
  appId: "1:191057517784:web:aca396a5889fd4b00c0bad",
  measurementId: "G-31GENHK2D5"
};


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}