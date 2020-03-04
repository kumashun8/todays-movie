import { Appstate } from '../redux/store';
import { Dispatch } from 'react';
import { InputActions } from 'redux/actions';
import { connect } from 'react-redux';
import { TopPage } from 'components/TopPage';

export type TopPageHandler = {
  handleOnChangeValue(value: string): void;
  handleOnSelectValue(value: string): void;
  handleOnClick(): void;
};

type StateAtProps = {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
};

const mapStateToProps = (appState: Appstate): StateAtProps => {
  return {
    inputValue: appState.state.inputValue,
    selectedValue: appState.state.selectedValue,
    clickCount: appState.state.clickCount,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
