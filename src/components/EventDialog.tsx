import * as React from 'react';
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { EventDialogHandler } from 'containers/EventDialogContainer';

const useStyles = makeStyles(() => ({
  root: { padding: 24 },
}));

interface OwnProps {
  dialogIsOpen: boolean;
}

type Props = OwnProps & EventDialogHandler;

export const EventDialog: React.FC<Props> = props => {
  const classes = useStyles();
  const { dialogIsOpen, handleToggleDialog, handleClearCurrentEvents } = props;
  const handleCloseThis: () => void = () => {
    handleClearCurrentEvents();
    handleToggleDialog();
  };

  return (
    <Dialog
      open={dialogIsOpen}
      onClose={handleCloseThis}
      aria-labelledby="event-dialog"
    >
      <DialogTitle>予定</DialogTitle>
      <DialogContent style={{ width: 400 }}>
        <DialogContentText>サンプルです。</DialogContentText>
        <TextField autoFocus id="new-event" label="予定を追加" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseThis}>閉じる</Button>
        <Button>追加</Button>
      </DialogActions>
    </Dialog>
  );
};
