import React, { useState } from 'react';
import firebase from 'firebase/app';
import {
  Button,
} from '@material-ui/core';


// const newsUri = 'https://openapi.naver.com/v1/search/news.json';

const AnimalsPage = () => {
  const [show, setShow] = useState(false);
  const [newsShow, setNewsShow] = useState(false);
  const [text, setText] = useState('');
  const [visitorLogs, setVisitorLogs] = useState({});
  React.useEffect(() => {
    refreshVisitorLogDB();
    loadNews();
  }, []);

  const onShowButtonClick = () => {
    setShow(!show);
  }
  const onNewsShowButtonClick = () => {
    setNewsShow(!newsShow);
  }
  const onTextChange = e => {
    setText(e.target.value);
  }
  const onTextKeyPress = e => {
    if (e.key === 'Enter') {
      onOKClick();
    }
  }
  const onOKClick = () => {
    const database = firebase.database();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = `${year}${month}${currentDate.getDate().toString().padStart(2, '0')}`
    const time = currentDate.valueOf();
      database.ref(`visitorlog/${date}`).update({
        [time]: text,
      });
    setText('');
    refreshVisitorLogDB();
  }
  const refreshVisitorLogDB = () => {
    const database = firebase.database();
    database.ref('visitorlog/').once('value').then(snapshot => {
      const visitLogs = snapshot.val() || {};
      setVisitorLogs(visitLogs);
    })
  }
  const loadNews = () => {
    let options = { 
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': 'KL_voGl4mUMj5fcePnc3',
        'X-Naver-Client-Secret': 'IaPXGZ_j9D',
      },
    }
    // const data = getNewsAPI(newsUri, options);
  }

  const getNewsAPI = async (url, options) => {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  return (
    <div>
      <div>{'앱이 마음에 드십니까?'}</div>
      <div style={{ display: 'flex' }}>
        <div>{'한줄평: '}</div>
        <div style={{ display: 'flex', flex: 1 }}>
          <input onChange={onTextChange} onKeyPress={onTextKeyPress} value={text} style={{ width: '100%' }} type="text" />
          <Button variant="contained" color="default" onClick={onOKClick}>OK</Button>
        </div>
      </div>
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
      <div>
        <Button variant="outlined" color="default" onClick={onNewsShowButtonClick} style={{ width: '100%'}}>
          { newsShow ? "접기" : "펼치기"}
        </Button>
      </div>
      { newsShow && (
        <div>

        </div>
      )}

      <div>
        <Button variant="contained" color="default" onClick={onShowButtonClick} style={{ width: '100%'}}>
          { show ? "접기" : "펼치기"}
        </Button>
      </div>
      { show && (
        <div>
        </div>
      )}
    </div>
  );
}

export default AnimalsPage;
