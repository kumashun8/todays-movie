import actionCreatorFactory from 'typescript-fsa';
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
  toggleDialog: actionCreater('TOGGLE_DIALOG'),
  updateInputEventValue: actionCreater<string>('UPDATE_INPUT_EVENT_VALUE'),
};
