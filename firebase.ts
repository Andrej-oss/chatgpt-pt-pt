// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import exp from "constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

export { db };