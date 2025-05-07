
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../fireBaseCred";

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

