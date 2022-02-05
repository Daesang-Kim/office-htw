import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import Footer from './components/Footer';
import Header from './components/Header';
import {
  FoodistPage,
  //   FoodistUploadPage,
  // InfoPage,
  NewsPage,
  //   NewWorkingTimePage,
  //   ShuttleBusPage,
  VisitorPage,
  WorkingTimePage,
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
    // <Router>
    //   
    //   <Switch>
    //     <Route path="/Main" compoonent={NewsPage} />
    //     <Route path="/Foodist" component={FoodistPage} />
    //     <Route path="/WorkingTime" component={WorkingTimePage} />
    //     <Route path="/NewWorkingTime" component={NewWorkingTimePage} />
    //     <Route path="/ShuttleBus" component={ShuttleBusPage} />
    //     <Route path="/Info" component={InfoPage} />
    //     <Route path="/FoodistUpload" component={FoodistUploadPage} />
    //     <Route path="/Animals" component={AnimalsPage} />
    //     <Route path="/" component={NewsPage} />
    //   </Switch>
    //   <div style={{ height: '56px'}} />
    //   <Footer />
    // </Router>
    <>
      <div>
        <Header />
        {init && value === 0 && (
            <NewsPage />
        )}
        {init && value === 1 && (
            <FoodistPage />
        )}
        {init && value === 2 && (
            <WorkingTimePage />
        )}
        {init && value === 3 && (
            <VisitorPage />
        )}
      </div>
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0}}>
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={onNavigationChange}
        >
          <BottomNavigationAction label="소식" icon={<img width="100%" height="100%" src={NewsIcon} />} />
          <BottomNavigationAction label="식사" icon={<img width="100%" height="100%" src={FoodIcon} />} />
          <BottomNavigationAction label="퇴능" icon={<img width="100%" height="100%" src={ClockIcon} />} />
          <BottomNavigationAction label="설정" icon={<img width="100%" height="100%" src={SettingsIcon} />} />
        </BottomNavigation>
      </div>
    </>
  );
}

export default App;
