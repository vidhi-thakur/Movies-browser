import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDkomOZFAcrTRkORDm3v1_H1Jjdn8azOww",
    authDomain: "movies-browser-66e85.firebaseapp.com",
    projectId: "movies-browser-66e85",
    storageBucket: "movies-browser-66e85.appspot.com",
    messagingSenderId: "266876060875",
    appId: "1:266876060875:web:a9ee371d15d6224da4c74e",
    measurementId: "G-NBM9JENLWL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth }