import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWcBOgaSbRsLn4wxbxf1NSsJKd_1K-w2M",
  authDomain: "imessage-clone0-l.firebaseapp.com",
  databaseURL: "https://imessage-clone0-l.firebaseio.com",
  projectId: "imessage-clone0-l",
  storageBucket: "imessage-clone0-l.appspot.com",
  messagingSenderId: "369841129425",
  appId: "1:369841129425:web:d6e045b52074fdb6d2c2f0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
