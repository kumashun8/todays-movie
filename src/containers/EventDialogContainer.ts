import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { DialogActions, CalenderElementActions } from 'redux/actions';
import { Dispatch } from 'react';
import { EventDialog } from 'components/EventDialog';
import { CalenderElement } from 'lib/calenderElement';
import { Action } from 'redux';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDialog);
