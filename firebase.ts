import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBmUpmtX85cULWBvqdts8x8Uwu2IkOMixM",
    authDomain: "portfolio-8aa4f.firebaseapp.com",
    databaseURL: "https://portfolio-8aa4f-default-rtdb.firebaseio.com",
    projectId: "portfolio-8aa4f",
    storageBucket: "portfolio-8aa4f.appspot.com",
    messagingSenderId: "638875670478",
    appId: "1:638875670478:web:18ee64d24334f99c8c3d9f",
    measurementId: "G-NCSBTB0J4C"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);