import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialize = () => {
    initializeApp(firebaseConfig)
}
export default firebaseInitialize;