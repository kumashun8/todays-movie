import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  event: {
    marginTop: 2,
    padding: '0 2px',
    color: '#030303',
    backgroundColor: theme.palette.secondary.light,
  },
  counterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
}));

type Props = {
  events: string[];
  eventIds?: number[];
  large?: boolean;
};

export const Events: React.FC<Props> = props => {
  const classes = useStyles();
  const { events, eventIds = [], large = false } = props;

  return (
    <div>
      {events.map((event, i) => (
        <Typography
          key={i}
          variant={large ? 'body1' : 'body2'}
          className={classes.event}
        >
          {event}
        </Typography>
      ))}
    </div>
  );
};
