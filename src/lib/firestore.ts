import 'firebase/firestore';
import { Event } from './event';
import { eventCollection } from 'redux/store';

export function addEventDoc(event: Event): void {
  eventCollection
    .doc(String(event.id))
    .set({
      date: event.date,
      value: event.value,
    })
    .then(() => console.log('Doc successfully added!', event))
    .catch(error => console.log('Error: ', error));
}

export function removeEventDoc(eventId: number): void {
  eventCollection
    .doc(String(eventId))
    .delete()
    .then(() => console.log('Doc successfully deleted!'))
    .catch(error => console.log('Error: ', error));
}
