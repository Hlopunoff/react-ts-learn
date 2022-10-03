import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcMLnLlxg8pj-smVnFSR8MCN7Fj0j620s",
    authDomain: "vehicle-report-platform.firebaseapp.com",
    projectId: "vehicle-report-platform",
    storageBucket: "vehicle-report-platform.appspot.com",
    messagingSenderId: "715778156735",
    appId: "1:715778156735:web:020234a12fba7fb4957e0a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);