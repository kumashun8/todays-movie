import * as React from 'react';
import { TopPageHandler } from 'containers/TopPageContainer';
import { RadioInput } from './RadioInput';
import { SubmitButton } from './SubmitButton';
import { TextInput } from './TextInput';
import { FormControl, Grid } from '@material-ui/core';
import { ShowState } from './ShowState';

type OwnProps = {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
};

type Props = OwnProps & TopPageHandler;

export const TopPage: React.FC<Props> = props => {
  const {
    inputValue,
    selectedValue,
    clickCount,
    handleOnChangeValue,
    handleOnSelectValue,
    handleOnClick,
  } = props;

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={4}>
          <FormControl>
            <TextInput
              title="入力"
              inputValue={inputValue}
              onChangeValue={handleOnChangeValue}
            />
            <RadioInput
              title="選択"
              selectedValue={selectedValue}
              onChangeValue={handleOnSelectValue}
            />
            <SubmitButton title="Click me!" onClick={handleOnClick} />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <ShowState {...{ inputValue, selectedValue, clickCount }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
