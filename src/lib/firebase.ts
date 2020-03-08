import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Event } from './event';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'asia-northeast1',
  projectId: 'todays-movie',
});

const db = firebase.firestore();
const eventCollection = db.collection('events');

export function addEventDoc(event: Event): void {
  eventCollection
    .doc(String(event.id))
    .set({
      date: event.date,
      value: event.value,
    })
    .then(() => console.log('Doc successfully added!'))
    .catch(error => console.log('Error: ', error));
}

export function removeEventDoc(eventId: number): void {
  eventCollection
    .doc(String(eventId))
    .delete()
    .then(() => console.log('Doc successfully deleted!'))
    .catch(error => console.log('Error: ', error));
}
