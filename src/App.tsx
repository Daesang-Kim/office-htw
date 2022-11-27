import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
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
      <div style={{ marginBottom: '60px' }}>
        <Header />
        {init && value === 0 && (
            <NewsPage />
        )}
        {init && value === 1 && (
            <FoodistPage />
        )}
        {init && value === 2 && (
            <WorkingTimeRoot />
        )}
        {init && value === 3 && (
            <SettingsPage />
        )}
      </div>
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0}}>
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={onNavigationChange}
        >
          <BottomNavigationAction data-testid="nav-news-icon" icon={<img width="100%" height="100%" src={NewsIcon} />} />
          <BottomNavigationAction data-testid="nav-food-icon" icon={<img width="100%" height="100%" src={FoodIcon} />} />
          <BottomNavigationAction data-testid="nav-clock-icon" icon={<img width="100%" height="100%" src={ClockIcon} />} />
          <BottomNavigationAction data-testid="nav-setting-icon" icon={<img width="100%" height="100%" src={SettingsIcon} />} />
        </BottomNavigation>
      </div>
    </>
  );
}

export default App;
