import * as React from 'react';
const colSpan = 3;
const SeohyunShuttle = () => (
  <div style={{display: 'flex', ['flex-direction']: 'column'}}>
    <table style={{border: '1px solid'}}>
      <tr>
        <td style={{['text-align']: 'center'}} colSpan={colSpan}>{'서현 출근 버스'}</td>
      </tr>
      <tr>
        <th>서현역공항버스</th>
        <th>낙생육교</th>
        <th>판교역1번출구</th>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>07:30</td>
        <td style={{['text-align']: 'center'}}>07:40</td>
        <td style={{['text-align']: 'center'}}>07:43</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>08:10</td>
        <td style={{['text-align']: 'center'}}>08:20</td>
        <td style={{['text-align']: 'center'}}>08:23</td>
      </tr>
    </table>
    <table style={{border: '1px solid'}}>
      <tr>
        <td style={{['text-align']: 'center'}} colSpan={3}>{'서현 퇴근 버스'}</td>
      </tr>
      <tr>
        <th>SK케미칼 앞</th>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>17:30</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
        <td style={{['text-align']: 'center'}}>서현역</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>18:00</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>18:30</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
        <td style={{['text-align']: 'center'}}>서현역</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>19:00</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>19:30</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
        <td style={{['text-align']: 'center'}}>서현역</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>20:30</td>
        <td style={{['text-align']: 'center'}}>판교역</td>
        <td style={{['text-align']: 'center'}}>서현역</td>
      </tr>
    </table>
  </div>
)

export default SeohyunShuttle;
