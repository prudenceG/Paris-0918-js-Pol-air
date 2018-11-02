import React from "react";
import PagePollution from "./components/Pollution/PagePollution";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BlockForcastMeteo from './components/meteo/forcast/BlockForcastMeteo'
import './form.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/meteo/Home'

import Footer from "./components/Footer";
import Page404 from './components/Page404';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      backgroundColor: 'white',
      opacity: 0.5,
      borderRadius: 5,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        height: 55,
        marginTop: 16,
    },
    input: {
    display: 'none',
    },
  });

//const normalizecity = [city, city_district, locality, town, borough, municipality, village, hamlet, quarter, neighbourhood]

// Clés API
const api_Key_Current_Weather = "588b34ef0ccd1ce25e0cd600e9e852fb";
//588b34ef0ccd1ce25e0cd600e9e852fb -- clef de Delph
//0f53c26a9c88a54d8706c8b3c9d2b880 -- clef de quelqu'un

const api_Key_Current_Pol = "Wu8scKsgzFQ8Md6Jv";
// AgM8MuxtXNcfwPrHN -- clef guillaume
// ehvBN549ec3xDmbbW -- clef prudence
// fJ75xRvQChZAzF7qo -- clef Delph
// Wu8scKsgzFQ8Md6Jv -- Clef Samir
// 5tzeyxRv5omhmxG6P -- Clef paolo1
// K7ozT4wzfP89xvNDj -- Clef paolo2 
// FSirY4x7sshw6meaw -- Clef paolo3


//Api Forecast

const key = "588b34ef0ccd1ce25e0cd600e9e852fb"
const unit = 'metric'
const lang = 'fr'
const url = 'http://api.openweathermap.org/data/2.5/forecast?q='

// CLASS //////////////////////////////////////////////////////////////
class Form extends React.Component{
    
    // state
    state ={
        value: undefined,
        temperature: undefined,
        city: undefined,
        humidityText: undefined,
        humidity: undefined,
        pourcentage: undefined,
        description: undefined,
        icon : undefined,
        degre : null,
        dataPol:undefined,
        error: undefined,
        loaded :false,
        tempMax: [],
        tempMin : [],
        icon_forecast : undefined,
        loading: true, // permet de mettre en attente le chargement du background 
        imgBackground: undefined
    }
    
