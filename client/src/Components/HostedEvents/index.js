import React from 'react';
import { Query } from 'react-apollo';

import BannerTopBar from '../BannerTopBar';

import { hostedEventsCalls } from '../../GraphQL/Calls/index';

import Event from './Event';

const HostedEvent = () => (
  <React.Fragment>
    <BannerTopBar
      size='medium'
      title='Your hosted events'
      text='You are one of the pillars of this community, thank you'
      backgroundUrl='https://aacorporatesitedevelop.azurewebsites.net/img/photos/events.jpg'
    />
    <Query
      query={hostedEventsCalls.EVENTS_EVENTSBYHOST}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const list = data.events_EventsByHost.map((event, index) => (
          <Event key={index} event={event} />
        ));
        return (
          <React.Fragment>
            { list }
          </React.Fragment>
        );
      }}
    </Query>
  </React.Fragment>
);


export default HostedEvent;
