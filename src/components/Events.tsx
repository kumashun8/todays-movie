import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, useMediaQuery } from '@material-ui/core';
import { EventCounter } from './EventCounter';

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
  large?: boolean;
};

export const Events: React.FC<Props> = props => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:960px)');
  const { events, large = false } = props;

  return isDesktop || large ? (
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
  ) : (
    <div className={classes.counterWrapper}>
      <EventCounter count={events.length} />
    </div>
  );
};
