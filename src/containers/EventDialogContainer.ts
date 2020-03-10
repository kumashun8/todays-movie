import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { EventActions, CalenderElementActions } from 'redux/actions';
import { Dispatch } from 'react';
import { EventDialog } from 'components/EventDialog';
import { CalenderElement } from 'lib/calenderElement';
import { Action } from 'redux';

interface StateAtProps {
  year: number;
  month: number;
  currentElement?: CalenderElement;
  dialogIsOpen: boolean;
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
    dialogIsOpen: appState.event.dialogIsOpen,
    inputEventValue: appState.event.inputEventValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): EventDialogHandler => {
  return {
    handleClearCurrentElement: () => {
      dispatch(CalenderElementActions.clearCurrentElement());
    },
    handleToggleDialog: () => {
      dispatch(EventActions.toggleDialog());
    },
    handleUpdateInputEventValue: inputEventValue => {
      dispatch(EventActions.updateInputEventValue(inputEventValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDialog);
