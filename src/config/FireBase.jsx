
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGdYBTf-9--cxSSsIHow7fDwpKcMDlrS0",
  authDomain: "sign-in-ec9b9.firebaseapp.com",
  projectId: "sign-in-ec9b9",
  storageBucket: "sign-in-ec9b9.appspot.com",
  messagingSenderId: "164993335396",
  appId: "1:164993335396:web:9baa53fd59289b944c1f71",
  measurementId: "G-78ELNCSW6Y"
};


const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);