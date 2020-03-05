import * as React from 'react';
import { CalenderElement } from 'lib/calender';

type Props = {
  index: number;
  element: CalenderElement;
  classes: Record<string, string>;
};

export const CalenderCell: React.FC<Props> = props => {
  const { index, element, classes } = props;

  return (
    <div
      key={index}
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
