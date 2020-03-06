import * as React from 'react';
import { CalenderElement } from 'lib/calenderElement';
import { Typography } from '@material-ui/core';
import { Events } from './Events';

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
  handleToggleDialog(): void;
};

export const CalenderCell: React.FC<Props> = props => {
  const { element, classes, handleToggleDialog } = props;
  const handleOpenDialog: () => void = () => {
    if (element.isInCurrentMonth) {
      handleToggleDialog();
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
