import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { createCalender } from 'lib/calender';

const useStyles = makeStyles(() => ({
  root: {
    padding: 16,
    backgroundColor: '#fafafa',
  },
}));

type Props = {
  year: number;
  month: number;
};

export const CalenderBoard: React.FC<Props> = props => {
  const classes = useStyles();
  const { year, month } = props;

  return (
    <div className={classes.root}>
      <p>
        Now is {year} {month}!
      </p>
      <ul>
        {createCalender(year, month).map((m, i) => (
          <li key={i} style={{ color: m.isInCurrentMonth ? 'red' : 'blue' }}>
            {m.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
