import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

class History extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Typography
        className={classes.title}
        variant='h4'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Your old events (maybe here, maybe not, who knows)
      </Typography>
    );
  }
}

export default withStyles(styles)(History);
