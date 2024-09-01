// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxohpXjH0Pb6FiPEXRZt6gwW8XZMIQSVo",
  authDomain: "gimm-e3d8f.firebaseapp.com",
  projectId: "gimm-e3d8f",
  storageBucket: "gimm-e3d8f.appspot.com",
  messagingSenderId: "861824380799",
  appId: "1:861824380799:web:58f9249d58ed6a1762f44a",
  measurementId: "G-HZZPGSFWC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
