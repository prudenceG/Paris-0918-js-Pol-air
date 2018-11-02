import React from "react";
import './Icon.css';


const Icon =({icon}) => {
    return(
      <div>
        <img className="icon-meteo" src={`/img/${icon}.png`} alt=""></img>
      </div>
    )
  }


export default Icon;
