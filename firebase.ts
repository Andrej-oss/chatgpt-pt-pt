import {getApp, getApps, initializeApp} from "firebase/app";
import {Firestore, getFirestore} from "@firebase/firestore";


const APP_NAME = "chatGPT-PT-PT";
const firebaseConfig = {
    apiKey: "AIzaSyCfQbgL9BTI1e27b8o0sI48bDyw-dnSxmw",
    authDomain: "chatgpt-pt-pt.firebaseapp.com",
    projectId: "chatgpt-pt-pt",
    storageBucket: "chatgpt-pt-pt.appspot.com",
    messagingSenderId: "575438961564",
    appId: "1:575438961564:web:2023bde09acd082f20e659",
    measurementId: "G-MM05TYKGFE"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };