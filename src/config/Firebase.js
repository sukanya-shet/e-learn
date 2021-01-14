import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDBdmFTiskYwduyYQpQ6MBKaLzjJVRj05c",
  authDomain: "scl-maxo-e6e45.firebaseapp.com",
  projectId: "scl-maxo-e6e45",
  storageBucket: "scl-maxo-e6e45.appspot.com",
  messagingSenderId: "146012097583",
  appId: "1:146012097583:web:a52531606824492d348ada",
  measurementId: "G-0TWCWQVQ9D"
};
// Initialize Firebase
const fire =firebase.initializeApp(firebaseConfig);
export default fire