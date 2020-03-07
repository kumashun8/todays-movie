import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { CalenderActions, EventActions } from 'redux/actions';
import { CalenderBoard } from 'components/CalenderBoard';
import { Dispatch } from 'react';
import { Event } from 'lib/event';
import { CalenderElement } from 'lib/calenderElement';
import { Action } from 'redux';

interface StateAtProps {
  year: number;
  month: number;
  events: Array<Event>;
  dialogIsOpen: boolean;
}

export interface CalenderBoardHandler {
  handleChangeMonth(value: { year: number; month: number }): void;
  handleSelectElement(currentElement: CalenderElement): void;
  handleToggleDialog(): void;
}

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.state.year,
    month: appState.state.month,
    events: appState.state.events,
    dialogIsOpen: appState.state.dialogIsOpen,
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
      dispatch(CalenderActions.updateCurrentElement(currentEvents));
    },
    handleToggleDialog: () => {
      dispatch(EventActions.toggleDialog());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderBoard);
