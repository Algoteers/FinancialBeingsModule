import gql from 'graphql-tag';

export const eventMinimalInfo = gql`
  fragment EventMinimalInfo on events_Event {
    id
    state
    name
    startDatetime
    finishDatetime
    host {
      alias
      firstName
      lastName
    }
    description
  }
`;

export const eventFullInfo = gql`
  fragment EventFullInfo on events_Event {
    id
    state
    name
    host{
      alias
      firstName
      lastName
    }
    description
    startDatetime
    finishDatetime
    formula{
      name
    }
    plotter{
      name
      host
      repo
      moduleName
    }
    rules{
      position
      title
      description
    }
    participants{
      team{
        name
      }
      botId
      releaseId
    }
    prizes{
      rank
      amount
      additional{
        condition
        amount
        asset
      }
    }
  }
`;
