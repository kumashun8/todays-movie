import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { CalenderActions } from 'redux/actions';
import { CalenderBoard } from 'components/CalenderBoard';
import { Dispatch } from 'react';

interface StateAtProps {
  year: number;
  month: number;
}

export type CalenderBoardHandler = {
  handleChangeMonth(value: { year: number; month: number }): void;
};

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.state.year,
    month: appState.state.month,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): CalenderBoardHandler => {
  return {
    handleChangeMonth: ({ year, month }) => {
      dispatch(CalenderActions.updateCurrentMonth({ year, month }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderBoard);
