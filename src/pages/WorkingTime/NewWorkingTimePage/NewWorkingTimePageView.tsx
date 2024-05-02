import {
    Button,
    TextField,
} from '@material-ui/core';
import * as React from "react";

interface IProps {
    canOutOfOfficeTime:string;
    remainTime:string;
    workTime:number|string;
    comeToOfficeTimeFri:string;
    onChangeWorkingTime:(e:any)=>void;
    onChangeComeToOfficeTime:(e:any)=>void;
    onApplyClick:(e:any)=>void;
}

const NewWorkingTimePageView = ({
    canOutOfOfficeTime,
    remainTime,
    workTime,
    comeToOfficeTimeFri,
    onChangeWorkingTime,
    onChangeComeToOfficeTime,
    onApplyClick,
}:IProps) => {
    return (
        <>
        <span>
          <h2 style={{display: 'inline-block'}}>
            {'퇴근가능시간은?'}
          </h2>
        </span>
        <span>
          <h3 style={{display: 'inline-block', color: 'red'}}>
            {canOutOfOfficeTime}
          </h3>
        </span>
        <h3>
          {'남은시간'}
          {remainTime}
        </h3>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextField
            id="standard-number"
            label="월~목 근무시간"
            value={workTime}
            onChange={onChangeWorkingTime}
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
            onChange={onChangeComeToOfficeTime}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 60, // 1 min
            }}
            value={comeToOfficeTimeFri}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={onApplyClick}
          >
            {'적용'}
          </Button>
        </div>
      </>
    )
}

export default NewWorkingTimePageView;