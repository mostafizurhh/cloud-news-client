// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REAT_APP_apiKey,
    authDomain: process.env.REAT_APP_authDomain,
    projectId: process.env.REAT_APP_projectId,
    storageBucket: process.env.REAT_APP_storageBucket,
    messagingSenderId: process.env.REAT_APP_messagingSenderId,
    appId: process.env.REAT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;