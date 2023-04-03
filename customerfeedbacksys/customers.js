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

import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"; 

const db = getFirestore(app);
const q = collection(db, "customers");

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  const container = document.getElementById("container");
  const tr = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');
  const tr4 = document.createElement('tr');
  const tr5 = document.createElement('tr');
  const td = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  td.innerText = doc.data().name;
  td.style="font-size: 2rem;"
 tr.appendChild(td);
 td2.innerText = doc.data().number;
 tr2.appendChild(td2);
 td3.innerText = `Ratings: ${doc.data().ratings} Stars`;
 tr3.appendChild(td3);
 td4.innerText = `Common illness: ${doc.data().illness}`;
 tr4.appendChild(td4);
 td5.innerText = `Feedback: ${doc.data().feedback}`;
 tr5.appendChild(td5);
 container.appendChild(tr);
 container.appendChild(tr2);
 container.appendChild(tr3);
 container.appendChild(tr4);
 container.appendChild(tr5);

console.log(doc.data());
});
