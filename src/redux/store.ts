import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { State, Reducer } from 'redux/reducer';
import {
  firebaseReducer,
  firestoreReducer,
  createFirebaseInstance,
} from 'react-redux-firebase';
import thunk from 'redux-thunk';
import * as firebase from 'firebase/app';

export type Appstate = {
  state: State;
  firebase: any;
  firestore: any;
};

const storeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
  createFirebaseInstance,
};

export default store;
