import actionCreatorFactory from 'typescript-fsa';
import { Event } from 'lib/event';

const actionCreater = actionCreatorFactory();

export const CalenderActions = {
  updateCurrentMonth: actionCreater<{ year: number; month: number }>(
    'UPDATE_CURRENT_MONTH'
  ),
};
export const EventActions = {
  addEvent: actionCreater<Event>('ADD_EVENT'),
  toggleDialog: actionCreater('TOGGLE_DIALOG'),
};
