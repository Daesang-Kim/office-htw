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
  totalWorkingTime: string,
}

class WorkingTimePage extends React.Component<IProps, IState> {
  public state: IState = {
    canOutOfOfficeTime: "Not yet...",
    comeToOfficeTimeFri: "08:00",
    remainTime: "I don't know yet...",
    totalWorkingTime: "00:00",
    workTimeMon: 8,
    workTimeThu: 8,
    workTimeTue: 8,
    workTimeWed: 8,
  }

  public IsNumber = (value: string | number): boolean => {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return true;
    }
    if (value === '' || (typeof value === 'string' && Number.parseFloat(value))) {
      return true;
    }
    return false;
  }

  public onChangeWorkingTimeMonday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      this.setState({
        workTimeMon: Number.parseFloat(e.currentTarget.value),
      });
    }
  }
  
  public onChangeWorkingTimeThusday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      this.setState({
        workTimeTue: Number.parseFloat(e.currentTarget.value),
      });
    }
  }

  public onChangeWorkingTimeWednesday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      this.setState({
        workTimeWed: Number.parseFloat(e.currentTarget.value),
      });
    }
  }

  public onChangeWorkingTimeThursday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      this.setState({
        workTimeThu: Number.parseFloat(e.currentTarget.value),
      });
    }
  }

  public onChangeWorkingTime = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, container: string): void => {
    const numberValue = e.currentTarget.value === ''? 0 : Number.parseFloat(e.currentTarget.value);
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

  public toNumber = (value: any) : number => Number.isNaN(value) ? 0 : value;

  public onApplyClick = () => {
    const {
      workTimeMon,
      workTimeTue,
      workTimeWed,
      workTimeThu,
      comeToOfficeTimeFri,
    } = this.state;

    // 총 근무시간 계산
    const workHourWeekToMin = (
      Math.floor(this.toNumber(workTimeMon)) + 
      Math.floor(this.toNumber(workTimeTue)) +
      Math.floor(this.toNumber(workTimeWed)) +
      Math.floor(this.toNumber(workTimeThu))) * 60;
    const workMinWeek = Math.round(
      this.toUnderPointNumber(this.toNumber(workTimeMon))
      + this.toUnderPointNumber(this.toNumber(workTimeTue))
      + this.toUnderPointNumber(this.toNumber(workTimeWed))
      + this.toUnderPointNumber(this.toNumber(workTimeThu))
      + workHourWeekToMin);

    const doneTime = this.toMinutesToHourMin(workMinWeek);

    // 남은 시간 계산
    const totalDate = new Date(0, 0, 1, doneTime.hour, doneTime.min, 0);
    const fourtyHour = new Date(0, 0, 1, 40, 0, 0);
    let remainTotalMin = (fourtyHour.getTime() - totalDate.getTime()) / 1000 / 60;
    const remainTime = this.toMinutesToHourMin(remainTotalMin);

    if (remainTime.hour <= 4 && remainTime.min <= 0) {
      remainTime.hour = 4;
      remainTime.min = 0;
      remainTotalMin = 240;
    }

    let additionalMinutes = 30;
    if (remainTotalMin < 480) { // 8시간 미만
      additionalMinutes = 30;
    } else if (remainTotalMin < 720) {  // 8시간이상~12시간미만
      additionalMinutes = 60;
    } else if (remainTotalMin < 960) {  // 12시간이상~16시간미만
      additionalMinutes = 90;
    }

    // const realRemainMinutes = this.toMinutesToHourMin(remainTotalMin + additionalMinutes);
    const officeTimeFriday = comeToOfficeTimeFri.split(':');
    const comeToOfficeDate = new Date(0, 0, 2, Number(officeTimeFriday[0]), Number(officeTimeFriday[1]), 0);
    // const remainDate = new Date(0, 0, 0, realRemainMinutes.hour, realRemainMinutes.min, 0);
    comeToOfficeDate.setMinutes(comeToOfficeDate.getMinutes() + remainTotalMin + additionalMinutes);
    // const canOutOfOfficeDate = this.toMinutesToHourMin(comeToOfficeDate.getTime() / 1000 / 60);
    this.setState({
      canOutOfOfficeTime: `${this.pad2(comeToOfficeDate.getHours())}:${this.pad2(comeToOfficeDate.getMinutes())}`,
      remainTime: `${this.pad2(remainTime.hour)}:${this.pad2(remainTime.min)}`,
      totalWorkingTime: `${this.pad2(doneTime.hour)}:${this.pad2(doneTime.min)}`,
    })
  }

  public pad2 = (num: string | number) => (Number(num) < 10 ? '0' : '') + num;

  public toMinutesToHourMin = (totalMinutes: number) => ({
    hour: Math.floor(totalMinutes / 60),
    min: totalMinutes % 60,
  })

  public onChangeComeToOfficeTime = (e: any) => {
    this.setState({
      comeToOfficeTimeFri: e.currentTarget.value,
    });
  }

  public toUnderPointNumber = (time: number) => (time - Math.floor(time)) * 100;
  
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
        <h3>
          {'총 근무 시간'}
          {this.state.totalWorkingTime}
        </h3>
        <div style={{display: 'flex', ['flex-direction']: 'column'}}>
          <TextField
            id="standard-number"
            label="Monday"
            value={this.state.workTimeMon}
            onChange={this.onChangeWorkingTimeMonday}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 0.01, // 1 min
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Tuesday"
            value={this.state.workTimeTue}
            onChange={this.onChangeWorkingTimeThusday}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 0.01, // 1 min
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Wednesday"
            value={this.state.workTimeWed}
            onChange={this.onChangeWorkingTimeWednesday}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 0.01, // 1 min
            }}
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Thursday"
            value={this.state.workTimeThu}
            onChange={this.onChangeWorkingTimeThursday}
            type="number"
            defaultValue="8"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 0.01, // 1 min
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
