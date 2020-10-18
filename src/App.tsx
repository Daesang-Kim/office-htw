import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import * as firebase from 'firebase';
import Header from './components/Header/Header';
import {
  FoodistPage,
  InfoPage,
  NewWorkingTimePage,
  ShuttleBusPage,
  WorkingTimePage,
} from './pages';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacrWHJhs2AccoU-9GCEb-mmLRJsG0XcY",
  authDomain: "office-htw.firebaseapp.com",
  databaseURL: "https://office-htw.firebaseio.com",
  projectId: "office-htw",
  storageBucket: "office-htw.appspot.com",
  messagingSenderId: "724085480815",
  appId: "1:724085480815:web:4a78d1a04b7b5d0be45c9a",
  measurementId: "G-TMMQR2HL44"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  static defaultProps = { database: {}};
  public render() {
    const database = firebase.database();
    console.log(database);
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
