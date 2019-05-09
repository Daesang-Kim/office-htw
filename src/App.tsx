import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import {
  ShuttleBusPage,
  WorkingTimePage,
  FoodistPage,
} from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/WorkingTime" component={WorkingTimePage} />
          <Route path="/Foodist" component={FoodistPage} />
          <Route path="/ShuttleBus" component={ShuttleBusPage} />
          <Route path="/" component={WorkingTimePage} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
