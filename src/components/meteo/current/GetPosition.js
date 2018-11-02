import React from 'react';
import CurrentMeteo from './CurrentMeteo';


class GetPosition extends React.Component{

  state = {
    city: undefined,
    arrondissement: undefined,
    region: undefined,
    pays: undefined,
    Loading: true,
    Show : false,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( (position) => {
    const latitude =  position.coords.latitude;
    const longitude =  position.coords.longitude;
    if(latitude && longitude){
      fetch(`https://eu1.locationiq.com/v1/reverse.php?key=311b5ecb2cf7bc&lat=${latitude}&lon=${longitude}&format=json`)
      .then(res => res.json())

      .then(response => this.setState({city: response.address.city, arrondissement: response.address.postcode, region : response.address.state, pays: response.address.country, Loading: false}))
    }
  })
}

  render() {
    if(this.state.Loading)
        return <div>Loading...</div>

        return(
     <div>
         <h1>{this.state.city}</h1>
        <CurrentMeteo city={this.state.city}/>
      </div>
    )
  }
}


export default GetPosition;
