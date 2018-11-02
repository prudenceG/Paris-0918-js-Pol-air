import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const styles = theme => ({
    
});

const ButtonPollution = (props) => {
  const { classes } = props;

  return (
    <div>
      <Button component={Link} to="/HistoriquePollution" variant="fab" mini color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>     
    </div>
  );
}

ButtonPollution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonPollution);