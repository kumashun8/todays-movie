import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CalenderActions, EventActions } from 'redux/actions';
import { CalenderElement } from 'lib/calenderElement';
import { addEventDoc, removeEventDoc } from 'lib/firebase';

export interface State {
  year: number;
  month: number;
  dialogIsOpen: boolean;
  currentElement?: CalenderElement;
  currentDay?: number;
  inputEventValue: string;
}

export const initialState: State = {
  year: 2020,
  month: 3,
  dialogIsOpen: false,
  inputEventValue: '',
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
  .case(EventActions.toggleDialog, state => {
    return { ...state, dialogIsOpen: !state.dialogIsOpen };
  })
  .case(EventActions.updateInputEventValue, (state, inputEventValue) => {
    return { ...state, inputEventValue };
  });
