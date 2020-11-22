import * as firebase from 'firebase';
import * as React from 'react';

const FoodistPage = () => {
  const [imageSrc, setImageSrc] = React.useState('');
  React.useEffect(() => {
    const database = firebase.database();
    database.ref('images/').once('value').then(snapshot => {
      const img = (snapshot.val() && snapshot.val().imageSrc) || '';
      setImageSrc(img);
    })
  }, []);
  return (
    <>
      <img style={{ width: '100%' }} src={imageSrc} />
    </>
  )
}

export default FoodistPage;
