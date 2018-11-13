import React from 'react';
import { Query } from 'react-apollo';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

import BannerTopBar from '../../BannerTopBar';

import { showEventCalls } from '../../../GraphQL/Calls/index';

class Edit extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BannerTopBar backgroundUrl='https://aacorporatesitedevelop.azurewebsites.net/img/photos/events.jpg' />
        <Typography
          variant='display1'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Enroll in an competition {this.props.match.params.slug}
        </Typography>
        <Query
          query={showEventCalls.EVENTS_EVENT}
          variables={{ eventId: this.props.match.params.slug }}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              <p>
                {data.events_Event.description}
              </p>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Edit);
