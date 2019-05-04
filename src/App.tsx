import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import { ShuttleBusPage, WorkingTimePage } from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={WorkingTimePage} />
          <Route path="/WorkingTime" component={WorkingTimePage} />
          <Route path="/ShuttleBus" component={ShuttleBusPage} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
