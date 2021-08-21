import React from 'react'
import { makeStyles } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import background from "./assets/bg.jpg";
import Header from './components/Header'
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
