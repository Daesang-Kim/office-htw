import {
  // Button,
  TextField,
  // WithStyles,
} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {
  getAdditionalMinutes,
  // toNumber,
  minutesToHourMin,
  pad2,
  totalWorkMinWeek
} from './calculation'
// import styles from './WorkingTimePageStyled';
interface IState {
  workTimeMon: number | string,
  workTimeTue: number | string,
  workTimeWed: number | string,
  workTimeThu: number | string,
  comeToOfficeTimeFri: string,
  canOutOfOfficeTime: string,
  remainTime: string,
  totalWorkingTime: string,
}

class WorkingTimePage extends React.Component<{}, IState> {
  public state: IState = {
    canOutOfOfficeTime: "계산 전",
    comeToOfficeTimeFri: "08:00",
    remainTime: "계산 전",
    totalWorkingTime: "00:00",
    workTimeMon: 8,
    workTimeThu: 8,
    workTimeTue: 8,
    workTimeWed: 8,
  }

  public componentDidMount() {
    this.onApplyClick()
  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.onApplyClick()
    }
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
      const value = e.currentTarget.value === '' ? '' : Number.parseFloat(e.currentTarget.value)
      this.setState({
        workTimeMon: value,
      });
    }
  }
  
  public onChangeWorkingTimeThusday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      const value = e.currentTarget.value === '' ? '' : Number.parseFloat(e.currentTarget.value)
      this.setState({
        workTimeTue: value,
      });
    }
  }

  public onChangeWorkingTimeWednesday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      const value = e.currentTarget.value === '' ? '' : Number.parseFloat(e.currentTarget.value)
      this.setState({
        workTimeWed: value,
      });
    }
  }

  public onChangeWorkingTimeThursday = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (this.IsNumber(e.currentTarget.value)) {
      const value = e.currentTarget.value === '' ? '' : Number.parseFloat(e.currentTarget.value)
      this.setState({
        workTimeThu: value,
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

  public onApplyClick = () => {
    const {
      workTimeMon,
      workTimeTue,
      workTimeWed,
      workTimeThu,
      comeToOfficeTimeFri,
    } = this.state;

    // 총 근무시간 계산
    const doneTime = totalWorkMinWeek({
      workTimeMon,
      workTimeTue,
      workTimeWed,
      workTimeThu,
    })

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

    const additionalMinutes = getAdditionalMinutes(remainTotalMin);

    const officeTimeFriday = comeToOfficeTimeFri.split(':');
    const comeToOfficeDate = new Date(0, 0, 2, Number(officeTimeFriday[0]), Number(officeTimeFriday[1]), 0);
    comeToOfficeDate.setMinutes(comeToOfficeDate.getMinutes() + remainTotalMin + additionalMinutes);
    this.setState({
      canOutOfOfficeTime: `${pad2(comeToOfficeDate.getHours())}:${pad2(comeToOfficeDate.getMinutes())}`,
      remainTime: `${pad2(remainTime.hour)}:${pad2(remainTime.min)}`,
      totalWorkingTime: `${pad2(doneTime.hour)}:${pad2(doneTime.min)}`,
    })
  }


  public onChangeComeToOfficeTime = (e: any) => {
    this.setState({
      comeToOfficeTimeFri: e.currentTarget.value,
    });
  }

  public render() {
    return (
      <div style={{ display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
          <TextField
            id="standard-number"
            label="Monday"
            value={this.state.workTimeMon}
            onChange={this.onChangeWorkingTimeMonday}
            type="number"
            // defaultValue="8"
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
            // defaultValue="8"
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
            // defaultValue="8"
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
            // defaultValue="8"
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div id="empty-div" style={{ flex: 1 }} />
          <Typography variant="h5" component="div" style={{ color: 'darkgray' }}>
            전체 근무 시간
          </Typography>
          <Typography variant="body2" style={{ textAlign: 'end' }}>
            {this.state.totalWorkingTime}
          </Typography>
          <Typography variant="h5" component="div" style={{ color: 'darkgray' }}>
            남은 근무 시간
          </Typography>
          <Typography variant="body2" style={{ textAlign: 'end' }}>
            {this.state.remainTime}
          </Typography>
          <Typography variant="h5" component="div" style={{ color: 'darkgray' }}>
            퇴근 가능 시간
          </Typography>
          <Typography variant="body2" style={{ textAlign: 'end' }}>
            {this.state.canOutOfOfficeTime}
          </Typography>
        </div>
      </div>
    )
  }
} 

export default WorkingTimePage;
