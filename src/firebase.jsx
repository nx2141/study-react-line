import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCusJIAnL-xC-PmfueVI3Xq8FKyesngU8A",
  authDomain: "react-line-9dc45.firebaseapp.com",
  projectId: "react-line-9dc45",
  storageBucket: "react-line-9dc45.appspot.com",
  messagingSenderId: "222626835104",
  appId: "1:222626835104:web:c771dcf77378db44b777c5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
