import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';

type Props = {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
};

export const ShowState: React.FC<Props> = props => {
  return (
    <Paper style={{ padding: 40 }}>
      <Typography variant="h4">[state]</Typography>
      <Typography>text: {props.inputValue}</Typography>
      <Typography>select: {props.selectedValue}</Typography>
      <Typography>click: {props.clickCount}</Typography>
    </Paper>
  );
};
