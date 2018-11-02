import React, {Component} from 'react';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';

class PagePollution extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    state = {  }
    render() { 
        return ( 
            <div className="bloc-pollution">             
                {this.props.loading ? "En cours de chargement" :
                    <PagePollutionToday city={this.props.city} indice={this.props.indice} imgBackground={this.props.imgBackground} />
                }
                <div className="bloc-conseilHistorique">
                <ConseilsPollution className="test-border" indice={this.props.indice}/>
                <BlocPolluants/>
                <HistoriquePollution/>
                </div>
            </div>
        );
    }
}
 
export default PagePollution;