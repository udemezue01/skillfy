// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkWA1aNkYPYiaeLSCnyM5TXInPxElsWVw",
  authDomain: "skillfy-4afd8.firebaseapp.com",
  projectId: "skillfy-4afd8",
  storageBucket: "skillfy-4afd8.appspot.com",
  messagingSenderId: "656018826759",
  appId: "1:656018826759:web:0b8b01bdc0088f027a2ca2",
  measurementId: "G-6R35K8YTQ9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {

	firebase,
	analytics,
}