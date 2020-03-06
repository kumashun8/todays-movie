import * as React from 'react';
import {
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
  Filter7,
  Filter8,
  Filter9,
  Filter9Plus,
} from '@material-ui/icons';

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
    case 4:
      return <Filter4 color="secondary" fontSize="small" />;
    case 5:
      return <Filter5 color="secondary" fontSize="small" />;
    case 6:
      return <Filter6 color="secondary" fontSize="small" />;
    case 7:
      return <Filter7 color="secondary" fontSize="small" />;
    case 8:
      return <Filter8 color="secondary" fontSize="small" />;
    case 9:
      return <Filter9 color="secondary" fontSize="small" />;
    default:
      return <Filter9Plus color="secondary" fontSize="small" />;
  }
};
