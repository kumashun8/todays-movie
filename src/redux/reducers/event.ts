import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { EventActions } from 'redux/actions';
import { CalenderElement } from 'lib/calenderElement';

export interface EventState {
  dialogIsOpen: boolean;
  currentElement?: CalenderElement;
  currentDay?: number;
  inputEventValue: string;
}

const initialState: EventState = {
  dialogIsOpen: false,
  inputEventValue: '',
};

export const EventReducer = reducerWithInitialState(initialState)
  .case(EventActions.toggleDialog, state => {
    return { ...state, dialogIsOpen: !state.dialogIsOpen };
  })
  .case(EventActions.updateInputEventValue, (state, inputEventValue) => {
    return { ...state, inputEventValue };
  });
