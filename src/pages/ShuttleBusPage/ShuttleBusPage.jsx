import {
  // AppBar,
  Grid,
  MenuItem,
  MenuList,
  // Toolbar,
  // Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SeohyunShuttle from '../../components/shuttleBus/SeohyunShuttle/SeohyunShuttle';
import YatabShuttle from '../../components/shuttleBus/YatabShuttle/YatabShuttle';
import {
  styles,
  Container,
} from './ShuttleBusPageStyled';


const ShuttleBusPage = () => (
  <div>
    {'금요일은 6시 30분이 막차'}
    <br />
    <Router>
      <Link to="/ShuttleBus/YatabShuttle" style={{margin: "5px"}}>야탑</Link>
      <Link to="/ShuttleBus/SeohyunShuttle" style={{margin: "5px"}}>서현</Link>
      {/* <Link to="/ShuttleBus/SuwonShuttle" style={{margin: "5px"}}>수원</Link> */}
      <Switch>
        <Route path="/ShuttleBus/YatabShuttle" component={YatabShuttle} />
        <Route path="/ShuttleBus/SeohyunShuttle" component={SeohyunShuttle}/>
        {/* <Route path="/ShuttleBus/SuwonShuttle"  /> */}
      </Switch>
      
    </Router>
  </div>
)

export default withStyles(styles)(ShuttleBusPage);
