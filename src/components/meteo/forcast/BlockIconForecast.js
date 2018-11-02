import React from 'react'

const BlockIconForecast = (props) => {

    return (
        <div>
            <img src={`/img/${props.icon_forecast}.png`} className="MeteoIcon" alt="" />
        </div>
    )
}

export default BlockIconForecast