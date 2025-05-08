import * as d3 from 'd3'
import { db } from './fireBase'
import { collection, getDocs } from "firebase/firestore";

export const timeTempGraph = async () => {

    const width = 1000
    const height = 400
    const marginTop = 20
    const marginRight = 20
    const marginBottom = 30
    const marginLeft = 40
    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const timeTemp = await getData()
    console.log(timeTemp)

   d3.select('#time-temp')
     .select('svg')
     .remove()

    const svg = d3.select('#time-temp')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    const x = d3.scaleLinear()
                .domain([0, 23])
                .range([0, innerWidth])
    
    const y = d3.scaleLinear()
                .domain([-15, 115])
                .nice()
                .range([innerHeight, 0])

    svg.append('g')
       .attr('transform', `translate(0, ${innerHeight})`)
       .call(d3.axisBottom(x).ticks(24).tickFormat(d => `${String(d).padStart(2, '0')}:00`))
       .selectAll('path, line')
       .attr('stroke', 'white')

    svg.selectAll('.tick text')
       .attr('fill', 'white') 
    
    svg.append('g')
       .call(d3.axisLeft(y).ticks(12))
       .selectAll('path, line')
       .attr('stroke', 'white')

    svg.selectAll('text')
       .attr('fill', 'white') 
    
    svg.selectAll('.dot')
       .data(timeTemp)
       .enter().append('circle')
       .attr('class', 'dot')
       .attr('cx', d => x(d.hour))
       .attr('cy', d => y(d.temp))
       .attr('r', 5)
       .attr('fill', 'white')
}

async function getData(){
    const snapShot = await getDocs(collection(db, 'sensor-data'))
    const data = [];
    for(const doc of snapShot.docs){
        data.push({hour: doc.data()['time_stamp'].toDate().getHours(), temp: doc.data()['temp-f']})
    }

    console.log(data.temp)

    return data
}