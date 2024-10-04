
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2zxoX2yct-lWlcns4CnP1Qe1W1ZOGwXU",
  authDomain: "olx-react-8661b.firebaseapp.com",
  projectId: "olx-react-8661b",
  storageBucket: "olx-react-8661b.appspot.com",
  messagingSenderId: "24050239134",
  appId: "1:24050239134:web:7fd119827041d4de659d8f"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider = new GoogleAuthProvider()