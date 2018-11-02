import React, {Component} from 'react';
import './smileyPollution.css'
import Smiley from './Smiley'

class SmileyPollution extends Component {
    
    GetSmiley = () => {
        if(this.props.indice<=25)
            return 'smiley-tres-faible'
        else if(this.props.indice<=50)
            return 'smiley-faible'
        else if( this.props.indice<=125)
            return 'smiley-moyen'
        else if(this.props.indice<=175)
            return 'smiley-eleve'
        else if (this.props.indice>175)
            return'smiley-tres-eleve'
    }
    render() { 
        return (
            <div className="smiley-main">
                <div className={`smiley-solo`}>
                    <Smiley img={this.GetSmiley()} />
                </div>
            </div>
       
        );
    }
}
 
export default SmileyPollution;