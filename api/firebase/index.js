import { initializeApp } from "firebase/app";

const FirebaseConfig = {
    apiKey: "AIzaSyClk3i5UKl57r_PhNdUDeUVISMQd7Z3jBk",
    authDomain: "moboliberary.firebaseapp.com",
    projectId: "moboliberary",
    storageBucket: "moboliberary.appspot.com",
    messagingSenderId: "1086111026430",
    appId: "1:1086111026430:web:df20a4742322797c7769af",
    measurementId: "G-NZ05W53PB5"
};

const app = initializeApp(FirebaseConfig);
export default app;