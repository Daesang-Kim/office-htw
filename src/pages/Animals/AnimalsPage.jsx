import React, { useState } from 'react';
import * as firebase from 'firebase';
import i20210411_074214 from '../../res/images/20210411_074214.jpg';
import i20210415_182520 from '../../res/images/20210415_182520.jpg';
import i20210417_200729 from '../../res/images/20210417_200729.jpg';
import i20210418_135413 from '../../res/images/20210418_135413.jpg';
import i20210418_135759 from '../../res/images/20210418_135759.jpg';
import i20210418_210314 from '../../res/images/20210418_210314.jpg';

const AnimalsPage = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [visitorLogs, setVisitorLogs] = useState({});
  React.useEffect(() => {
    refreshVisitorLogDB();
  }, []);

  const onShowButtonClick = () => {
    setShow(!show);
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
  return (
    <div>
      <div>{'앱이 마음에 드십니까?'}</div>
      <div style={{ display: 'flex' }}>
        <div>{'한줄평: '}</div>
        <div style={{ display: 'flex', flex: 1 }}>
          <input onChange={onTextChange} onKeyPress={onTextKeyPress} value={text} style={{ width: '100%' }} type="text" />
          <button onClick={onOKClick}>OK</button>
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
            )})
          })
        )}
      </div>

      <div>
        <button onClick={onShowButtonClick} style={{ width: '100%'}}>
          { show ? "접기" : "펼치기"}
        </button>
      </div>
      { show && (
        <div>
          <img style={{ width: '100%' }} src={i20210411_074214} />
          <img style={{ width: '100%' }} src={i20210415_182520} />
          <img style={{ width: '100%' }} src={i20210417_200729} />
          <img style={{ width: '100%' }} src={i20210418_135413} />
          <img style={{ width: '100%' }} src={i20210418_135759} />
          <img style={{ width: '100%' }} src={i20210418_210314} />
        </div>
      )}
    </div>
  );
}

export default AnimalsPage;
