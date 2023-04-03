// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvcLgcwTKHDwKQ9HM-Mp0XF-DxDXF-s28",
  authDomain: "sadgurutest-e7449.firebaseapp.com",
  projectId: "sadgurutest-e7449",
  storageBucket: "sadgurutest-e7449.appspot.com",
  messagingSenderId: "7451232254",
  appId: "1:7451232254:web:dc91a0d344ba384bd722af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { collection, addDoc, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"; 

const db = getFirestore(app);
// Add a new document in collection "cities"


const submitbtn = document.getElementById("submit-btn");

submitbtn.addEventListener('click', async() => {
    let namefield = document.getElementById("namefield");
    let number = document.getElementById("number");
    let illness = document.getElementById("illness");
    let feedback = document.getElementById("feedback");
    
 await addDoc(collection(db, "customers"), {
  name: namefield.value,
  number: number.value,
  illness: illness.value,
  feedback: feedback.value,
  ratings: localStorage.getItem("ratings")
});
number.value = "";
namefield.value = "";
illness.value = "";
feedback.value = "";

})

const q = collection(db, "customers");

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());

console.log(doc.data());
});

