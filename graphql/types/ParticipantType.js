import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import EventType from './EventType';
import { getEvent, getParticipant } from '../../api/fakeApi';

const ParticipantType = new GraphQLObjectType({
  name: 'participant',
  description: 'Field declaring participant',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'Participant ID',
      resolve: (root) => root.id
    },
    name: {
      type: GraphQLString,
      description: 'Participant name',
      resolve: (root) => root.name
    },
    friends: {
      type: new GraphQLList(ParticipantType),
      description: 'Participant friends list',
      resolve: (root) => root.friendsIds.map(id => getParticipant(id))
    },
    events: {
      type: new GraphQLList(EventType),
      description: 'Participant events list',
      resolve: (root) => root.eventsIds.map(id => getEvent(id))
    }
  })
});

export default ParticipantType;