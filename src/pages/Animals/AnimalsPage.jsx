import React, { useState } from 'react';
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  firebaseFunctions,
} from '../../utils/fb';
import {
  Button,
} from '@material-ui/core';

const AnimalsPage = () => {
  const [show, setShow] = useState(false);
  const [newsShow, setNewsShow] = useState(false);
  const [text, setText] = useState('');
  const [visitorLogs, setVisitorLogs] = useState({});
  const [newsData, setNewsData] = useState('initialing...');
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
  const loadNews = () => {
    const helloWorld = firebaseFunctions('helloWorld');
    if (helloWorld != null) {
      helloWorld()
        .then((result) => {
          // Read result of the Cloud Function.
          /** @type {any} */
          // const data = result.data;
          // console.log(result)
          const jsonData = JSON.parse(result.data)
          // console.log(jsonData)

          setNewsData(jsonData);
          // console.log(JSON.parse(result.toString()))
          // const sanitizedMessage = data.text;
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code;
          const message = error.message;
          const details = error.details;
          // ...
          setNewsData(`${code} ${message} ${details}`);
        });
    }
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
          { newsData === 'initialing...' ? "로딩중" : newsShow ? "뉴스 접기" : "뉴스 펼치기"}
        </Button>
      </div>
      { newsShow && (
        <div>
          { newsData.items.map(item => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href={item.link}>
                <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
              </a>
            </div>)
          )}
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