    // Fetch Geoloc via IP
    getLoc = async (e) => {
        navigator.geolocation.getCurrentPosition(  (position) => {
            const latitude =  position.coords.latitude;
            const longitude =  position.coords.longitude;
            //mettre a jour les states apres la recuperation des lat et long
            this.setState({loaded :true});
            ///si loaded = true lance le fetch pour recuperer le nom de la ville 
            ///pour eviter de lancer le fetch  meteo avant la fin du fetch recuparation ville 
            ///j'ai créer la fonction GetMetoePollution que j'ai appellé apres la recuperation des infos ville
            if(this.state.loaded){
                fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
                .then(res => res.json())
                .then(response => this.GetMeteoPollution(this.getCity(response.address),latitude,longitude) );
            }
        })  
    } 
    getCity(address){
        if(address.city !== undefined)
            return(address.city);
        else if(address.city_district !== undefined)
            return(address.city_district);
        else if(address.locality !== undefined)
            return(address.locality);
        else if(address.town !== undefined)
            return(address.town);
        else if(address.borough !== undefined)
            return(address.borough);
        else if(address.municipality !== undefined)
            return(address.municipality);
        else if(address.village !== undefined)
            return(address.village);
        else if(address.hamlet !== undefined)
            return(address.hamlet);
        else if(address.quarter !== undefined)
            return(address.quarter);
        else if(address.neighbourhood !== undefined)
            return(address.neighbourhood);
    } 
    //methode GetMeteoPollution qui lance le fetch de meteo et la pollution
    GetMeteoPollution = async (city,latitude,longitude) =>{ 
        const units = "&units=metric";
        const lang = "&lang=fr";
        //fetch meteo
        let getFetchMeteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
        const dataMeteo = await getFetchMeteo.json();
        this.setState({
            temperature : Math.floor(dataMeteo.main.temp),
            city: dataMeteo.name,
            humidityText : "Humidité",
            humidity:dataMeteo.main.humidity,
            pourcentage: "%",
            description: dataMeteo.weather[0].description,
            icon : dataMeteo.weather[0].icon, //sert à afficher l'icone et le background.
            imgBackground: dataMeteo.weather[0].icon, //sert à afficher le background.
            degre : "C°",
            loading: false,
            error: ""
            })
        //fetch pollution
        let getFetchPollution = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${api_Key_Current_Pol}`);
        const dataPollution = await getFetchPollution.json();       
        this.setState({ dataPol : dataPollution.data.current.pollution.aqius })  
        
        //**fetch forcatMeteo */
        this.getForecastMeteo(city)
    } 

    // Fetch SearchBar
    getData = async (e) => {
        let city = this.state.value;
        const units = "&units=metric";
        const lang = "&lang=fr";
        e.preventDefault();// eviter que la page se recharge  a chaque recherche.
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${units}${lang}&APPID=${api_Key_Current_Weather}`);
        const data = await api_call.json();
        if(api_call.ok){
            const api_call_pol = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${data.coord.lat}&lon=${data.coord.lon}&key=${api_Key_Current_Pol}`);
            const data_pol = await api_call_pol.json();
            if(api_call_pol.ok) {
            // setState
        this.setState({
            temperature : Math.floor(data.main.temp),
            temp_min : data.main.temp_min,
            temp_max : data.main.temp_max,
            city: data.name,
            humidityText : "Humidité",
            humidity: data.main.humidity,
            pourcentage : "%",
            description: data.weather[0].description,
            icon : data.weather[0].icon,
            degre : "C°",
            dataPol : data_pol.data.current.pollution.aqius,
            imgBackground: data.weather[0].icon,
            loading : false,
            error: ""
        })
        this.getForecastMeteo(city)
    }
}
else {
    this.setState({error : "Ville non reconnue"});
    alert("Veuillez verifier votre saisie !");
    e.preventDefault();
}
    }

    //Fetch ForecastMeteo
    getForecastMeteo = (city) => {
      axios.get(`${url}${city}&lang=${lang}&APPID=${key}&units=${unit}`)
            .then(res => {
              let temp_min = []
              let temp_max = []
              let iconForecast = []
              for (let i = 1; i <= 4; i++) {
                let temperature_min = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                temp_min.push(Math.floor(Math.min(...temperature_min.map(x=> x.main.temp_min))))
      
                let temperature_max = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                temp_max.push(Math.floor(Math.max(...temperature_max.map(x=> x.main.temp_max))))

                let icone_forecast = res.data.list.filter((x) => x.dt >= this.getDate(i)  &&  x.dt <= this.getDateAddOne(i))
                iconForecast.push(Math.max(...icone_forecast.map(x=> x.weather[0].icon).slice(3,6).map(x => parseInt(x.slice(0,2), 10))))

              }
                iconForecast = iconForecast.map(x => x < 10 ? ("0" + x + "d") : (x + "d"))             
              
              this.setState({
                tempMin : temp_min,
                tempMax: temp_max,
                icon_forecast : iconForecast
            })
            
            })
      
        }

        getDateAddOne(day) {
            const n = this.getDate(day) + 86400
            return n
        }
        
        getDate(day) {
            let d = new Date();
            let n = d.getTime() % 86400000
            let test = d.setTime(((d.getTime()-n)/1000)+86400*day)
            return test
        }
        

    //Fin Fetch ForecastMeteo

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    
    componentDidMount(){
        //lance la methode getloc
        this.getLoc()
    }

    ///link en variable
    Accueil = props => <Link to="/" {...props} />
    BlockForcastMeteo = props => <Link to="/BlockForcastMeteo" {...props} /> 
    pollution = props => <Link to="/HistoriquePollution" {...props} /> 

  // RENDER ////////////////////////////////////////////////////////////
  render() {
    const { classes } = this.props;
    return (
    <BrowserRouter>
            <div>
            <NavBar accueil={this.Accueil} forecastmeteo={this.BlockForcastMeteo}  historiquePollution ={this.pollution}/>
            <form className="{classes.container} form-center" noValidate autoComplete="off" onSubmit ={this.getData}>
                <TextField
                    id="outlined-search"
                    label="Votre ville"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                />
                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                    Rechercher
                </Button>
            </form>
            <Switch>
            <Route  exact path="/" render={(props)=>
                <div>
                    <Home {...this.state}/>
                </div>
            }/>
                <Route path="/BlockForcastMeteo" render={props =>
                    <div>
                        <BlockForcastMeteo {...this.state}/>
                    </div>
                } />            
                <Route exact path="/HistoriquePollution" render ={props => 
                    <div>
                        < PagePollution 
                            city={this.state.city} 
                            indice={this.state.dataPol} 
                            imgBackground={this.state.imgBackground} 
                            loading={this.state.loading}
                            {...this.state} />
                    </div>
                }/>
                <Route exact path="/*" render={(props)=><Page404 />}/>
                <Route exact path="/BlockForcastMeteo/*" render={(props)=><Page404 />}/>
                <Route exact path="/HistoriquePollution/*" render={(props)=><Page404 />}/>
            </Switch>
            <Footer />
            </div>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(Form);
