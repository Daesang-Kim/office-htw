import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import {
  FoodistPage,
  InfoPage,
  NewWorkingTimePage,
  ShuttleBusPage,
  WorkingTimePage,
} from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/Foodist" component={FoodistPage} />
          <Route path="/WorkingTime" component={WorkingTimePage} />
          <Route path="/NewWorkingTime" component={NewWorkingTimePage} />
          <Route path="/ShuttleBus" component={ShuttleBusPage} />
          <Route path="/Info" component={InfoPage} />
          <Route path="/" component={FoodistPage} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
