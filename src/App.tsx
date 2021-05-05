import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  AnimalsPage,
  FoodistPage,
  FoodistUploadPage,
  InfoPage,
  NewWorkingTimePage,
  ShuttleBusPage,
  WorkingTimePage,
} from './pages';
import {
  initFirebase,
} from './utils/fb';

class App extends React.Component {
  public componentDidMount() {
    initFirebase();
  }
  public render() {
    return (
      <Router>
        <Header />
        <div style={{ height: 'calc(100% + 56px)'}}>
          <Switch>
            <Route path="/Foodist" component={FoodistPage} />
            <Route path="/WorkingTime" component={WorkingTimePage} />
            <Route path="/NewWorkingTime" component={NewWorkingTimePage} />
            <Route path="/ShuttleBus" component={ShuttleBusPage} />
            <Route path="/Info" component={InfoPage} />
            <Route path="/FoodistUpload" component={FoodistUploadPage} />
            <Route path="/Animals" component={AnimalsPage} />
            <Route path="/" component={FoodistPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
      
    );
  }
}

export default App;
