import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import OpenMenu from './OpenMenu'
import Logo_PolAir_Blanc from '../img/Logo_PolAir_Blanc.svg';
import './NavBar.css';
import { Link } from 'react-router-dom'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <OpenMenu openAccueil={props.accueil} openForeCastMeteo={props.forecastmeteo} openHistoriquePollution ={props.historiquePollution} />
          <Link to="/" className="logo">
            <img src={Logo_PolAir_Blanc} alt="Pol'Air" className="logo"/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
