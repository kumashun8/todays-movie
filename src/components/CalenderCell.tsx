import * as React from 'react';
import { CalenderElement } from 'lib/calenderElement';
import { Typography } from '@material-ui/core';
import { Events } from './Events';

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
  handleOpenDialog(element: CalenderElement): void;
};

export const CalenderCell: React.FC<Props> = props => {
  const { element, classes, handleOpenDialog } = props;

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
      <div>
        {element.events.length > 0 && <Events events={element.omittedEvents} />}
      </div>
    </div>
  );
};
