import React, { Component } from 'react';
import ModalesPolluants from './ModalesPolluants';
import './BlocPolluants.css'

class BlocPolluants extends Component {
    state = {  }
    render() { 
        return (  
            <div className="bloc-polluants">
                <hr className="hr-meteo"/>
                <div className="polluants">
                    <ModalesPolluants/>
                </div >
                <hr className="hr-meteo"/>
            </div>
        );
    }
}
 
export default BlocPolluants;