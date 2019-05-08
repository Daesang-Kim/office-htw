import {
  Button,
  TextField,
  WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import styles from './WorkingTimePageStyled';

interface IProps extends WithStyles<typeof styles> {
  
}

interface IState {
  workTimeMon: number,
  workTimeTue: number,
  workTimeWed: number,
  workTimeThu: number,
  comeToOfficeTimeFri: string,
  canOutOfOfficeTime: string,
  remainTime: string,
}

class WorkingTimePage extends React.Component<IProps, IState> {
  public state: IState = {
    canOutOfOfficeTime: "Not yet...",
    comeToOfficeTimeFri: "08:00",
    remainTime: "I don't know yet...",
    workTimeMon: 8,
    workTimeThu: 8,
    workTimeTue: 8,
    workTimeWed: 8,
  }

  public onChangeWorkingTime = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, container: string): void => {
    const numberValue = Number.parseFloat(e.currentTarget.value);
    if (Number.isNaN(numberValue)) {
      return;
    }
    switch(container) {
      case 'monday':
        this.setState({
          workTimeMon: numberValue,
        });
        break;
      case 'tuesday':
        this.setState({
          workTimeTue: numberValue,
        });
        break;
      case 'wednesday':
        this.setState({
          workTimeWed: numberValue,
        });
        break;
      case 'thursday':
        this.setState({
          workTimeThu: numberValue,
        });
        break;
      default:
        break;
    }
  }

  public onApplyClick = () => {
    const {
      workTimeMon,
      workTimeTue,
      workTimeWed,
      workTimeThu,
      comeToOfficeTimeFri,
    } = this.state;

    console.log(workTimeMon, workTimeTue, workTimeWed, workTimeThu, comeToOfficeTimeFri);
  }

  public onChangeComeToOfficeTime = (e: any) => {
    this.setState({
      comeToOfficeTimeFri: e.currentTarget.value,
    });
  }
  
  public render() {
    return (
      <>
        <span>
          <h2 style={{display: 'inline-block'}}>
            {'퇴근가능시간은?'}
          </h2>
        </span>
        <span>
          <h3 style={{display: 'inline-block', color: 'red'}}>
            {this.state.canOutOfOfficeTime}
          </h3>
        </span>
        <h3>
          {'남은시간'}
          {this.state.remainTime}
        </h3>
        <div style={{display: 'flex', 'flex-direction': 'column'}}>
          <TextField
            id="standard-number"
            label="Monday"
            value={this.state.workTimeMon}
            onChange={e => this.onChangeWorkingTime(e, 'monday')}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Tuesday"
            value={this.state.workTimeTue}
            onChange={e => this.onChangeWorkingTime(e, 'tuesday')}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Wednesday"
            value={this.state.workTimeWed}
            onChange={e => this.onChangeWorkingTime(e, 'wednesday')}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Thursday"
            value={this.state.workTimeThu}
            onChange={e => this.onChangeWorkingTime(e, 'thursday')}
            type="number"
            defaultValue="8"
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
            onChange={this.onChangeComeToOfficeTime}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 60, // 1 min
            }}
            value={this.state.comeToOfficeTimeFri}
          />
          <Button
          variant="contained"
          color="primary"
          onClick={this.onApplyClick}
        >
          {'적용'}
        </Button>
        </div>
      </>
    )
  }
} 

export default WorkingTimePage;
