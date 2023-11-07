import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsSn5OVMh8TWyzfUqEVXXAt9jkKNiaP4s",
    authDomain: "verint-queue.firebaseapp.com",
    databaseURL: "https://verint-queue-default-rtdb.firebaseio.com",
    projectId: "verint-queue",
    storageBucket: "verint-queue.appspot.com",
    messagingSenderId: "256236895004",
    appId: "1:256236895004:web:95bd30e5ec3b5df7ce58d9",
    measurementId: "G-TRNTNMY5ZQ"
};

export const app = initializeApp(firebaseConfig);