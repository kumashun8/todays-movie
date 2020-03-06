import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { EventActions, CalenderActions } from 'redux/actions';
import { Dispatch } from 'react';
import { EventDialog } from 'components/EventDialog';
import { CalenderElement } from 'lib/calenderElement';
import { Event } from 'lib/event';

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
  handleAddEvent(newEvent: Event): void;
}

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.state.year,
    month: appState.state.month,
    currentElement: appState.state.currentElement,
    dialogIsOpen: appState.state.dialogIsOpen,
    inputEventValue: appState.state.inputEventValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): EventDialogHandler => {
  return {
    handleClearCurrentElement: () => {
      dispatch(CalenderActions.clearCurrentElement());
    },
    handleToggleDialog: () => {
      dispatch(EventActions.toggleDialog());
    },
    handleUpdateInputEventValue: inputEventValue => {
      dispatch(EventActions.updateInputEventValue(inputEventValue));
    },
    handleAddEvent: newEvent => {
      dispatch(EventActions.addEvent(newEvent));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDialog);
