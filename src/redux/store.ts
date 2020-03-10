import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { State, Reducer } from 'redux/reducer';
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export type Appstate = {
  state: State;
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

firebase.initializeApp(fbConfig);
const db = firebase.firestore();
export const eventCollection = db.collection('events');

const store = createStore(
  combineReducers<Appstate>({
    state: Reducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
);

const rrfConfig = {
  userProfile: 'users',
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
