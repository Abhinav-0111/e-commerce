import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQh_EoFAuLsPJUvPXdijl4LcpBU8aip9k",
    authDomain: "e-commerce-cfddb.firebaseapp.com",
    projectId: "e-commerce-cfddb",
    storageBucket: "e-commerce-cfddb.appspot.com",
    messagingSenderId: "945529743659",
    appId: "1:945529743659:web:52f636060e543cb9bcfd6e",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
