// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWJ3g9PRn33EybgK2QJeyDrJ80ZGQyoyg",
  authDomain: "lms-nsbm.firebaseapp.com",
  projectId: "lms-nsbm",
  storageBucket: "lms-nsbm.appspot.com",
  messagingSenderId: "592205917332",
  appId: "1:592205917332:web:47015fa8812fc258ef9881",
  measurementId: "G-XN48FJLY8B"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig) ;
}
 else 
{ 
    app = firebase.app()
}
const auth = firebase.auth ()

export { auth };