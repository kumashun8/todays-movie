import * as React from 'react';
import CalenderBoardContainer from 'containers/CalenderBoardContainer';
import { makeStyles } from '@material-ui/core';
import EventDialogContainer from 'containers/EventDialogContainer';

// function hoge(
//   value: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
// ): void {
//   const events: [string, firebase.firestore.DocumentData][] = [];
//   console.log(value.docs);
//   value.forEach(doc => events.push([doc.id, doc.data()]));
//   console.log(events);
// }
// fetchEventDocs(hoge);

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
        <EventDialogContainer />
      </div>
    </React.Fragment>
  );
};

export default App;
