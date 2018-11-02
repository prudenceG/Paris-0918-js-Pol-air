import React, {Component} from 'react';
import './indice-pollution-solo.css'

class  IconMeteo extends Component {

    render() { 
        return (
        <div className="smiley-main">
            <div className="smiley-solo">
            <img className="MeteoSolo-index" src={`/img/${this.props.icon}.png`} alt="b"/>
            </div>
        </div>
        );
    }
}
 
export default IconMeteo;