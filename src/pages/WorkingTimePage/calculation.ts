/**
 * 숫자나 숫자형태의 string을 인자로 받아 0이 포함된 2자리 숫자로 표현한다. 2 -> 02, 12 -> 12, '2' -> 02
 * @param num 
 * @returns 
 */
export const pad2 = (num: string | number) => (Number(num) < 10 ? '0' : '') + num;

/**
 * 어떤 값이든 인자로 받아 숫자 형태로 변경 함. 숫자가 아닌경우 0을 반환 한다.
 * @param value 
 * @returns 
 */
export const toNumber = (value: any) : number => typeof value !== 'number' || Number.isNaN(value) ? 0 : value;

/**
 * 소수점 아래의 숫자에 100을 곱하여 2자리 숫자를 분으로 치환하여 반환한다.
 * @param time 
 * @returns 분
 */
const toUnderPointNumber = (time: number) => (time - Math.floor(time)) * 100;

/**
 * 분을 인자로 받아 시간, 분으로 나눠서 반환한다.
 * @param totalMinutes 
 * @returns 
 */
export const minutesToHourMin = (totalMinutes: number) => ({
    hour: Math.floor(totalMinutes / 60),
    min: totalMinutes % 60,
})

interface IWolMokSigan {
    workTimeMon: number | string;
    workTimeTue: number | string;
    workTimeWed: number | string;
    workTimeThu: number | string;
}
interface IHourMin {
    hour: number;
    min: number;
}

/**
 * 월화수목 입력값을 받아 전체 시간의 hour, min 값을 반환한다.
 * @param param 
 * @returns 
 */
export const totalWorkMinWeek = (param: IWolMokSigan) : IHourMin => {
    const {
        workTimeMon,
        workTimeTue,
        workTimeWed,
        workTimeThu,
    } = param;
    const workHourWeekToMin = (
        Math.floor(toNumber(workTimeMon)) + 
        Math.floor(toNumber(workTimeTue)) +
        Math.floor(toNumber(workTimeWed)) +
        Math.floor(toNumber(workTimeThu))) * 60;
    const workMinWeek = Math.round(
        toUnderPointNumber(toNumber(workTimeMon))
        + toUnderPointNumber(toNumber(workTimeTue))
        + toUnderPointNumber(toNumber(workTimeWed))
        + toUnderPointNumber(toNumber(workTimeThu))
        + workHourWeekToMin);
  
      return minutesToHourMin(workMinWeek);
}

export const getAdditionalMinutes = (remainTotalMin: number) : number => {
    let additionalMinutes = 30;
    if (remainTotalMin < 480) { // 8시간 미만
      additionalMinutes = 30;
    } else if (remainTotalMin < 720) {  // 8시간이상~12시간미만
      additionalMinutes = 60;
    } else if (remainTotalMin < 960) {  // 12시간이상~16시간미만
      additionalMinutes = 90;
    }
    return additionalMinutes; 
}