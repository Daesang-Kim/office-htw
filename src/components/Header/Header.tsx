import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './HeaderStyled';

interface IProps extends WithStyles<typeof styles>{

}

const Header: React.SFC<IProps> = () => (
  <Grid container={true}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Welcome to HTW
        </Typography>
        <Link to="/Foodist" style={{margin: "5px"}}>메뉴</Link>
        <Link to="/WorkingTime" style={{margin: "5px"}}>퇴능</Link>
        <Link to="/ShuttleBus" style={{margin: "5px"}}>셔틀</Link>
      </Toolbar>
    </AppBar>
  </Grid>
)

export default withStyles(styles)(Header);
