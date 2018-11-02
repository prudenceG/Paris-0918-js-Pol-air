import React, { Component } from 'react';
import './IndiceDuJours.css'
import IndicePollutionSolo from './IndicePollutionSolo'
import SmileyPollution from './SmileyPollution'
import ButtonPollution from './ButtonPollution'





class IndiceDuJours extends Component {


      //styleIndice permet de recuperer le style de l'indice à partir du fichiet IndiceDuJours.css
    StyleIndice(){
        if(this.props.indice<=25)
            return 'tres-faible'
        else if(this.props.indice<=50)
            return 'faible'
        else if( this.props.indice<=75)
            return 'moyen'
        else if(this.props.indice<=100)
            return 'eleve'
        else
            return'tres-eleve'
    }
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
    

    render() { 
        // const pagePollution = (props) => <PagePollution indice={this.props.indice} />
        
       return(
        <div>
           <div className="indiceDuJour-index">
                <div><p className="indiceDuJour-part1">POLLUTION</p></div>
                <div className="indiceDuJour-part2">
                    <div className="bouton-plus-index">
                        <ButtonPollution className="button-indice-index"/>
                    </div>
                    <div className="indice-smiley">
                        <div className="indice-smiley-child">{this.props.indice && <IndicePollutionSolo indice={this.props.indice}/>}</div>
                        <div className="indice-smiley-child">{this.props.indice && <SmileyPollution indice={this.props.indice}/>}</div>               
                    </div>
               </div>
            </div>
        </div>
        )
        

    }
}
 
export default IndiceDuJours;