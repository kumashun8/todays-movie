import * as React from 'react';
import { CalenderElement } from 'lib/calenderElement';
import { Typography, useMediaQuery, makeStyles } from '@material-ui/core';
import { Events } from './Events';
import { EventCounter } from './EventCounter';

const useStyles = makeStyles(() => ({
  rest: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 4,
  },
}));

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
  handleOpenDialog(element: CalenderElement): void;
};

export const CalenderCell: React.FC<Props> = props => {
  const { element, classes, handleOpenDialog } = props;
  const classes2 = useStyles();
  const isDesktop = useMediaQuery('(min-width:960px)');
  const length = element.events.length;

  return (
    <div
      className={
        element.isInCurrentMonth
          ? classes.element
          : classes.element + ' ' + classes.out
      }
      onClick={() => handleOpenDialog(element)}
    >
      <Typography>{element.date}</Typography>
      {isDesktop ? (
        <div>
          {length > 0 && <Events events={element.omittedEvents.splice(0, 2)} />}
          {length > 2 && (
            <div className={classes2.rest}>
              <Typography variant="subtitle2">{`+${length - 2}`}</Typography>
            </div>
          )}
        </div>
      ) : (
        <div className={classes.counterWrapper}>
          <EventCounter count={length} />
        </div>
      )}
    </div>
  );
};
