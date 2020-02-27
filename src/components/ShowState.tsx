import * as React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: { padding: 24 },
  title: { marginBottom: 16 },
}));

type Props = {
  inputValue: string;
  selectedValue: string;
  clickCount: number;
};

export const ShowState: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        [state]
      </Typography>
      <Typography>text: {props.inputValue}</Typography>
      <Typography>select: {props.selectedValue}</Typography>
      <Typography>click: {props.clickCount}</Typography>
    </Paper>
  );
};
