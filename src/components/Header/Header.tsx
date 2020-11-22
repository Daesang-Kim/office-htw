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
import styled from 'styled-components';
import styles from './HeaderStyled';

const StyledLink = styled(Link)`
  margin: 5px;
  text-decoration: none;
  color: white;

  &:visited, &:link {
      text-decoration: none;
  }
  &:focus, &:hover, &:active {
    color: red;
  }
`;
interface IProps extends WithStyles<typeof styles>{

}

const Header: React.SFC<IProps> = () => (
  <Grid container={true}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          HTW
        </Typography>
        <StyledLink to="/Foodist">메뉴</StyledLink>
        <StyledLink to="/WorkingTime">퇴능</StyledLink>
        <StyledLink to="/NewWorkingTime">Nu퇴능</StyledLink>
        <StyledLink to="/ShuttleBus">셔틀</StyledLink>
        <StyledLink to="/FoodistUpload">업로드</StyledLink>
        <StyledLink to="/Info">정보</StyledLink>
      </Toolbar>
    </AppBar>
  </Grid>
)

export default withStyles(styles)(Header);
