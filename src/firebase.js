import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoTVSKVSUNEQoy_ReB2kPEOPr6GxNmwPw",
  authDomain: "clone-9f466.firebaseapp.com",
  databaseURL: "https://clone-9f466.firebaseio.com",
  projectId: "clone-9f466",
  storageBucket: "clone-9f466.appspot.com",
  messagingSenderId: "223796820881",
  appId: "1:223796820881:web:88d627d70d53dae843f830",
  measurementId: "G-50214P66BZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
