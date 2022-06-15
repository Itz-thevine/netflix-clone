// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4LfqU3hI2VHgxJfVglCoQ9NR3GeAcx2Y",
  authDomain: "netflixclone-e3a26.firebaseapp.com",
  projectId: "netflixclone-e3a26",
  storageBucket: "netflixclone-e3a26.appspot.com",
  messagingSenderId: "906722696426",
  appId: "1:906722696426:web:7a9b6a7b8cb0fe96b7cb93",
  measurementId: "G-XRHSYDPN0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider};
export default getFirestore();