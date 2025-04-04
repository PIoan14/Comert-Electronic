import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb6LZtvJsd7UsUZ6FqIGoF8xDSQT9nNzA",
    authDomain: "sitesport-86b83.firebaseapp.com",
    projectId: "sitesport-86b83",
    storageBucket: "sitesport-86b83.firebasestorage.app",
    messagingSenderId: "848097906119",
    appId: "1:848097906119:web:81790c7839d38b7c269de2"
  };




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db };
export {auth}