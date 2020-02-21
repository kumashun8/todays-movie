import * as React from 'react';
import { CircularProgress } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CircularProgress style={{ margin: '50%', width: 120, height: 120 }} />
    </React.Fragment>
  );
};

export default App;
