import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyANViQx9XrxKgbLaQNgTYv4w7AZCBxZye0",
    authDomain: "todo-ninja-1af82.firebaseapp.com",
    projectId: "todo-ninja-1af82",
    storageBucket: "todo-ninja-1af82.appspot.com",
    messagingSenderId: "194079793520",
    appId: "1:194079793520:web:b381ec84819f2b8cbe6fb5",
    measurementId: "G-E9PRRD24F3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({timestamps: true})

  export default db