import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDQ6MrQApSsRnfOXaxEb81-n-4UNu2xzFY",
  authDomain: "disney-clone-fbf2c.firebaseapp.com",
  projectId: "disney-clone-fbf2c",
  storageBucket: "disney-clone-fbf2c.appspot.com",
  messagingSenderId: "428158802742",
  appId: "1:428158802742:web:e77f440a78a6296de2b197",
  measurementId: "G-E2C0D9P1QV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
