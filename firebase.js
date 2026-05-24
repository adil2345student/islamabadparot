// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBFsH8RBsRhRxbrN2g9MMDkR1b0O1ZxYJI",
  authDomain: "islamabadparrot-285bf.firebaseapp.com",
  projectId: "islamabadparrot-285bf",
  storageBucket: "islamabadparrot-285bf.firebasestorage.app",
  messagingSenderId: "178142021195",
  appId: "1:178142021195:web:e37fd8ae63cdf16fad6fce",
  measurementId: "G-ZV2ZWME6DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// SAVE MESSAGE FUNCTION
async function saveMessage(name, message) {
  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      message: message,
      time: new Date()
    });

    alert("Message Saved!");
  } catch (error) {
    console.log("Error:", error);
  }
}

// GET ALL MESSAGES
async function getMessages() {
  const querySnapshot = await getDocs(collection(db, "messages"));

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Export Functions
export { saveMessage, getMessages };
