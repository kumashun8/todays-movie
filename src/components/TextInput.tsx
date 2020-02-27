import * as React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: { marginBottom: 16 },
}));

type Props = {
  title: string;
  inputValue: string;
  onChangeValue: Function;
};

export const TextInput: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
