import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuSshfhLge_BmtEpzoIw4vnJQ6bl_k2xs",
  authDomain: "my-react-app-b9e2b.firebaseapp.com",
  projectId: "my-react-app-b9e2b",
  storageBucket: "my-react-app-b9e2b.appspot.com",
  messagingSenderId: "330967015810",
  appId: "1:330967015810:web:d0c1ff3bfe2c9c0817ef9b",
};

firebase.initializeApp(firebaseConfig);
