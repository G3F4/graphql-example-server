import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import ParticipantType from './ParticipantType';
import { getParticipant } from '../../api/fakeApi';

const EventType = new GraphQLObjectType({
  name: 'event',
  description: 'Field describing participant',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Event ID',
      resolve: (root) => root.id
    },
    name: {
      type: GraphQLString,
      description: 'Event name',
      resolve: (root) => root.name
    },
    participants: {
      type: new GraphQLList(ParticipantType),
      description: 'Event participants list',
      resolve: (root) => root.participantsIds.map((id) => getParticipant(id))
    }
  })
});

export default EventType;