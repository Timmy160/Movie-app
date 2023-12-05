import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2XH_PWatErMApw7HqWaYTODYKwqIjMvg",
  authDomain: "netflix-clone-b153f.firebaseapp.com",
  projectId: "netflix-clone-b153f",
  storageBucket: "netflix-clone-b153f.appspot.com",
  messagingSenderId: "880459521169",
  appId: "1:880459521169:web:fb200f5ad2b88b6442f330",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
