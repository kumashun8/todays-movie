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

const useStyles = makeStyles(() => ({
  root: { padding: 24 },
}));

type Props = {
  isOpen: boolean;
};

export const EventDialog: React.FC<Props> = props => {
  const classes = useStyles();
  const { isOpen } = props;

  return (
    <Dialog open={isOpen} aria-labelledby="event-dialog">
      <DialogTitle>予定</DialogTitle>
      <DialogContent style={{ width: 400 }}>
        <DialogContentText>サンプルです。</DialogContentText>
        <TextField autoFocus id="new-event" label="予定を追加" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button>閉じる</Button>
        <Button>追加</Button>
      </DialogActions>
    </Dialog>
  );
};
