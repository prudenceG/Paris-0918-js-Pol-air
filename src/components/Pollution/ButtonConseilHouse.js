import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    
});

const ButtonPollution = (props) => {
  const { classes } = props;

  return (
    <div>
      <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button}>
      <i onClick={this.handleClickHouse}  className = "material-icons">home</i>
      </Button>     
    </div>
  );
}

ButtonPollution.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonPollution);