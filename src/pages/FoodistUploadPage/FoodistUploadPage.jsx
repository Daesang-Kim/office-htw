import React, { useEffect } from 'react';
import { UploadStyled } from './FoodistUploadPageStyled';
import { Input, Button } from '@material-ui/core';
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FoodistUploadPage = () => {
  // const [imageSrc, setImageSrc] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const db = getDatabase();
    const imageRef = ref(db, 'images/');
    onValue(imageRef, snapshot => {
      const img = (snapshot.val() && snapshot.val().imageSrc) || '';
      const lastUp = (snapshot.val() && snapshot.val().lastUpdate) || '';
      // setImageSrc(img);
    })
  }, []);

  const onFileChange = event => {
    const input = event.target;

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        // setImageSrc(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  const onSubmitClick = () => {
    const pw = document.getElementById('pw');
    if (pw.value !== '4321') {
      setMessage('deny');
      handleClose();
    } else {
      // 이미지 저장
      const db = getDatabase();
      const updates = {
        ['images/']: {
          imageSrc,
          lastUpdate: new Date(),
        },
      };
      update(ref(db), updates)
      setMessage('okay');
      handleClose();
    }
  }
  return (
    <UploadStyled>
      <label>Upload</label>
      <Input type="file" onChange={onFileChange}>클릭</Input>
      <Button onClick={handleClickOpen}>Submit</Button>
      <div style={{ color: 'red' }}>{message}</div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Warning</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit to this image, please enter your password code.
          </DialogContentText>
          <TextField
            autoComplete="off"
            autoFocus
            margin="dense"
            id="pw"
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmitClick} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </UploadStyled>
  );
}

export default FoodistUploadPage;
