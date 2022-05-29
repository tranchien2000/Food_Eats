import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNPMCHDuRUexZCJLfjoeVvpGuHASAzFoo",
  authDomain: "test-419bc.firebaseapp.com",
  projectId: "test-419bc",
  storageBucket: "test-419bc.appspot.com",
  messagingSenderId: "382797585035",
  appId: "1:382797585035:web:5fc588779133591bc9528e",
  measurementId: "G-H8F4BSC711",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
