import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CalenderActions } from 'redux/actions';
import { getNow } from 'lib/common';

export interface CalenderState {
  year: number;
  month: number;
}

const initialState: CalenderState = getNow();

export const CalenderReducer = reducerWithInitialState(initialState).case(
  CalenderActions.updateCurrentMonth,
  (state, { year, month }) => {
    return { ...state, year, month };
  }
);
