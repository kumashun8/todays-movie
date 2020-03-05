import * as React from 'react';
import { CalenderElement } from 'lib/calender';

type Props = {
  element: CalenderElement;
  classes: Record<string, string>;
};

export const CalenderCell: React.FC<Props> = props => {
  const { element, classes } = props;

  return (
    <div
      className={
        element.isInCurrentMonth
          ? classes.element
          : classes.element + ' ' + classes.out
      }
    >
      {element.date}
      {element.events && <p>{element.events}</p>}
    </div>
  );
};
