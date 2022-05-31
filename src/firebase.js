import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // authentication module for login and signups


const firebaseConfig = {
    apiKey: "AIzaSyCIu_ZJyEHLZQiY1qoaDjEN0QiRfwIUM9A",
    authDomain: "orbitaltimenus.firebaseapp.com",
    projectId: "orbitaltimenus",
    storageBucket: "orbitaltimenus.appspot.com",
    messagingSenderId: "393326174408",
    appId: "1:393326174408:web:9f531bbb1a37f325b445fd"
  };

  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  
export default app;