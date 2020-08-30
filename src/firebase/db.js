import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5bhDxMixAntNurmSLUm-hTcbvIoWMgbA",
    authDomain: "bm-project-84c82.firebaseapp.com",
    databaseURL: "https://bm-project-84c82.firebaseio.com",
    projectId: "bm-project-84c82",
    storageBucket: "bm-project-84c82.appspot.com",
    messagingSenderId: "610277528888",
    appId: "1:610277528888:web:7a5bf8bdabaf8343bd1dcd",
    measurementId: "G-Y2JBFB6PSZ"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  firebase.analytics();
