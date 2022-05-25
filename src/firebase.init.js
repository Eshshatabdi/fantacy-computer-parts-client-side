// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    // apiKey: "AIzaSyAArteN2ReaASs5_zJaxYmbIbxUedJ7ltI",
    // authDomain: "final-website-b7c99.firebaseapp.com",
    // projectId: "final-website-b7c99",
    // storageBucket: "final-website-b7c99.appspot.com",
    // messagingSenderId: "34798804248",
    // appId: "1:34798804248:web:29a6962f0a2d92ff57926d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;