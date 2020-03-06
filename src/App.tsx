import * as React from 'react';
import CalenderBoardContainer from 'containers/CalenderBoardContainer';
import { makeStyles } from '@material-ui/core';
import { EventDialog } from 'components/EventDialog';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: '0 40px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      padding: '0 8px',
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CalenderBoardContainer />
        <EventDialog isOpen={true} />
      </div>
    </React.Fragment>
  );
};

export default App;
