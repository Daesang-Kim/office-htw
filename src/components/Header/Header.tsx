import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as React from 'react';
import styles from './HeaderStyled';

const Header = () => (
  <Grid container={true}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          HTW
        </Typography>
      </Toolbar>
    </AppBar>
  </Grid>
)

export default withStyles(styles)(Header);
