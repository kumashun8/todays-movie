import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CalenderActions, EventActions } from 'redux/actions';
import { Event } from 'lib/event';

export interface State {
  year: number;
  month: number;
  events: Array<Event>;
  dialogIsOpen: boolean;
  currentEvents: string[];
}

export const initialState: State = {
  year: 2020,
  month: 3,
  events: [
    { date: [2020, 3, 6], value: 'マッドマックス' },
    { date: [2020, 3, 6], value: '健康診断' },
    { date: [2020, 3, 15], value: '兄の誕生日' },
    { date: [2020, 3, 25], value: '学位授与の日だったけどなくなった' },
    { date: [2020, 4, 3], value: '入社式' },
  ],
  dialogIsOpen: false,
  currentEvents: [],
};

export const Reducer = reducerWithInitialState(initialState)
  .case(CalenderActions.updateCurrentMonth, (state, { year, month }) => {
    return { ...state, year, month };
  })
  .case(CalenderActions.updateCurrentEvents, (state, currentEvents) => {
    return { ...state, currentEvents };
  })
  .case(CalenderActions.clearCurrentEvents, state => {
    return { ...state, currentEvents: [] };
  })
  .case(EventActions.addEvent, (state, newEvent) => {
    return { ...state, events: [...state.events, newEvent] };
  })
  .case(EventActions.toggleDialog, state => {
    return { ...state, dialogIsOpen: !state.dialogIsOpen };
  });
