import * as React from 'react';

type Props = {
  index: number;
  element: { date: number; isInCurrentMonth: boolean };
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
    </div>
  );
};
