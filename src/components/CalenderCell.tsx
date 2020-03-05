import * as React from 'react';
import { CalenderElement } from 'lib/calender';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  event: {
    marginBottom: 2,
    padding: '0 2px',
    backgroundColor: theme.palette.secondary.light,
    '&:nth-child(2n)': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
};

export const CalenderCell: React.FC<Props> = props => {
  const classes2 = useStyles();
  const { element, classes } = props;

  return (
    <div
      className={
        element.isInCurrentMonth
          ? classes.element
          : classes.element + ' ' + classes.out
      }
    >
      <Typography>{element.date}</Typography>
      {element.events &&
        element.events.map((event, i) => (
          <Typography key={i} variant="body2" className={classes2.event}>
            {event}
          </Typography>
        ))}
    </div>
  );
};
