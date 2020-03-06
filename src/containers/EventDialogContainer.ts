import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { EventActions, CalenderActions } from 'redux/actions';
import { Dispatch } from 'react';
import { EventDialog } from 'components/EventDialog';

interface StateAtProps {
  dialogIsOpen: boolean;
}

export interface EventDialogHandler {
  handleClearCurrentElement(): void;
  handleToggleDialog(): void;
}

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    dialogIsOpen: appState.state.dialogIsOpen,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDialog);
