import React, { Component } from 'react';
import BlockForcastMeteoDate from './BlockForcastMeteoDate';
import BlockForecastMeteoTemp from './BlockForecastMeteoTemp';
import './BlockForecastMeteo.css'
import BlockIconForecast from './BlockIconForecast';
import BlockForecastMeteoNow from './BlockForecastMeteoNow';
import Background from '../current/Background';



//import Graphic from './Graphic'



class BlockForcastMeteo extends Component {


  // state = {
  //   city : this.props.city,
  //   tempMax: [],
  //   tempMin : [],
  // }

  // componentDidMount() {
    
  // }



// getForecastDate () {

//   axios.get(`${url}${this.state.city},fr&lang=${lang}&APPID=${key}&units=${unit}`)
//       .then(res => {
//         let temp_min = []
//         let temp_max = []
//         for (let i = 1; i <= 4; i++) {
//           let temperature_min = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
//           temp_min.push(Math.floor(Math.min(...temperature_min.map(x=> x.main.temp_min))))

//           let temperature_max = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
//           temp_max.push(Math.floor(Math.max(...temperature_max.map(x=> x.main.temp_max))))
//         }
//         this.setState({
//           tempMin : temp_min,
//           tempMax: temp_max
//       })
//         //console.log(temp_max)
//       })

//   }


// getDateAddOne(day) {
//     const n = this.getDate(day) + 86400
//     return n
// }

// getDate(day) {
//     let d = new Date();
//     let n = d.getTime() % 86400000
//     let test = d.setTime(((d.getTime()-n)/1000)+86400*day)
//     return test
// }
componentDidMount() {
  window.scrollTo(0, 0)
}

  render() {
    return (
      <div>
        <div>
          {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} />}
        </div>
        <BlockForecastMeteoNow className='blockMeteoNow' temperature={this.props.temperature} description={this.props.description} city={this.props.city}/>
        {/* <Graphic  tempMin={this.props.tempMin}  tempMax={this.props.tempMax} /> */}
        <div>
          {this.props.tempMin.map((x, index) => (
             <div key={index} className='blockMeteo'>
             <BlockForcastMeteoDate dateApp={index+1} />
             <BlockIconForecast icon_forecast={this.props.icon_forecast[index]}/>
             <BlockForecastMeteoTemp temp_min={this.props.tempMin[index]} temp_max={this.props.tempMax[index]} />
           </div>
          ))}
        </div>
      </div>

     );
  }
}
 
export default BlockForcastMeteo;
