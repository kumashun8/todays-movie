import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, useMediaQuery } from '@material-ui/core';
import { EventCounter } from './EventCounter';

const useStyles = makeStyles(theme => ({
  event: {
    marginTop: 2,
    padding: '0 2px',
    backgroundColor: theme.palette.secondary.light,
    '&:nth-child(2n)': {
      color: '#fafafa',
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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
};

export const Events: React.FC<Props> = props => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:960px)');
  const { events } = props;

  return (
    <div>
      {isDesktop ? (
        events.map((event, i) => (
          <Typography key={i} variant="body2" className={classes.event}>
            {event}
          </Typography>
        ))
      ) : (
        <div className={classes.counterWrapper}>
          <EventCounter count={events.length} />
        </div>
      )}
    </div>
  );
};
