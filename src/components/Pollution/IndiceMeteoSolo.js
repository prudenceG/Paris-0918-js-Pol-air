import React, {Component} from 'react';
import './indice-pollution-solo.css'

class  IndicePollutionSolo extends Component {

    render() { 
        return (
        <div className="indice-pollution-main color-meteoJour">
            <div className={`indice-meteo-solo`}>
                {this.props.temperature}<sup className="degre-index">°C</sup>
            </div>
        </div>
        );
    }
}
 
export default IndicePollutionSolo;