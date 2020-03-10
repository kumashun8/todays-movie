import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getNow } from 'lib/common';
import { CalenderActions } from 'redux/actions';

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
