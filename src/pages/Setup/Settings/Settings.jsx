import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  FoodistUploadPage,
  InfoPage,
  VisitorPage,
  ShuttleBusPage,
} from '../..';

const Settings = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Visitor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VisitorPage />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Upload</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FoodistUploadPage />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Shuttle Bus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShuttleBusPage />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Log</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InfoPage />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Web app for techwinner...
          </Typography>
          <Typography>
            Since 2018
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Settings;
