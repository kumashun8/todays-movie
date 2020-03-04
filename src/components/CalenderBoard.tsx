import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { createCalender } from 'lib/calender';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    padding: 16,
    backgroundColor: '#fafafa',
  },
  elements: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  element: {
    width: 120,
    height: 80,
  },
  isOut: {
    color: grey[500],
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
      <Typography>{year}</Typography>
      <Typography variant="h1">{month}</Typography>
      <div className={classes.elements}>
        {createCalender(year, month).map((c, i) => (
          <div
            key={i}
            className={
              c.isInCurrentMonth
                ? classes.element
                : classes.element + ' ' + classes.isOut
            }
          >
            {c.date}
          </div>
        ))}
      </div>
    </div>
  );
};
