import firebase from "firebase/app";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA414bdGVnzhaCc3GeO1MR7Dm9G9Km2XcI",
    authDomain: "react-firebase-upl.firebaseapp.com",
    projectId: "react-firebase-upl",
    storageBucket: "react-firebase-upl.appspot.com",
    messagingSenderId: "1007108151336",
    appId: "1:1007108151336:web:7fca95e3958ff81bc23d1d",
    measurementId: "G-3CGC476JXQ"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage};