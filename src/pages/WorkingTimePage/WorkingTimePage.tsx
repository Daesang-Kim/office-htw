import {
  TextField,
  WithStyles,
  Button,
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
        defaultValue="8"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Tuesday"
        // value={this.state.age}
        // onChange={this.handleChange('age')}
        type="number"
        defaultValue="8"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Wednesday"
        // value={this.state.age}
        // onChange={this.handleChange('age')}
        type="number"
        defaultValue="8"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Thursday"
        // value={this.state.age}
        // onChange={this.handleChange('age')}
        type="number"
        defaultValue="8"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 0.1, // 5 min
        }}
        margin="normal"
      />
      <TextField
        id="time"
        label="Friday"
        type="time"
        defaultValue="08:00"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 60, // 5 min
        }}
      />
    </div>
    <Button
      variant="contained"
      color="primary"
      // className={classes.button}
    >
      {'적용'}
    </Button>
  </>
)

export default WorkingTimePage;
