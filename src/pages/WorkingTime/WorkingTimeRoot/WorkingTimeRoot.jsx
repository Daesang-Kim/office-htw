import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { WorkingTimePage, NewWorkingTimePage, ClockRoot } from '../../.';

const WorkingTimeRoot = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="퇴근시간계산ver1" value="1" />
            <Tab label="퇴근시간계산ver2" value="2" />
            <Tab label="Google Timer" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><WorkingTimePage /></TabPanel>
        <TabPanel value="2"><NewWorkingTimePage /></TabPanel>
        <TabPanel value="3"><ClockRoot /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default WorkingTimeRoot;