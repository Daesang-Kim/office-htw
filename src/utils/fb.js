import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";
// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";
// import { getFunctions } from 'firebase/functions';

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

let app = null;

export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');
  return app;
};

export const firebaseFunctions = interfaceFunction => {
  if (app != null) {
    const functions = getFunctions(app)
    if(process.env.NODE_ENV === 'development') {
      connectFunctionsEmulator(functions, "localhost", 5001);
    }
    return httpsCallable(functions, interfaceFunction);
  }
  return null;
}