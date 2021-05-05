import {
  AppBar,
  Grid,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import styles from './FooterStyled';

const StyledLink = styled(Link)`
  margin: 5px;

  @media all and (max-width: 400px) {
    font-size: 14px
  }
  @media all and (max-width: 350px) {
    font-size: 12px
  }
  @media all and (max-width: 300px) {
    font-size: 10px
  }
  @media all and (max-width: 250px) {
    font-size: 10px;
    margin: 1px;
  }
  text-decoration: none;
  color: white;

  &:visited, &:link {
      text-decoration: none;
  }
  &:focus, &:hover, &:active {
    color: red;
  }
`;

const Header = () => (
  <Grid container={true}>
    <AppBar position="relative" style={{ position: 'fixed', left: 0, bottom: 0 }}>
      <Toolbar>
        <StyledLink to="/Foodist">메뉴</StyledLink>
        <StyledLink to="/WorkingTime">퇴능</StyledLink>
        <StyledLink to="/NewWorkingTime">Nu퇴능</StyledLink>
        <StyledLink to="/ShuttleBus">셔틀</StyledLink>
        <StyledLink to="/FoodistUpload">업로드</StyledLink>
        <StyledLink to="/Info">정보</StyledLink>
        <StyledLink to="/Animals">fun</StyledLink>
      </Toolbar>
    </AppBar>
  </Grid>
)

export default withStyles(styles)(Header);
