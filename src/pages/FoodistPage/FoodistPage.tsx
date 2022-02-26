import Modal from '@material-ui/core/Modal';
import firebase from 'firebase/app';
import * as React from 'react';
import Wrapper from './FoodistPageStyled';

const FoodistPage = () => {
  const [imageSrc, setImageSrc] = React.useState('');
  const [lastUpdate, setLastUpdate] = React.useState(new Date());
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    const database = firebase.database();
    database.ref('images/').once('value').then(snapshot => {
      const img = (snapshot.val() && snapshot.val().imageSrc) || '';
      const lastUp = (snapshot.val() && snapshot.val().lastUpdate) || '';
      setImageSrc(img);
      setLastUpdate(new Date(lastUp));
    })
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <button type="button" onClick={handleOpen}>
        팝업다시보기
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{
          background: 'white',
          marginTop: '200px',
          color: 'red',
          fontSize: '30px',
        }}>
          중요 공지: 이 페이지는 곧 없어질 예정입니다. 새로운 페이지로 이동하세요 <br />
          <a href="https://office-htw.web.app/"> 여기를 클릭하시면 이동합니다.</a>
        </div>
      </Modal>
      {lastUpdate && (
        <div className="last-update">업로드 시간: {lastUpdate.toString()}</div>
      )}
      <img style={{ width: '100%' }} src={imageSrc} />
    </Wrapper>
  )
}

export default FoodistPage;
