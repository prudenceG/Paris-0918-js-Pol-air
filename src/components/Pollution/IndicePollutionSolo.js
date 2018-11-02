import React, {Component} from 'react';
import './indice-pollution-solo.css'

class  IndicePollutionSolo extends Component {

    GetFrenchIndice = () => { 
        if(this.props.indice<=12)
            return 1
        else if(this.props.indice<=25)
            return 2
        else if( this.props.indice<=37)
            return 3
        else if(this.props.indice<=50)
            return 4
        else if(this.props.indice<=100)
            return 5
        else if( this.props.indice<=125)
            return 6
        else if(this.props.indice<=150)
            return 7
        else if(this.props.indice<=175)
            return 8
        else if( this.props.indice<=200)
            return 9
        else if(this.props.indice<=300)
            return 10
        else
            return 11
    }
    SoloStyleIndice(){
        if(this.props.indice<=25)
            return 'solo-tres-faible'
        else if(this.props.indice<=50)
            return 'solo-faible'
        else if( this.props.indice<=125)
            return 'solo-moyen'
        else if(this.props.indice<=175)
            return 'solo-eleve'
        else if (this.props.indice>175)
            return'solo-tres-eleve'
    }
    render() { 
        return (
        <div className={`indice-pollution-main ${this.SoloStyleIndice()}`}>
            <div className={`indice-pollution-solo`}>{this.GetFrenchIndice()}</div>
        </div>
        );
    }
}
 
export default IndicePollutionSolo;