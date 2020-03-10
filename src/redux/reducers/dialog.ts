import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { DialogActions } from 'redux/actions';

export interface DialogState {
  isOpen: boolean;
  inputEventValue: string;
}

const initialState: DialogState = {
  isOpen: false,
  inputEventValue: '',
};

export const DialogReducer = reducerWithInitialState(initialState)
  .case(DialogActions.toggleDialog, state => {
    return { ...state, isOpen: !state.isOpen };
  })
  .case(DialogActions.updateInputEventValue, (state, inputEventValue) => {
    return { ...state, inputEventValue };
  });
