import { FirebaseError, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // authentication module for login and signups
import "firebase/firestore";
import { getFirestore, collection, getDoc, setDoc} from 'firebase/firestore';
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBAfkyqa6whNhkAYBNCRW295n5pqJCFcYw",
  authDomain: "timenus-orbital.firebaseapp.com",
  projectId: "timenus-orbital",
  storageBucket: "timenus-orbital.appspot.com",
  messagingSenderId: "143777864679",
  appId: "1:143777864679:web:b756b514425067acb9fb42"
};


// init firebase app
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app); 
export const auth = getAuth(app);


  
export default app;