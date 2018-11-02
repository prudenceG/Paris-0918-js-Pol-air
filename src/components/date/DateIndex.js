import React, { Component } from 'react';
//import ButtonBack from './ButtonBack'
//import ButtonForth from './ButtonForth'
import './Calendar.css';

const formatDate = (date) => {
    let monthNames = [
      "Janvier", "Février", "Mars",
      "Avril", "Mai", "Juin", "Juillet",
      "Août", "Septembre", "Octobre",
      "Novembre", "Décembre"
    ];
    let dayName = [
        "Dimanche","Lundi", "Mardi", "Mercredi",
        "Jeudi", "Vendredi", "Samedi"
      ];
    let dayIndex = date.getDay();
    let day = date.getDate();
    let monthIndex = date.getMonth();
  
    return dayName[dayIndex] + ' ' +  day + ' ' + monthNames[monthIndex] ;
  }
  
  
class DateIndex extends Component {
 
  state = { date: formatDate(new Date())};

  count = 0

  decrem = () => {
    let result = new Date();
    this.count = this.count - 1
    result.setDate(result.getDate() + this.count);
    this.setState({ date: formatDate(result) })
  }


  increm = () => {
    let result = new Date();
    this.count = this.count + 1
    result.setDate(result.getDate() + this.count);
    this.setState({ date: formatDate(result) })
  }
  
    render() { 
        return (
          <div>
            {/*<ButtonBack method={this.decrem} />*/}
            {this.state.date} 
            {/* <ButtonForth method={this.increm} /> */}
          </div>
        );
    }
}
export default DateIndex;