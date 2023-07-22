// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",
  authDomain: "car-bones.firebaseapp.com",
  projectId: "car-bones",
  storageBucket: "car-bones.appspot.com",
  messagingSenderId: "1017119946706",
  appId: "1:1017119946706:web:28a8b30ea69e94cdfeba0b",
  measurementId: "G-8VSZYLFQ0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);