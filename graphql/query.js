import { GraphQLObjectType, GraphQLID, GraphQLNonNull } from 'graphql';

import { getEvent, getParticipant } from '../api/fakeApi';
import EventType from './types/EventType';
import ParticipantType from './types/ParticipantType';

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query data',
  fields: {
    participant: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (root, args) => getParticipant(args.id),
      type: ParticipantType,
    },
    event: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (root, args) => getEvent(args.id),
      type: EventType,
    }
  }
});

export default query;