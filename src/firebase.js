import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMrbphACHT2GBPm_1M7Rhqht6qCAFRbBI",
  authDomain: "jewerly-d7a06.firebaseapp.com",
  projectId: "jewerly-d7a06",
  storageBucket: "jewerly-d7a06.appspot.com",
  messagingSenderId: "295404012801",
  appId: "1:295404012801:web:1526a2804ed055c3f20700"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
