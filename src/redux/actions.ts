import actionCreatorFactory from 'typescript-fsa';
import { Event } from 'lib/event';

const actionCreater = actionCreatorFactory();

export const InputActions = {
  updateTextInputValue: actionCreater<string>('UPDATE_TEXT_INPUT_VALUE'),
  updateSelectedValue: actionCreater<string>('UPDATE_SELECTED_VALUE'),
  updateCount: actionCreater('UPDATE_CLICK_COUNT'),
};

export const CalenderActions = {
  updateCurrentMonth: actionCreater<{ year: number; month: number }>(
    'UPDATE_CURRENT_MONTH'
  ),
};

export const EventActions = {
  addEvent: actionCreater<Event>('ADD_EVENT'),
};
