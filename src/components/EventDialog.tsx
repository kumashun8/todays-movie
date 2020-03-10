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
import { CalenderElement } from 'lib/calenderElement';
import { DAYS_OF_WEEK } from 'lib/common';
import { Event } from 'lib/event';
import { addEventDoc, removeEventDoc } from 'lib/firestore';
import { EventDialogHandler } from 'containers/EventDialogContainer';
import { Events } from './Events';

const useStyles = makeStyles(theme => ({
  dayOfWeek: {
    fontSize: 24,
    marginLeft: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  content: {
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
  },
  input: { marginTop: 24 },
  actions: { padding: '8px 24px 16px' },
}));

interface OwnProps {
  year: number;
  month: number;
  currentElement?: CalenderElement;
  isOpen: boolean;
  inputEventValue: string;
}

type Props = OwnProps & EventDialogHandler;

export const EventDialog: React.FC<Props> = props => {
  const classes = useStyles();
  const {
    year,
    month,
    currentElement,
    isOpen,
    inputEventValue,
    handleToggleDialog,
    handleClearCurrentElement,
    handleUpdateInputEventValue,
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
      addEventDoc(
        new Event(
          [year, month, currentElement.date],
          inputEventValue,
          Date.parse(String(new Date()))
        )
      );
      handleCloseThis();
    }
  };
  const handleRemoveEventAndClose: (eventId: number) => void = eventId => {
    removeEventDoc(eventId);
    handleCloseThis();
  };

  if (!currentElement) {
    return <div />;
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseThis}
      aria-labelledby="event-dialog"
    >
      <DialogTitle>
        {month + '/' + currentElement.date}
        <span className={classes.dayOfWeek}>{dayOfWeek}</span>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Events
          events={currentElement.events}
          eventIds={currentElement.eventIds}
          handleRemove={handleRemoveEventAndClose}
          large
        />
        <TextField
          autoFocus
          id="new-event"
          label="予定を追加"
          fullWidth
          className={classes.input}
          value={inputEventValue}
          onChange={e => handleUpdateInputEventValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="outlined" color="default" onClick={handleCloseThis}>
          閉じる
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disabled={!inputEventValue}
          onClick={handleCreateAndAddEvent}
        >
          追加
        </Button>
      </DialogActions>
    </Dialog>
  );
};
