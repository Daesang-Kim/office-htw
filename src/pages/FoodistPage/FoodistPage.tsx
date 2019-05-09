import {
  // CardMedia,
  WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import styles from './FoodistPageStyled';

interface IProps extends WithStyles<typeof styles> {
  
}

interface IState {

}

class FoodistPage extends React.Component<IProps, IState> {
  public state: IState = {

  }

  public render() {
    return (
      <>
        <img style={{ width: '100%' }} src={process.env.PUBLIC_URL + "/foodist.png"} />
      </>
    )
  }
} 

export default FoodistPage;
