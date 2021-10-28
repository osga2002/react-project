import firebase from "firebase";
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA2WsGAjWEdhp-RzZLoHoIx7nD52F49vPI",
  authDomain: "appchoho.firebaseapp.com",
  projectId: "appchoho",
  storageBucket: "appchoho.appspot.com",
  messagingSenderId: "532189128720",
  appId: "1:532189128720:web:24a37f89c200a48a028295"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app)
}