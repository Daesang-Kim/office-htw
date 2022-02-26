import { getDatabase, onValue, ref } from "firebase/database";
import * as React from 'react';
import Wrapper from './FoodistPageStyled';

const FoodistPage = () => {
  const [imageSrc, setImageSrc] = React.useState('');
  const [lastUpdate, setLastUpdate] = React.useState(new Date());
  React.useEffect(() => {
    const db = getDatabase();
    const imageRef = ref(db, 'images/');
    onValue(imageRef, snapshot => {
      const img = (snapshot.val() && snapshot.val().imageSrc) || '';
      const lastUp = (snapshot.val() && snapshot.val().lastUpdate) || '';
      setImageSrc(img);
      setLastUpdate(new Date(lastUp));
    })
  }, []);
  return (
    <Wrapper>
      {lastUpdate && (
        <div className="last-update">업로드 시간: {lastUpdate.toString()}</div>
      )}
      <img style={{ width: '100%' }} src={imageSrc} />
    </Wrapper>
  )
}

export default FoodistPage;
