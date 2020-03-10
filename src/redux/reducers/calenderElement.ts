import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CalenderElementActions } from 'redux/actions';
import { CalenderElement } from 'lib/calenderElement';

export interface CalenderElementState {
  currentElement?: CalenderElement;
}

const initialState = {};

export const CalenderElementReducer = reducerWithInitialState(initialState)
  .case(
    CalenderElementActions.updateCurrentElement,
    (state, currentElement) => {
      return { ...state, currentElement };
    }
  )
  .case(CalenderElementActions.clearCurrentElement, state => {
    return { ...state, currentElement: null };
  });
