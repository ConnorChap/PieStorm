
import { db } from "./fireBase.js";
import { collection, getDocs } from "firebase/firestore";
import { timeTempGraph } from "./graph.js";

async function getDBData(){
    return await getDocs(collection(db, 'sensor-data'))
}

async function init(){
    const snapShot = await getDBData()
    loadDataTable(snapShot)
    timeTempGraph()
}

init()



export async function loadDataTable(snapShot){
    console.log(snapShot.docs)

    let latest = snapShot.docs.reduce((latest, current) => {
        return current.data()['time_stamp'].toDate() > latest.data()['time_stamp'].toDate() ? current : latest
    })

    let latestData = latest.data()
    let date = latestData['time_stamp'].toDate()
    
    let localDate = date.toLocaleDateString()
    let localTime = date.toLocaleTimeString()

    document.getElementById('location').textContent = latestData.location
    document.getElementById('date').textContent = localDate
    document.getElementById('time').textContent = localTime
    document.getElementById('temp').textContent = latestData['temp-f']
    document.getElementById('pressure').textContent = latestData.pressure
    document.getElementById('humidity').textContent = latestData.humidity
}