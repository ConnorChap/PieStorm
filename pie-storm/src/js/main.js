
import { db } from "./fireBase.js";
import { collection, getDocs } from "firebase/firestore";


loadDataTable()



export async function loadDataTable(){
    const snapShot = await getDocs(collection(db, 'sensor-data'))

    let date = snapShot.docs[0].data()['time_stamp'].toDate()
    let localDate = date.toLocaleDateString()
    let localTime = date.toLocaleTimeString()
    //console.log(snapShot.docs[0].data())

    document.getElementById('location').textContent = snapShot.docs[0].data().location
    document.getElementById('date').textContent = localDate
    document.getElementById('time').textContent = localTime
    document.getElementById('temp').textContent = snapShot.docs[0].data()['temp-c']
    document.getElementById('pressure').textContent = snapShot.docs[0].data().pressure
    document.getElementById('humidity').textContent = snapShot.docs[0].data().humidity
}