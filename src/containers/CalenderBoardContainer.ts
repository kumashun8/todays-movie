import { Appstate } from 'redux/store';
import { connect } from 'react-redux';
import { InputActions } from 'redux/actions';
import { CalenderBoard } from 'components/CalenderBoard';
import { Dispatch } from 'react';

interface StateAtProps {
  year: number;
  month: number;
}

export type TopPageHandler = {
  handleOnChangeValue(value: string): void;
  handleOnSelectValue(value: string): void;
  handleOnClick(): void;
};

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    year: appState.state.year,
    month: appState.state.month,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): TopPageHandler => {
  return {
    handleOnChangeValue: (value: string) => {
      dispatch(InputActions.updateTextInputValue(value));
    },
    handleOnSelectValue: (value: string) => {
      dispatch(InputActions.updateSelectedValue(value));
    },
    handleOnClick: () => {
      dispatch(InputActions.updateCount());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalenderBoard);
