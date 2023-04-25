// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3DYV7SX_gg0gUJF9QVygH8MStB3yDcE",
  authDomain: "club-management-e873d.firebaseapp.com",
  databaseURL: "https://club-management-e873d-default-rtdb.firebaseio.com",
  projectId: "club-management-e873d",
  storageBucket: "club-management-e873d.appspot.com",
  messagingSenderId: "659820014893",
  appId: "1:659820014893:web:473faffa13839f642537a4",
  measurementId: "G-J5WNM3TT62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);
export { auth, database, analytics };