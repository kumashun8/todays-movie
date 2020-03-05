import * as React from 'react';
import { Filter1, Filter2, Filter3 } from '@material-ui/icons';

type Props = {
  count: number;
};

export const EventCounter: React.FC<Props> = props => {
  const { count } = props;
  switch (count) {
    case 1:
      return <Filter1 color="secondary" fontSize="small" />;
    case 2:
      return <Filter2 color="secondary" fontSize="small" />;
    case 3:
      return <Filter3 color="secondary" fontSize="small" />;
    default:
      return <Filter1 color="secondary" fontSize="small" />;
  }
};
