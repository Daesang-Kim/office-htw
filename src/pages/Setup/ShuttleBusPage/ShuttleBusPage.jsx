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
import SeohyunShuttle from '../../../components/shuttleBus/SeohyunShuttle/SeohyunShuttle';
import YatabShuttle from '../../../components/shuttleBus/YatabShuttle/YatabShuttle';
import {
  styles,
  Container,
} from './ShuttleBusPageStyled';


const ShuttleBusPage = () => (
  <div>
    {'금요일은 6시 30분이 막차'}
    <br />
    <Router>
      <Link to="./bus-yatab" style={{margin: "5px"}}>야탑</Link>
      <Link to="./bus-seohyun" style={{margin: "5px"}}>서현</Link>
      {/* <Link to="/ShuttleBus/SuwonShuttle" style={{margin: "5px"}}>수원</Link> */}
      <Switch>
        <Route path="/bus-yatab" component={YatabShuttle} />
        <Route path="/bus-seohyun" component={SeohyunShuttle}/>
        {/* <Route path="/ShuttleBus/SuwonShuttle"  /> */}
      </Switch>
      
    </Router>
  </div>
)

export default withStyles(styles)(ShuttleBusPage);
