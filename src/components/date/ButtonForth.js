import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

class ButtonForth extends React.Component {
  render() { 
    return ( 
      <div>
      <IconButton onClick={this.props.method} >
        <ArrowForwardIos />
      </IconButton>
    </div>
     );
  }
}

export default ButtonForth;