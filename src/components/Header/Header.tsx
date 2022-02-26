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
  <Grid container={true} style={{ position: 'sticky', left: 0, right: 0, top: 0 }}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="default">
          HTW
        </Typography>
      </Toolbar>
    </AppBar>
  </Grid>
)

export default withStyles(styles)(Header);
