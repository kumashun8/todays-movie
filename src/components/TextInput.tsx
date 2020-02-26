import * as React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  title: string;
  inputValue: string;
  onChangeValue: Function;
};

export const TextInput: React.FC<Props> = props => {
  return (
    <div>
      <TextField
        variant="outlined"
        label={props.title}
        onChange={e => {
          const element = e.target as HTMLInputElement;
          props.onChangeValue(element.value);
        }}
      />
    </div>
  );
};
