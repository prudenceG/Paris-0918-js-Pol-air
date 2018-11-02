import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
  

const ButtonsPolluants = (props)  => {
  const { classes } = props;
  return (
    <div>   
        <Button color="primary" variant="contained" className={classes.button}>
            NO2
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
            PM10
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
            PM2.5
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
            O3
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
            SO2
        </Button>
        <Button color="primary" variant="contained" className={classes.button}>
            CO
        </Button>    
    </div>
  );
}

ButtonsPolluants.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonsPolluants);