import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


// const formatDate = (date) => {
//   let dayName = [
//       "Dimanche","Lundi", "Mardi", "Mercredi",
//       "Jeudi", "Vendredi", "Samedi"
//     ];
//   let dayIndex = date.getDay();
//   let day = date.getDate();

//   return `${dayName[dayIndex ]} ${day}`;
// }


const getDate = () => {
  let result = new Date();
  let resutlData = []
  for (let i = 0; i < 4; i++) {
    resutlData.push(result.setDate(result.getDate() + i))
  }
  return resutlData
}

//let name = getDate()


class Test extends Component {
  
 
    state = { }

    render() { 

      const data = {
        labels: getDate(),
        datasets: [
          {
            label: 'Temperature Min',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.tempMin
          },
          {
            label: 'Temperature Max',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.tempMax
          }
        ]
      };
    
        return ( 
          

            <div>
            <h2>Temperature</h2>
            <Line data={data} />
          </div>
        )

    }
}
 
export default Test;