import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { CalenderElement } from 'lib/calenderElement';
import { Appstate } from 'redux/store';
import { EventDialog } from 'components/EventDialog';

import { DialogActions, CalenderElementActions } from 'redux/actions';

interface StateAtProps {
  year: number;
  month: number;
  currentElement?: CalenderElement;
  isOpen: boolean;
  inputEventValue: string;
}

export interface EventDialogHandler {
  handleClearCurrentElement(): void;
  handleToggleDialog(): void;
  handleUpdateInputEventValue(inputEventValue: string): void;
  handleClearInputEventValue(): void;
}

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.calender.year,
    month: appState.calender.month,
    currentElement: appState.calenderElement.currentElement,
    isOpen: appState.dialog.isOpen,
    inputEventValue: appState.dialog.inputEventValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): EventDialogHandler => {
  return {
    handleClearCurrentElement: () => {
      dispatch(CalenderElementActions.clearCurrentElement());
    },
    handleToggleDialog: () => {
      dispatch(DialogActions.toggleDialog());
    },
    handleUpdateInputEventValue: inputEventValue => {
      dispatch(DialogActions.updateInputEventValue(inputEventValue));
    },
    handleClearInputEventValue: () => {
      dispatch(DialogActions.clearInputEventValue());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDialog);
