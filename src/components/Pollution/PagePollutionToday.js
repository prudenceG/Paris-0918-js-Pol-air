import React, { Component } from 'react';
import './PagePollution-today.css'
import IndicePollutionSolo from './IndicePollutionSolo'

class PagePollutionToday extends Component {
    state = { 
        quality :["Très Faible","Faible","Moyen","Elevé","Très Elevé"]
     }

       //getQualite permet de retourner un element du quality 
      //en fonction de this.props.indice qui correspond a la valeur passé en props depuis le parent PollutionRealTime
      GetMessageQuality(){

        if(this.props.indice<=25)
            return this.state.quality[0]
        else if(this.props.indice<=50)
            return this.state.quality[1]
        else if( this.props.indice<=100)
            return this.state.quality[2]
        else if(this.props.indice<=125)
            return this.state.quality[3]
        else if(this.props.indice<=150)
            return this.state.quality[3]
        else if(this.props.indice<=175)
            return this.state.quality[4]
        else if(this.props.indice<=200)
            return this.state.quality[4]
        else if(this.props.indice<=300)
            return this.state.quality[4]
        else if (this.props.indice >= 300)
            return this.state.quality[4]
    }
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

    render() { 
        return ( 
        <div className="today-bloc">
            <div className="indice-today">
                <IndicePollutionSolo indice={this.props.indice}/>
            </div>
            <div className="text-today">
                <div>
                    <div className="city-all-pages" >{this.props.city}</div>
                    <div className="date-all-page " >Aujourd'hui</div>
                </div>
                <div className="comment-all-page">{this.GetMessageQuality()}</div>
            </div>
            <img 
                src={require(`../../img/backgrounds/bkg${this.props.imgBackground}.jpg`)} 
                className="backPollution" 
                alt="Temps actuel" 
            />             
        </div> 
        
        );
    }
}
 
export default PagePollutionToday;