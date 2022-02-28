import React, { useState } from 'react';
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  firebaseFunctions,
} from '../../../utils/fb';
import {
  Button,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const VisitorPage = () => {
  const [text, setText] = useState('');
  const [visitorLogs, setVisitorLogs] = useState({});
  React.useEffect(() => {
    refreshVisitorLogDB();
  }, []);

  const onTextChange = e => {
    setText(e.target.value);
  }
  const onTextKeyPress = e => {
    if (e.key === 'Enter') {
      onOKClick();
    }
  }
  const onOKClick = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = `${year}${month}${currentDate.getDate().toString().padStart(2, '0')}`
    const time = currentDate.valueOf();
    const db = getDatabase();
    const updates = {
      [`visitorlog/${date}`]: {
        [time]: text,
      }
    }
    update(ref(db), updates)
    setText('');
    refreshVisitorLogDB();
  }
  const refreshVisitorLogDB = () => {
    const db = getDatabase();
    const visitorLogRef = ref(db, 'visitorlog/');
    onValue(visitorLogRef, snapshot => {
      const visitLogs = snapshot.val() || {};
      setVisitorLogs(visitLogs);
    })
  }
  
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <TextField fullWidth label="한줄평" id="one-line-comment" variant="standard"
            onKeyPress={onTextKeyPress}
            onChange={onTextChange}
            value={text}
          />
          <Button variant="contained" color="default" onClick={onOKClick}>OK</Button>
        </div>
      </div>
      <hr />
      <div>
        {visitorLogs && Object.keys(visitorLogs).length > 0 && (
          Object.keys(visitorLogs).map(dateKey => {
            const visitorLog = visitorLogs[dateKey];
            return Object.keys(visitorLog).map(key => {
              const date =  new Date(Number(key));
              const dateFormat = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`

              return (
                <div style={{ display: 'flex', justifyContent: 'space-between' }} key={key}>
                  <div>{visitorLog[key]}</div>
                  <div style={{ fontSize: '10px', color: 'gray'}}>{dateFormat}</div>
                </div>
            )}).reverse()
          }).reverse()
        )}
      </div>
    </div>
  );
}

export default VisitorPage;
