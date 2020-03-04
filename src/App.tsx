import * as React from 'react';
import CalenderBoardContainer from 'containers/CalenderBoardContainer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: '0 40px' }}>
        <CalenderBoardContainer />
      </div>
    </React.Fragment>
  );
};

export default App;
