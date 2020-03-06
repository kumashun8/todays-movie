import * as React from 'react';
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { EventDialogHandler } from 'containers/EventDialogContainer';
import { CalenderElement } from 'lib/calenderElement';
import { Events } from './Events';
import { DAYS_OF_WEEK } from 'lib/common';
import { Event } from 'lib/event';

const useStyles = makeStyles(() => ({
  dayOfWeek: {
    fontSize: 24,
    marginLeft: 16,
  },
}));

interface OwnProps {
  year: number;
  month: number;
  currentElement?: CalenderElement;
  dialogIsOpen: boolean;
  inputEventValue: string;
}

type Props = OwnProps & EventDialogHandler;

export const EventDialog: React.FC<Props> = props => {
  const classes = useStyles();
  const {
    year,
    month,
    currentElement,
    dialogIsOpen,
    inputEventValue,
    handleToggleDialog,
    handleClearCurrentElement,
    handleUpdateInputEventValue,
    handleAddEvent,
  } = props;
  const dayOfWeek =
    DAYS_OF_WEEK[
      new Date(month + ' ' + currentElement?.date + ' ' + year).getDay()
    ];
  const handleCloseThis: () => void = () => {
    handleClearCurrentElement();
    handleUpdateInputEventValue('');
    handleToggleDialog();
  };
  const handleCreateAndAddEvent: () => void = () => {
    if (currentElement) {
      handleAddEvent(
        new Event([year, month, currentElement.date], inputEventValue)
      );
      handleCloseThis();
    }
  };

  if (!currentElement) {
    return <div />;
  }

  return (
    <Dialog
      open={dialogIsOpen}
      onClose={handleCloseThis}
      aria-labelledby="event-dialog"
    >
      <DialogTitle>
        {month + '/' + currentElement.date}
        <span className={classes.dayOfWeek}>{dayOfWeek}</span>
      </DialogTitle>
      <DialogContent style={{ width: 400 }}>
        <Events events={currentElement.events} large />
        <TextField
          autoFocus
          id="new-event"
          label="予定を追加"
          fullWidth
          value={inputEventValue}
          onChange={e => handleUpdateInputEventValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseThis}>閉じる</Button>
        <Button onClick={handleCreateAndAddEvent}>追加</Button>
      </DialogActions>
    </Dialog>
  );
};
