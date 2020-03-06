import * as React from 'react';
import { CalenderElement } from 'lib/calenderElement';
import { Typography } from '@material-ui/core';
import { Events } from './Events';

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
};

export const CalenderCell: React.FC<Props> = props => {
  const { element, classes } = props;
  const handleOpenDialog: () => void = () => {
    if (element.isInCurrentMonth) {
      console.log('hi');
    }
  };

  return (
    <div
      className={
        element.isInCurrentMonth
          ? classes.element
          : classes.element + ' ' + classes.out
      }
      onClick={handleOpenDialog}
    >
      <Typography>{element.date}</Typography>
      {element.events.length > 0 && <Events events={element.events} />}
    </div>
  );
};
