import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import {
  FoodistPage,
  NewsPage,
  SettingsPage,
  WorkingTimeRoot,
} from './pages';
import ClockIcon from './res/icons/clock.svg';
import FoodIcon from './res/icons/food.svg';
import NewsIcon from './res/icons/news.svg';
import SettingsIcon from './res/icons/settings.svg';
import {
  initFirebase,
} from './utils/fb';

const App = () => {
  const [value, setValue] = React.useState(0)
  const [init, setInit] = React.useState(false)

  React.useEffect(() => {
    initFirebase();
    setInit(true)
  }, [])

  const onNavigationChange = (event: any, newValue: number) => {
    setValue(newValue);
  }

  return (
    <>
      <Router>
        <div style={{ marginBottom: '60px' }}>
          <Header />
            {init && (
              <Switch>
                <Route path="/news" component={NewsPage} />
                <Route path="/foodist" component={FoodistPage}/>
                <Route path="/working-time" component={WorkingTimeRoot}/>
                <Route path="/settings" component={SettingsPage}/>
                <Route path="/" component={NewsPage} />
              </Switch>
            )}
        </div>
        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0}}>
          <BottomNavigation
            showLabels={true}
            value={value}
            onChange={onNavigationChange}
          >
            <BottomNavigationAction icon={<Link to="news"><img width="36px" height="36px" src={NewsIcon} /></Link>} />
            <BottomNavigationAction icon={<Link to="foodist"><img width="36px" height="36px" src={FoodIcon} /></Link>} />
            <BottomNavigationAction icon={<Link to="working-time"><img width="36px" height="36px" src={ClockIcon} /></Link>} />
            <BottomNavigationAction icon={<Link to="settings"><img width="36px" height="36px" src={SettingsIcon} /></Link>} />
          </BottomNavigation>
        </div>
      </Router>
    </>
  );
}

export default App;
