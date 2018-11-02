import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import './HistoriquePollution.css'


///declaration de varriables globales
const url = 'https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/ind_idf_agglo/FeatureServer/0/query?where=1%3D1&outFields=date_echea,valeur,qualificat&returnGeometry=false&outSR=4326&f=json'
let myDates = [];
let myLabel = [];
let myData  = [];
let allData = null;

class HistoriquePollution extends Component {    
      
    state = {
        value:0,
        onlyOne : true,
        ///chartData objet du graphique
        chartData: {},
        colorYear :'primary',
        colorMonth :'default',
        colorWeek :'default',
        colorMonthHidden :'primary',
    }
    
    /**
     * fonction qui lance le fecth asynchrone
     */
    GetChartData = async (e) => {
        const call = await fetch(url)
        allData = await call.json()
        allData =allData.features.sort(function(a,b){return a.attributes.date_echea - b.attributes.date_echea})   
        this.GetYear(); 
    }

    /**
     * recuperation data année
     */
    GetYear(){
        //toute mes dates
        myLabel =[];
        ///l'axe x :les dates
        myDates= [];
        ///axe y: les indices
        let myYearData=[];
        let chartData ={};
        let greenZone =[];
        let greenYellowZone =[];
        let yellowZone =[];
        let orangeZone =[];
        let redZone =[];
        
        allData.map(element =>{
            let date  = new Date(element.attributes.date_echea)
            myLabel.push(date.toLocaleDateString('fr'));
            myData.push(element.attributes.valeur); 
            return element;
           })
           /**
            * filtre pour recuperer des data et date chaque 7 jours
            */
           ///boucle pour filter les dates 
           let counter = 7;
           myLabel.map((element,index) =>{
               if(counter === 7 ){
                    myDates.push(element)
                    myYearData.push(myData[index])
                    counter =0;
                    greenZone.push(2);
                    greenYellowZone.push(4);
                    yellowZone.push(6);
                    orangeZone.push(8);
                    redZone.push(10)
                    return element;
                   
               }
               counter++;
               return element;
           })
        /**
         * push du dernier jour
         */
        myDates.push(myLabel[myLabel.length-1]);
        myYearData.push(myData[myData.length-1])    
        greenZone.push(2);
        greenYellowZone.push(4);
        yellowZone.push(6);
        orangeZone.push(8);
        redZone.push(10);
        /**
         * créer un clone de l'objet state 
         */
        chartData ={
            labels:myDates,
            datasets:[{
                label:'indice',
                fill:false,
                pointRadius:0,
                //backgroundColor:"#2C2A2A",
                borderColor:"#2C2A2A",
                data:myYearData,
            },
            {
                label:'green',
                pointRadius:0,
                backgroundColor:'#79BC6A',
                data:greenZone
            },
            {
                label:'greenYellow',
                pointRadius:0,
                data:greenYellowZone,
                backgroundColor:'#BBCF4C',
            },
            {
                label:'yellow',
                pointRadius:0,
                data :yellowZone,
                backgroundColor:'#EEC20B',
            },
            {
                label:'orange',
                pointRadius:0,
                data:orangeZone,
                backgroundColor:'#F29305',
            },
            {
                label:'red',
                pointRadius:0,
                data:redZone,
                backgroundColor:'#960018',
            },
        ]
        }
        /**
         *mettre à jour les state
         */
        this.setState({chartData: chartData})
          
        }
    /**
     * methode pour recuperer 1 mois
     */
    GetMonth(){
        let date =[];
        let data =[];
        let chartData ={}

        let greenZone =[];
        let greenYellowZone =[];
        let yellowZone =[];
        let orangeZone =[];
        let redZone =[];
        
        /**
         * filtre pour recuperer le dernier mois
         */
        for (let i= 0; i<31; i++){
            date.push(myLabel[myLabel.length-31+i])
            data.push(myData[myData.length-31+i])
        }
        date.map(element =>{
            greenZone.push(2);
            greenYellowZone.push(4);
            yellowZone.push(6);
            orangeZone.push(8);
            redZone.push(10)
            return element
        })   
            chartData ={
                labels:date,
                datasets:[{
                    label:'indice',
                    fill:false,
                    pointRadius:0,
                    borderColor:"#2C2A2A",
                    data:data,
                },
                {
                    label:'green',
                    pointRadius:0,
                    backgroundColor:'#79BC6A',
                    data:greenZone
                },
                {
                    label:'greenYellow',
                    pointRadius:0,
                    data:greenYellowZone,
                    backgroundColor:'#BBCF4C',
                },
                {
                    label:'yellow',
                    pointRadius:0,
                    data :yellowZone,
                    backgroundColor:'#EEC20B',
                },
                {
                    label:'orange',
                    pointRadius:0,
                    data:orangeZone,
                    backgroundColor:'#F29305',
                },
                {
                    label:'red',
                    pointRadius:0,
                    data:redZone,
                    backgroundColor:'#960018',
                },
            ]
            }
            this.setState({chartData :chartData});
            return(chartData);
    }
    /**
     *methode pour recuperer les dates d'une semaine 
     */
    GetWeek(){
        let date =[];
        let data =[];
        let chartData ={};
        let greenZone =[];
        let greenYellowZone =[];
        let yellowZone =[];
        let orangeZone =[];
        let redZone =[];
        /**
         * filtre pour une semaine 
         */
        for (let i=0 ;i<7; i++){
            date.push(myLabel[myLabel.length-7+i])
            data.push(myData[myData.length-7+i])
            greenZone.push(2);
            greenYellowZone.push(4);
            yellowZone.push(6);
            orangeZone.push(8);
            redZone.push(10)
        }
        chartData ={
                labels:date,
                datasets:[{
                    label:'indice',
                    fill:false,
                    pointRadius:0,
                    borderColor:"#2C2A2A",
                    data:data,
                },
                {
                    label:'green',
                    pointRadius:0,
                    backgroundColor:'#79BC6A',
                    data:greenZone
                },
                {
                    label:'greenYellow',
                    pointRadius:0,
                    data:greenYellowZone,
                    backgroundColor:'#BBCF4C',
                },
                {
                    label:'yellow',
                    pointRadius:0,
                    data :yellowZone,
                    backgroundColor:'#EEC20B',
                },
                {
                    label:'orange',
                    pointRadius:0,
                    data:orangeZone,
                    backgroundColor:'#F29305',
                },
                {
                    label:'red',
                    pointRadius:0,
                    data:redZone,
                    backgroundColor:'#960018',
                },
            ]
            }  
            this.setState({chartData :chartData})
            return(chartData);
    }

