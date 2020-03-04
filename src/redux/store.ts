import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { State, Reducer } from 'redux/reducer';
import thunk from 'redux-thunk';

export type Appstate = {
  state: State;
};

const storeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers<Appstate>({
    state: Reducer,
  }),
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
