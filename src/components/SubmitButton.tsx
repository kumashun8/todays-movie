import * as React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  title: string;
  onClick: Function;
};

export const SubmitButton: React.FC<Props> = props => {
  return (
    <Button variant="contained" color="primary" onClick={() => props.onClick()}>
      {props.title}
    </Button>
  );
};
