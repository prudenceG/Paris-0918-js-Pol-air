import React, { Component } from 'react';

const formatDate = (date) => {

    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let hours = date.getHours();
  
    return `${year}-${month}-${day} ${hours}:00:00`;
  }


class DateApi extends Component {
    state = {  }
    render() { 
        let result = new Date();
        result.setDate(result.getDate());
        return ( 
            <div>
                <h1>{formatDate(result)}</h1> 
            </div>
         );
    }
}
 
export default DateApi;
