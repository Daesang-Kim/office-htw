import React, { useEffect } from 'react';
import { UploadStyled } from './FoodistUploadPageStyled';
import { Input, Button } from '@material-ui/core';
import * as firebase from 'firebase';

const FoodistUploadPage = () => {
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    const database = firebase.database();
    database.ref('images/').once('value').then(function(snapshot){
      const img = (snapshot.val() && snapshot.val().imageSrc) || '';
      setImageSrc(img);
    })
  }, []);

  const onFileChange = event => {
    const input = event.target;

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  const onSubmitClick = () => {
    // 이미지 저장
    const database = firebase.database();
    database.ref('images/').update({
      imageSrc,
    });
  }
  return (
    <UploadStyled>
      <label>Upload</label>
      <Input type="file" onChange={onFileChange}>클릭</Input>
      <Button onClick={onSubmitClick}>Submit</Button>
      <img style={{ width: '100%' }} src={imageSrc} />
    </UploadStyled>
  );
}

export default FoodistUploadPage;
