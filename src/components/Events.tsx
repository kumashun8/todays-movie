import * as React from 'react';
import { makeStyles, IconButton, Grid, Typography } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  eventWrapper: {
    backgroundColor: theme.palette.secondary.light,
    marginTop: 2,
  },
  event: {
    padding: '0 2px',
    color: '#030303',
  },
  removeButton: {
    padding: 2,
    color: '#fafafa',
    [theme.breakpoints.down('xs')]: {
      marginLeft: -16,
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
  eventIds?: number[];
  large?: boolean;
  handleRemove?(eventId: number): void;
};

type SubProps = {
  event: string;
  i: number;
};

export const Events: React.FC<Props> = props => {
  const classes = useStyles();
  const { events, eventIds = [], large = false, handleRemove } = props;
  const handleRemoveSafety: (eventId: number) => void = (eventId: number) => {
    if (handleRemove) {
      handleRemove(eventId);
    }
  };

  const Event: React.FC<SubProps> = props => (
    <Grid
      container
      className={classes.eventWrapper}
      justify="flex-end"
      alignItems="center"
    >
      <Grid item xs={large ? 11 : 12}>
        <Typography
          variant={large ? 'body1' : 'body2'}
          className={classes.event}
        >
          {props.event}
        </Typography>
      </Grid>
      {large && (
        <Grid item xs={1}>
          <IconButton
            onClick={() => handleRemoveSafety(eventIds[props.i])}
            className={classes.removeButton}
          >
            <Cancel fontSize="small" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );

  return (
    <div>
      {events.map((event, i) => (
        <Event key={i} {...{ event, i }} />
      ))}
    </div>
  );
};
