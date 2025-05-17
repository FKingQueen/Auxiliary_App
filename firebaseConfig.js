// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getReactNativePersistence, initializeAuth} from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore, collection} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlWZgdXtpazbS78zC4iAsv4xiHDCPnKCU",
  authDomain: "auxiliary-app.firebaseapp.com",
  projectId: "auxiliary-app",
  storageBucket: "auxiliary-app.firebasestorage.app",
  messagingSenderId: "587137054369",
  appId: "1:587137054369:web:57094c0a05329e1976e2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");