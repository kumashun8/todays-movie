import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { InputActions, CalenderActions, EventActions } from 'redux/actions';
import { Event } from 'lib/event';

export interface State {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
  year: number;
  month: number;
  events: Array<Event>;
}

export const initialState: State = {
  inputValue: '',
  selectedValue: '',
  clickCount: 0,
  year: 2020,
  month: 3,
  events: [
    { date: [2020, 3, 6], value: 'マッドマックス' },
    { date: [2020, 3, 6], value: '健康診断' },
    { date: [2020, 3, 15], value: '兄の誕生日' },
    { date: [2020, 3, 25], value: '学位授与の日だったけどなくなった' },
    { date: [2020, 4, 3], value: '入社式' },
  ],
};

export const Reducer = reducerWithInitialState(initialState)
  .case(InputActions.updateTextInputValue, (state, inputValue) => {
    return { ...state, inputValue };
  })
  .case(InputActions.updateSelectedValue, (state, selectedValue) => {
    return { ...state, selectedValue };
  })
  .case(InputActions.updateCount, state => {
    return { ...state, clickCount: state.clickCount + 1 };
  })
  .case(CalenderActions.updateCurrentMonth, (state, { year, month }) => {
    return { ...state, year, month };
  })
  .case(EventActions.addEvent, (state, newEvent) => {
    return { ...state, events: [...state.events, newEvent] };
  });
