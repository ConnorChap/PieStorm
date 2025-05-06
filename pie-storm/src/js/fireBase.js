
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2iEglIw9_iVOivgN9pvfj7t1KL_P407o",
  authDomain: "piestorm-6bc02.firebaseapp.com",
  projectId: "piestorm-6bc02",
  storageBucket: "piestorm-6bc02.firebasestorage.app",
  messagingSenderId: "150432134556",
  appId: "1:150432134556:web:3c57c2bdce168090edc459",
  measurementId: "G-BL2GXMFNZB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// const humValArr = [];
// async function fetchData() {
//   const timeStampArr = [];
//   const pressureArr = [];
//   const tempArr = [];
//   const HumidityRef = db.collection('sensor-data');
//   const snapshot = await HumidityRef.where('humidity', '!=', null).get();
  
//   snapshot.forEach(doc => {
//     const docData = doc.data();
//     humValArr.push(docData.humidity);
//     timeStampArr.push(docData.time_stamp);
//     pressureArr.push(docData.pressure);
//     tempArr.push(docData.temperature);
//   });
//   console.log(humValArr);
//   console.log(timeStampArr);

//   document.getElementById("temp").textContent = 'Hello'
// }
// //window.onload = function(){
// //  document.getElementById("temp").textContent = tempArr[0];
// //}

