import * as React from 'react';
import { makeStyles, Typography, StyledProps } from '@material-ui/core';
import { Calender } from 'lib/calender';
import { grey, red, indigo } from '@material-ui/core/colors';
import { CalenderCell } from './CalenderCell';
import { CalenderHead } from './CalenderHead';
import { CalenderBoardHandler } from 'containers/CalenderBoardContainer';
import { Event } from 'lib/event';
import { DAYS_OF_WEEK } from 'lib/common';
import { CalenderElement } from 'lib/calenderElement';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px 0 32px',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  elements: {
    width: '70vw',
    display: 'flex',
    flexWrap: 'wrap',
    border: `0.5px solid ${grey[300]}`,
    borderStyle: 'solid none none solid',
    [theme.breakpoints.down('sm')]: {
      width: '91vw',
    },
  },
  element: {
    width: '10vw',
    height: 96,
    padding: 2,
    boxSizing: 'border-box',
    border: `0.5px solid ${grey[300]}`,
    cursor: 'pointer',
    borderStyle: 'none solid solid none',
    [theme.breakpoints.down('sm')]: {
      width: '13vw',
      height: 80,
    },
  },
  out: { color: grey[500] },
  dayOfWeek: {
    height: 32,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    backgroundColor: grey[200],
    '&:first-child': {
      color: grey[200],
      backgroundColor: theme.palette.primary.light,
    },
    '&:last-child': {
      color: grey[200],
      backgroundColor: theme.palette.primary.light,
    },
  },
  sunDay: { backgroundColor: red[100] },
  saturDay: { backgroundColor: indigo[100] },
}));

interface OwnProps {
  year: number;
  month: number;
  events: Array<Event>;
}

type Props = OwnProps & CalenderBoardHandler;

export const CalenderBoard: React.FC<Props> = props => {
  const classes = useStyles({} as StyledProps);
  const {
    year,
    month,
    events,
    handleChangeMonth,
    handleSelectElement,
    handleToggleDialog,
  } = props;
  const calender = Calender.getInstance(year, month, events);
  const handleChangeToPrevMonth: () => void = () => {
    handleChangeMonth(calender.prevMonth());
  };
  const handleChangeToNextMonth: () => void = () => {
    handleChangeMonth(calender.nextMonth());
  };
  const handleOpenDialog: (element: CalenderElement) => void = element => {
    if (element.isInCurrentMonth) {
      handleSelectElement(element);
      handleToggleDialog();
    }
  };

  return (
    <div className={classes.root}>
      <CalenderHead
        {...{ ...props, handleChangeToPrevMonth, handleChangeToNextMonth }}
      />
      <div className={classes.elements + ' ' + classes.dayOfWeek}>
        {DAYS_OF_WEEK.map((d, i) => (
          <div key={i} className={classes.element + ' ' + classes.dayOfWeek}>
            <Typography>{d}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.elements}>
        {calender.calenderElements.map((element, i) => (
          <div key={i}>
            <CalenderCell {...{ element, classes, handleOpenDialog }} />
          </div>
        ))}
      </div>
    </div>
  );
};
