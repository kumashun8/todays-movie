import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Event } from './event';
import { Dispatch } from 'react';
import { EventActions } from 'redux/actions';
import { eventCollection } from 'redux/store';

// const fbConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: 'asia-northeast1',
//   projectId: 'todays-movie',
// };

// firebase.initializeApp(fbConfig);

export type EventDocs = firebase.firestore.QuerySnapshot<
  firebase.firestore.DocumentData
>;

// export async function fetchEventDocs(
//   successFunc: (
//     value: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
//   ) => void
// ): Promise<any> {
//   await eventCollection
//     .get()
//     .then(querySnapshot => {
//       successFunc(querySnapshot);
//     })
//     .catch(error => console.log('Error: ', error));
// }

export function fetchEventDocs() {
  return (dispatch: Dispatch<any>) => {
    return new Promise<EventDocs>((resolve, reject) => {
      dispatch(EventActions.fetchEvents.started({ params: {} }));
      eventCollection
        .get()
        .then(querySnapshot => {
          dispatch(
            EventActions.fetchEvents.done({ result: querySnapshot, params: {} })
          );
          resolve(querySnapshot);
        })
        .catch(error => {
          dispatch(
            EventActions.fetchEvents.failed({ error: error, params: {} })
          );
          reject(new Error('...'));
        });
    });
  };
}

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
