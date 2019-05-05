import {
  TextField,
  WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import styles from './WorkingTimePageStyled';

interface IProps extends WithStyles<typeof styles> {
  
}
const WorkingTimePage: React.SFC<IProps> = () => (
  <>
    <h2>퇴근가능시간은?</h2>
    <div>
      <TextField
        id="standard-number"
        label="Monday"
        // value={this.state.age}
        // onChange={this.handleChange('age')}
        type="number"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
  </>
)

export default WorkingTimePage;
