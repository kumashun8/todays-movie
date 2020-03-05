import * as React from 'react';
import { makeStyles, Typography, IconButton, Grid } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

type Props = {
  year: number;
  month: number;
  handleChangeToPrevMonth(): void;
  handleChangeToNextMonth(): void;
};

export const CalenderHead: React.FC<Props> = props => {
  const classes = useStyles();
  const {
    year,
    month,
    handleChangeToPrevMonth,
    handleChangeToNextMonth,
  } = props;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <IconButton onClick={handleChangeToPrevMonth}>
          <ChevronLeft />
        </IconButton>
      </Grid>
      <Grid item xs={7}>
        <div className={classes.title}>
          <Typography variant="subtitle2">{year}</Typography>
          <Typography variant="h1">{month}</Typography>
        </div>
      </Grid>
      <Grid item>
        <IconButton onClick={handleChangeToNextMonth}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </Grid>
  );
};
