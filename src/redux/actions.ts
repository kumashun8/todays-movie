import actionCreatorFactory from 'typescript-fsa';
import { Event } from 'lib/event';
import { CalenderElement } from 'lib/calenderElement';

const actionCreater = actionCreatorFactory();

export const CalenderActions = {
  updateCurrentMonth: actionCreater<{ year: number; month: number }>(
    'UPDATE_CURRENT_MONTH'
  ),
  updateCurrentElement: actionCreater<CalenderElement>(
    'UPDATE_CURRENT_ELEMENT'
  ),
  clearCurrentElement: actionCreater('CLEAR_CURRENT_ELEMENT'),
};
export const EventActions = {
  addEvent: actionCreater<Event>('ADD_EVENT'),
  toggleDialog: actionCreater('TOGGLE_DIALOG'),
};
