import React, { Component } from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

class BlockForecastMeteoTemp extends Component {

    render() {
        return ( 
            <div>
                <ArrowUpward/>{this.props.temp_max}°C
                <ArrowDownward/>{this.props.temp_min}°C
            </div>
         );
    }
}
 
export default BlockForecastMeteoTemp;