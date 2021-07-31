import firebase from 'firebase/app';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacrWHJhs2AccoU-9GCEb-mmLRJsG0XcY",
  authDomain: "office-htw.firebaseapp.com",
  databaseURL: "https://office-htw.firebaseio.com",
  projectId: "office-htw",
  storageBucket: "office-htw.appspot.com",
  messagingSenderId: "724085480815",
  appId: "1:724085480815:web:4a78d1a04b7b5d0be45c9a",
  measurementId: "G-TMMQR2HL44"
};

export const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

