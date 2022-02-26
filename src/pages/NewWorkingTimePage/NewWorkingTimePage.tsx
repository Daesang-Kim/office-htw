import {
  Button,
  TextField,
  WithStyles,
} from '@material-ui/core';
import * as React from 'react';
import {
  minutesToHourMin,
  pad2,
} from '../../utils/calculation'
import styles from './NewWorkingTimePageStyled';

interface IProps extends WithStyles<typeof styles> {
  
}

interface IState {
  workTime: number,
  comeToOfficeTimeFri: string,
  canOutOfOfficeTime: string,
  remainTime: string,
}

class NewWorkingTimePage extends React.Component<IProps, IState> {
  public state: IState = {
    canOutOfOfficeTime: "--:--",
    comeToOfficeTimeFri: "08:00",
    remainTime: "--:--",
    workTime: 32,
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

  public onChangeWorkingTime = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      this.setState({
        workTime: Number.parseFloat(e.currentTarget.value),
      });
    }
  }

  public toNumber = (value: any) : number => Number.isNaN(value) ? 0 : value;

  public onApplyClick = () => {
    const {
      workTime,
      comeToOfficeTimeFri,
    } = this.state;

    // 총 근무시간 계산
    const workHourWeekToMin = (
      Math.floor(this.toNumber(workTime))) * 60;
    const workMinWeek = Math.round(
      this.toUnderPointNumber(this.toNumber(workTime))
      + workHourWeekToMin);

    const doneTime = minutesToHourMin(workMinWeek);

    // 남은 시간 계산
    const totalDate = new Date(0, 0, 1, doneTime.hour, doneTime.min, 0);
    const fourtyHour = new Date(0, 0, 1, 40, 0, 0);
    let remainTotalMin = (fourtyHour.getTime() - totalDate.getTime()) / 1000 / 60;
    const remainTime = minutesToHourMin(remainTotalMin);

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

    const officeTimeFriday = comeToOfficeTimeFri.split(':');
    const comeToOfficeDate = new Date(0, 0, 2, Number(officeTimeFriday[0]), Number(officeTimeFriday[1]), 0);
    comeToOfficeDate.setMinutes(comeToOfficeDate.getMinutes() + remainTotalMin + additionalMinutes);
    this.setState({
      canOutOfOfficeTime: `${pad2(comeToOfficeDate.getHours())}:${pad2(comeToOfficeDate.getMinutes())}`,
      remainTime: `${pad2(remainTime.hour)}:${pad2(remainTime.min)}`,
    })
  }

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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextField
            id="standard-number"
            label="월~목 근무시간"
            value={this.state.workTime}
            onChange={this.onChangeWorkingTime}
            type="number"
            // defaultValue={8}
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
            label="Friday 출근시간"
            type="time"
            // defaultValue="08:00"
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
            color="default"
            onClick={this.onApplyClick}
          >
            {'적용'}
          </Button>
        </div>
      </>
    )
  }
} 

export default NewWorkingTimePage;
