import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_s-782dXEj1K_NudMpleljoOi1copAEc",
  authDomain: "twitter-clone-yt-30f6b.firebaseapp.com",
  projectId: "twitter-clone-yt-30f6b",
  storageBucket: "twitter-clone-yt-30f6b.appspot.com",
  messagingSenderId: "101498439194",
  appId: "1:101498439194:web:177c9b8f352821173ab3a3"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage }