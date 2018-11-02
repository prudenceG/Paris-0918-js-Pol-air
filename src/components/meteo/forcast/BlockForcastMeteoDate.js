import React, { Component } from 'react';

const formatDate = (date) => {
    let dayName = [
        "Dimanche","Lundi", "Mardi", "Mercredi",
        "Jeudi", "Vendredi", "Samedi"
      ];
    let dayIndex = date.getDay();
    let day = date.getDate();
  
    return `${dayName[dayIndex ]} ${day}`;
  }

class DateForcastMeteo extends Component {

    render() { 
        let result = new Date();
        result.setDate(result.getDate() + this.props.dateApp);
        return ( 
            <div>
                <div className='MeteoDate'>{formatDate(result)}</div> 
            </div>
         );
    }
}
 
export default DateForcastMeteo;