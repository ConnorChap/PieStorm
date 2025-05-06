import * as d3 from 'd3'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
const Config = {
  apiKey: "921e5c403f5804f844ed32a5bcdc230d87300144",
  authDomain: "piestorm-6bc02.firebaseapp.com",
  projectId: "piestorm-6bc02",
  storageBucket: "piestorm-6bc02.appspot.com",
  messagingSenderId: "118438856939179889673",
}

initializeApp({
  credential: cert(serviceAccount),
});
const humValArr = [];
async function fetchData() {
  const timeStampArr = [];
  const pressureArr = [];
  const tempArr = [];
  const db = getFirestore();
  const HumidityRef = db.collection('sensor-data');
  const snapshot = await HumidityRef.where('humidity', '!=', null).get();
  
  snapshot.forEach(doc => {
    const docData = doc.data();
    humValArr.push(docData.humidity);
    timeStampArr.push(docData.time_stamp);
    pressureArr.push(docData.pressure);
    tempArr.push(docData.temperature);
  });
  console.log(humValArr);
  console.log(timeStampArr);
}
window.onload = function(){
  document.getElementById("temp").textContent = tempArr[0];
}

fetchData();
