import actionCreatorFactory from 'typescript-fsa';

const actionCreater = actionCreatorFactory();

export const InputActions = {
  updateTextInputValue: actionCreater<string>('UPDATE_TEXT_INPUT_VALUE'),
  updateSelectedValue: actionCreater<string>('UPDATE_SELECTED_VALUE'),
  updateCount: actionCreater('UPDATE_CLICK_COUNT'),
};
