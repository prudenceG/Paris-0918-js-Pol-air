import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
//import PrintSearch from './current/PrintSearch'
import MeteoDuJours from '../Pollution/MeteoDuJours'
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
//import Titles from '../Titles';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';


class Home extends Component {
    state = { 

     }
    componentDidMount() {
        window.scrollTo(0, 0)
    
    }

    getClasseName(){

    if(this.props.city !== undefined && this.props.city.length >9 )
     
        return "-small-font"
    else
        return ""
   

    }
    render() { 
        return ( 

            <div className="home-container">
            
                <Grid container align-items="center" > {/*Container global*/}                    
                    <Grid item xs={12} md={7} className="test-border"> 
                        <Grid item container className="home-opacity" justify-content ="space-beetween" direction="row" align-items="center"> {/*Container logo + city + date + description*/}                            
                            <Grid item xs={5} md={4} className="mascotte-bor"> {/*Container logo*/}
                                { this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description} imgBackground={this.props.imgBackground}/> }
                            </Grid>                            
                            <Grid item container xs={7} md={8} direction="column" justify="space-around" align='right' alignItems="flex-end" className="main-main"> {/*Container city + date + description*/}
                                    <div className="bloc-city-date">
                                        <div className="bloc-city">
                                            <div className={`city-all-pages${this.getClasseName()}`}>{this.props.city}</div>
                                        </div>
                                        <div className="date-all-page"><DateIndex /></div>
                                    </div>
                                    <div className="comment-all-page">{this.props.description}</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={12} md={5} className="test-border">
                        <Grid item container justify="center" className="bloc-indiceJour"> {/*Container indices polution + météo*/}
                            <IndiceDuJours className="indiceJour" indice={this.props.dataPol} />
                            <span className="index-vertical-row indiceJour"></span>
                            {/* attention le composant meteo du jour est dans pollution, c'est une copie de indice du jour */}
                            <MeteoDuJours className="indiceJour" temperature={this.props.temperature} degres={this.props.degre} icon={this.props.icon}/>   
                        </Grid>
                    </Grid>    
                </Grid>
                
                <div>
                    {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
                </div>

            </div>
        );
    }
}

export default Home;