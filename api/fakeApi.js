import { participants, events } from './fakeData.json';

const getEvent = (id) => events.find(participant => participant.id === id);
const getParticipant = (id) => participants.find(event => event.id === id);

const addEvent = ({ id, name }) => {
  events.push({ id, name, participantsIds: [] });

  return getEvent(id);
};
const addParticipant = ({ id, name }) => {
  participants.push({ id, name, eventsIds: [], friendsIds: [] });

  return getParticipant(id);
};
const addParticipantToEvent = ({ participantId, eventId }) => {
  const participant = getParticipant(participantId);
  participant.eventsIds.push(eventId);
  getEvent(eventId).participantsIds.push(participantId);

  return participant;
};
const addParticipantFriend = ({ participantId, friendId }) => {
  const participant = getParticipant(participantId);
  participant.friendsIds.push(friendId);
  getParticipant(friendId).friendsIds.push(participantId);

  return participant;
};

export {
  addEvent,
  addParticipant,
  addParticipantToEvent,
  addParticipantFriend,
  getEvent,
  getParticipant
}
