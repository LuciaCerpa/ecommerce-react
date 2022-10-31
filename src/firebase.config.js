
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAozK_9iRep-wcV53nnyGp__0S-ur1EfPw",
  authDomain: "ecommerce-react-da749.firebaseapp.com",
  projectId: "ecommerce-react-da749",
  storageBucket: "ecommerce-react-da749.appspot.com",
  messagingSenderId: "272929819628",
  appId: "1:272929819628:web:a718fe73c4fb6e501f0ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;