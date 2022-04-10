// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb4HhhpDvw2fcNeTTnPvK786inuMm5HfM",
  authDomain: "tech-geek-auth-236d4.firebaseapp.com",
  projectId: "tech-geek-auth-236d4",
  storageBucket: "tech-geek-auth-236d4.appspot.com",
  messagingSenderId: "257801417963",
  appId: "1:257801417963:web:de3ced2642c9e67bbbfaae",
  measurementId: "G-2Y6HWVJ51R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth=getAuth(app);

export default app;