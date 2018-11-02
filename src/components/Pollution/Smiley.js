import React, { Component } from 'react';
import './smileyPollution.css'

class Smiley extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <img className="img-smiley" src={`/img/${this.props.img}.png`} alt="" />
        </div> );
    }
}
 
export default Smiley;