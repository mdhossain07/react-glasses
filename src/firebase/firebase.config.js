import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIOfSCCZK2D-mGb8Kf3fYBrgwgkEcPuhc",
  authDomain: "react-glasses-52a7b.firebaseapp.com",
  projectId: "react-glasses-52a7b",
  storageBucket: "react-glasses-52a7b.appspot.com",
  messagingSenderId: "7320222624",
  appId: "1:7320222624:web:2c09e4975ce6d1a92782c5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