    componentDidMount() {
        this.GetChartData(); 
        
    }
    /**
     * evements qui lorsque on passe d'un onglet à un autre 
     */
    handleChangeYear = () => {
        this.GetYear()
        this.setState({ value :0,
                        onlyOne :true,
                        colorYear :'primary',
                        colorMonth: 'default',
                        colorMonthHidden :'primary',
                        colorWeek: 'default',
                    });
        
      };
      handleChangeMonth = () => {
        this.GetMonth()
        this.setState({ value:1,
                        onlyOne :true,
                        colorYear :'default',
                        colorMonth: 'primary',
                        colorMonthHidden :'primary',
                        colorWeek: 'default',
                    });
        
      };
      handleChangeWeek = () => {
        this.GetWeek()
        this.setState({ value:2,
                        onlyOne:false,
                        colorYear :'default',
                        colorMonth: 'default',
                        colorMonthHidden :'default',
                        colorWeek: 'primary',
                    });
        
      };
    render() { 
        return (
        <div className = 'blocGraph'>
           <div className ='btns-graph'>
                <Hidden smDown>
                <Button 
                variant="contained" 
                color={this.state.colorYear}
                size="large"
                onClick ={this.handleChangeYear}
                >
                Année
                </Button>
                <Button 
                variant="contained" 
                color={this.state.colorMonth}
                size="large"
                onClick ={this.handleChangeMonth}
                >
                Mois
                </Button>
                <Button 
                variant="contained" 
                color={this.state.colorWeek}
                size="large"
                onClick ={this.handleChangeWeek}
                >
                Semaine
                </Button>
            </Hidden>
                <Hidden mdUp >
                <Button 
                variant="contained" 
                color={ this.state.colorMonthHidden}
                size="medium"
                onClick ={this.handleChangeMonth}
                >
                Mois
                </Button>
                <Button 
                variant="contained" 
                color={this.state.colorWeek}
                size="medium"
                onClick ={this.handleChangeWeek}
                >
                Semaine
                </Button>
            </Hidden>
                <div className= 'graphZone'>
                    <div className ='graph-full'>
                        <Hidden smDown>
                        {  <Line key='year-full' data ={this.state.chartData}
                            options={{
                                responsive:true,
                                legend:{
                                    display:false
                                },
                                animation: {
                                    duration: 0,
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 40,
                                        top: 20,
                                        bottom: 0
                                    },
                                },
                                title: {
                                    display: false,
                                    text: 'Indice de Pollution',
                                    fontSize:30,
                                },
                                scales:{
                                    yAxes:[{
                                        ticks :{
                                            fontColor: "black",
                                            beginAtZero:true,
                                            max:10
                                        }
                                    }],
                                    xAxes:[{
                                        ticks :{
                                            fontColor: "black",
                                        }
                                    }]
                                    
                                }          
                            }}
                        />}
                        </Hidden>
                    </div>
                    <div className ='graph'>
                        <Hidden mdUp>
                {(this.state.value === 1||this.state.onlyOne) && <Line key= 'month' data ={this.state.chartData} 
                options={{
                    animation: {
                        duration: 0,
                    },
                    legend:{
                        display:false
                    },
                    title: {
                        display: false,
                        text: 'Indice de Pollution',
                        fontSize:30,
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 40,
                            top: 20,
                            bottom: 0
                        },
                    },
                    
                    scales:{
                        yAxes:[{
                            ticks :{
                                fontColor: "black",
                                beginAtZero:true,
                                max:10
                            }
                        }],
                        xAxes:[{
                        ticks :{
                            fontColor: "black",
                        }
                    }]
                        }          
                    }}
                />}
                {  this.state.value === 2 &&  <Line key='week' data ={this.state.chartData} 
                options={{
                    animation: {
                        duration: 0,
                    },
                    legend:{
                        display:false
                    },
                    title: {
                        display: false,
                        text: 'Indice de Pollution',
                        fontSize:30,
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 40,
                            top: 20,
                            bottom: 0
                        },
                    },
                    scales:{
                        yAxes:[{
                            ticks :{
                                fontColor: "black",
                                beginAtZero:true,
                                max:10
                            }
                        }],
                        xAxes:[{
                        ticks :{
                            fontColor: "black",
                        }
                    }]
                        }          
                    }}
                />}
                </Hidden>
                    </div>
                </div>
            </div> 
        </div>
        );
    }
}
export default HistoriquePollution;