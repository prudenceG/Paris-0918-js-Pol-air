import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class ButtonBack extends React.Component {
  render() { 
    return ( 
      <div>
      <IconButton onClick={this.props.method} >
        <ArrowBackIos />
      </IconButton>
    </div>
     );
  }
}

export default ButtonBack;