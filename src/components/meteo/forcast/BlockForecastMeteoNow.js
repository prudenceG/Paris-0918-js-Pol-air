import React from 'react'
import Grid from '@material-ui/core/Grid';

const BlockForecastMeteoNow = (props) => {
    
    return(
    <div className='today-bloc-meteo'>
      <Grid container justify='space-between' alignItems='center' >
        <Grid item xs={5} md={3} >
            <div className='divRound'>
                <div className='blockMeteoNowTemperature'>
                    {props.temperature}<sup className="degre-index">°C</sup>
                </div>
            </div>
        </Grid>
        <Grid item xs={7} md={9} >
            <div>
                <div className="city-all-pages city-meteo" >{props.city}</div>
                <div className="date-all-page" >Aujourd'hui</div>
            </div>
            <div className="comment-all-page">{props.description}</div>
        </Grid>
      </Grid>
    </div>
    )

}
export default BlockForecastMeteoNow