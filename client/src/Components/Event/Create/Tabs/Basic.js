import React from 'react';
import {
  TextField,
  Button,
  FormGroup,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
} from '@material-ui/icons';
import { DateTimePicker } from 'material-ui-pickers';


import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';


class Basic extends React.Component {
  render() {
    const { classes, event, edit } = this.props;
    return (
      <React.Fragment>
        <Typography className={classes.typography} variant='body1' gutterBottom align='left'>
          These are the basic information you need to input in order to create an event.
          There might be some heavy changes in the near future as the application is still at a very early stage.
        </Typography>

        <TextField
          label='Public id'
          value='Your public ID will be generated automatically'
          className={classes.inputField}
          disabled
        />

        <TextField
          label='Name'
          value={event.name}
          className={classes.inputField}
          onChange={newVal => edit('name', newVal.target.value)}
        />
        <TextField
            multiline
            label='Description'
            value={event.description}
            className={classes.inputField}
            onChange={newVal => edit('description', newVal.target.value)}
          />

        <Typography className={classes.typography} variant='body1' gutterBottom align='left'>
          The dates are purely indicative, as it is important for you to make sure everything is
          ready before manually triggering the beginning and end of the event.
          If you are confident use the scheduler to start it for you(incoming).
        </Typography>

        <FormGroup row className={classes.inputField}>
          <Grid container justify='space-around' >
            <Grid item>
              <DateTimePicker
                autoOk
                disablePast
                format="DD' at 'HH:mm"
                ampm={false}
                showTabs={false}
                leftArrowIcon={<ChevronLeft />}
                rightArrowIcon={<ChevronRight />}
                value={event.startDatetime}
                helperText='Competition start date'
                onChange={newVal => edit('startDatetime', newVal)}
              />
            </Grid>
            <Grid item>
              <DateTimePicker
                autoOk
                disablePast
                format="DD' at 'HH:mm"
                ampm={false}
                showTabs={false}
                leftArrowIcon={<ChevronLeft />}
                rightArrowIcon={<ChevronRight />}
                value={event.finishDatetime}
                helperText='Competition finishing date'
                onChange={newVal => edit('finishDatetime', newVal)}
              />
            </Grid>
          </Grid>
        </FormGroup>
        <Grid container justify='center' >
          <Grid item>
            <Button
              className={classes.bottomButton}
              variant='contained'
              color='secondary'
              onClick={() => edit('value', 1)}
            >
              Go to technical tab
            </Button>
            <Button className={classes.bottomButton} type='submit' variant='contained' color='secondary'>
              Or Create event
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Basic);
