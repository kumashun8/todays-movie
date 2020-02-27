import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: 16,
    backgroundColor: '#fafafa',
  },
}));

type Props = {
  name: string;
};

export const CalenderBoard: React.FC<Props> = props => {
  const classes = useStyles();
  const { name } = props;

  return (
    <div className={classes.root}>
      <p>Hello, {name}!</p>
    </div>
  );
};
