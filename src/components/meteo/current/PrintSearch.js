import React from "react";


const PrintSearch = ({city,temperature,description,humidityText,humidity,pourcentage,icon,degre}) => {
    return (
      <div>
        <p>{city}</p>
        <p>{temperature}{degre}</p>
        <p>{description}</p>
        <p>{humidityText}{humidity}{pourcentage}</p>
        <p>{icon}</p>
      </div>
    )
}

export default PrintSearch;