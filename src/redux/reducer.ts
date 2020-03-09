import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CalenderActions, EventActions } from 'redux/actions';
import { Event } from 'lib/event';
import { CalenderElement } from 'lib/calenderElement';
import { addEventDoc, removeEventDoc, EventDocs } from 'lib/firebase';

export interface StoreData<T> {
  data?: T;
  loading?: boolean;
  error?: any;
}

export interface State {
  year: number;
  month: number;
  events: Array<Event>;
  dialogIsOpen: boolean;
  currentElement?: CalenderElement;
  currentDay?: number;
  inputEventValue: string;
  firestore: StoreData<EventDocs>;
}

export const initialState: State = {
  year: 2020,
  month: 3,
  events: [],
  dialogIsOpen: false,
  inputEventValue: '',
  firestore: {
    loading: false,
  },
};

export const Reducer = reducerWithInitialState(initialState)
  .case(CalenderActions.updateCurrentMonth, (state, { year, month }) => {
    return { ...state, year, month };
  })
  .case(CalenderActions.updateCurrentElement, (state, currentElement) => {
    return { ...state, currentElement };
  })
  .case(CalenderActions.clearCurrentElement, state => {
    return { ...state, currentEvents: null };
  })
  .case(EventActions.fetchEvents.started, state => {
    return { ...state, firestore: { loading: true, error: null } };
  })
  .case(EventActions.fetchEvents.done, (state, payload) => {
    return {
      ...state,
      firestore: { data: payload.result, loading: false, error: null },
    };
  })
  .case(EventActions.fetchEvents.failed, (state, payload) => {
    return { ...state, firestore: { loading: false, error: payload.error } };
  })
  .case(EventActions.addEvent, (state, newEvent) => {
    addEventDoc(newEvent);
    return { ...state, events: [...state.events, newEvent] };
  })
  .case(EventActions.removeEvent, (state, eventId) => {
    const removeIndex = state.events.map(e => e.id).indexOf(eventId);
    state.events.splice(removeIndex, 1);
    removeEventDoc(eventId);
    return { ...state, events: state.events };
  })
  .case(EventActions.toggleDialog, state => {
    return { ...state, dialogIsOpen: !state.dialogIsOpen };
  })
  .case(EventActions.updateInputEventValue, (state, inputEventValue) => {
    return { ...state, inputEventValue };
  });
