import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyC0QuRKNrppOWAjfULFljl2IMNSNIVMHMo",
  authDomain: "mymate-f6014.firebaseapp.com",
  projectId: "mymate-f6014",
  storageBucket: "mymate-f6014.appspot.com",
  messagingSenderId: "208821504727",
  appId: "1:208821504727:web:3653f26bdfd843b1fa7e92",
  measurementId: "G-2X0J28TT15"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;