import React, { Component } from 'react';
import ModalesPolluants from './ModalesPolluants';
import './BlocPolluants.css'

class BlocPolluants extends Component {
    state = {  }
    render() { 
        return (  
            <div className="bloc-polluants">
                <hr className="display-none-hr"/>
                <div className="polluants">
                    <ModalesPolluants/>
                </div >
                <hr />
            </div>
        );
    }
}
 
export default BlocPolluants;