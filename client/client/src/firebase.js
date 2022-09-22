import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBj-0NYUfHadUhh4yMRIShWe591RH-TwN8",
    authDomain: "stack-overflow-3d46c.firebaseapp.com",
    projectId: "stack-overflow-3d46c",
    storageBucket: "stack-overflow-3d46c.appspot.com",
    messagingSenderId: "48273775002",
    appId: "1:48273775002:web:4f4f66f62d5b429ca54223"
  };

  const firebase = initializeApp(firebaseConfig);

  export default firebase;