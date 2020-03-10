import { connect } from 'react-redux';
import {
  CalenderActions,
  DialogActions,
  CalenderElementActions,
} from 'redux/actions';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { CalenderElement } from 'lib/calenderElement';
import { Appstate } from 'redux/store';
import { CalenderBoard } from 'components/CalenderBoard';

interface StateAtProps {
  year: number;
  month: number;
  isOpen: boolean;
}

export interface CalenderBoardHandler {
  handleChangeMonth(value: { year: number; month: number }): void;
  handleSelectElement(currentElement: CalenderElement): void;
  handleToggleDialog(): void;
}

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.calender.year,
    month: appState.calender.month,
    isOpen: appState.dialog.isOpen,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): CalenderBoardHandler => {
  return {
    handleChangeMonth: ({ year, month }) => {
      dispatch(CalenderActions.updateCurrentMonth({ year, month }));
    },
    handleSelectElement: currentEvents => {
      dispatch(CalenderElementActions.updateCurrentElement(currentEvents));
    },
    handleToggleDialog: () => {
      dispatch(DialogActions.toggleDialog());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderBoard);
