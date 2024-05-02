
import * as React from 'react';
import { useState } from 'react';
import {
  minutesToHourMin,
  pad2,
} from '../../../utils/calculation'
// import styles from './NewWorkingTimePageStyled';
import NewWorkingTimePageView from './NewWorkingTimePageView';

// interface IProps extends WithStyles<typeof styles> {
  
// }

interface IState {
  workTime: number | string,
  comeToOfficeTimeFri: string,
  canOutOfOfficeTime: string,
  remainTime: string,
}

const NewWorkingTimePage = () => {
  const [state, setState] = useState<IState>({
    canOutOfOfficeTime: "--:--",
    comeToOfficeTimeFri: "08:00",
    remainTime: "--:--",
    workTime: 32,
  })

  const IsNumber = (value: string | number): boolean => {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return true;
    }
    if (value === '' || (typeof value === 'string' && Number.parseFloat(value))) {
      return true;
    }
    return false;
  }

  const onChangeWorkingTime = (e:React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    if (IsNumber(e.currentTarget.value)) {
      const value = e.currentTarget.value === '' ? '' : Number.parseFloat(e.currentTarget.value)
      setState({
        ...state,
        workTime: value,
      });
    }
  }

  const toNumber = (value: any) : number => Number.isNaN(value) ? 0 : value;

  const onApplyClick = () => {
    const {
      workTime,
      comeToOfficeTimeFri,
    } = state;

    // 총 근무시간 계산
    const workHourWeekToMin = (
      Math.floor(toNumber(workTime))) * 60;
    const workMinWeek = Math.round(
      toUnderPointNumber(toNumber(workTime))
      + workHourWeekToMin);

    const doneTime = minutesToHourMin(workMinWeek);

    // 남은 시간 계산
    const totalDate = new Date(0, 0, 1, doneTime.hour, doneTime.min, 0);
    const fourtyHour = new Date(0, 0, 1, 40, 0, 0);
    let remainTotalMin = (fourtyHour.getTime() - totalDate.getTime()) / 1000 / 60;
    const remainTime = minutesToHourMin(remainTotalMin);

    if (remainTotalMin <= 240) {
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
    setState({
      ...state,
      canOutOfOfficeTime: `${pad2(comeToOfficeDate.getHours())}:${pad2(comeToOfficeDate.getMinutes())}`,
      remainTime: `${pad2(remainTime.hour)}:${pad2(remainTime.min)}`,
    })
  }

  const onChangeComeToOfficeTime = (e: any) => {
    setState({
      ...state,
      comeToOfficeTimeFri: e.currentTarget.value,
    });
  }

  const toUnderPointNumber = (time: number) => (time - Math.floor(time)) * 100;
  
  
  return (
    <NewWorkingTimePageView
      onChangeComeToOfficeTime={onChangeComeToOfficeTime}
      onApplyClick={onApplyClick}
      onChangeWorkingTime={onChangeWorkingTime}
      canOutOfOfficeTime={state.canOutOfOfficeTime}
      comeToOfficeTimeFri={state.comeToOfficeTimeFri}
      remainTime={state.remainTime}
      workTime={state.workTime}
    />
  )
} 

export default NewWorkingTimePage;
