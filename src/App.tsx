import * as React from 'react';
import { CalenderBoard } from 'components/CalenderBoard';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: '0 40px' }}>
        <CalenderBoard name="taro" />
      </div>
    </React.Fragment>
  );
};

export default App;
