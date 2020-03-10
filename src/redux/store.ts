import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { CalenderState, CalenderReducer } from './reducers/calender';
import { DialogState, DialogReducer } from './reducers/dialog';
import {
  CalenderElementState,
  CalenderElementReducer,
} from './reducers/calenderElement';

export type Appstate = {
  calender: CalenderState;
  calenderElement: CalenderElementState;
  dialog: DialogState;
  firebase: FirebaseReducer.Reducer<{}, {}>;
  firestore: any;
};

const storeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'asia-northeast1',
  projectId: 'todays-movie',
};
const rrfConfig = {
  userProfile: 'users',
};

firebase.initializeApp(fbConfig);
const db = firebase.firestore();
export const eventCollection = db.collection('events');

const store = createStore(
  combineReducers<Appstate>({
    calender: CalenderReducer,
    calenderElement: CalenderElementReducer,
    dialog: DialogReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
