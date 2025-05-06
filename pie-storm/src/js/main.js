import * as d3 from 'd3'
import admin from 'firebase-admin'
import { readFile } from 'fs/promises'


const account = JSON.parse(await readFile('./src/js/piestorm-6bc02-firebase-adminsdk-fbsvc-921e5c403f.json', 'utf-8'))
admin.initializeApp({
    credential: admin.credential.cert(account)
})
const db = admin.firestore()




const humValArr = [];
async function fetchData() {
  const timeStampArr = [];
  const pressureArr = [];
  const tempArr = [];
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
//window.onload = function(){
//  document.getElementById("temp").textContent = tempArr[0];
//}

fetchData();
