import * as React from 'react';
const colSpan = 2;
const YatabShuttle = () => (
  <div style={{ display: 'flex', ['flex-direction']: 'column'}}>
    <table style={{
      border: '1px solid',
    }}>
      <tr>
        <td style={{['text-align']: 'center'}} colSpan={colSpan}>{'야탑 출근 버스'}</td>
      </tr>
      <tr>
        <th>어린이집</th>
        <th>야탑역</th>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>07:05</td>
        <td style={{['text-align']: 'center'}}>07:10</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>07:35</td>
        <td style={{['text-align']: 'center'}}>07:40</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>07:55</td>
        <td style={{['text-align']: 'center'}}>08:00</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>08:15</td>
        <td style={{['text-align']: 'center'}}>08:20</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>08:35</td>
        <td style={{['text-align']: 'center'}}>08:40</td>
      </tr>
    </table>
    <hr />
    <table style={{border: '1px solid'}}>
      <tr>
        <td style={{['text-align']: 'center'}} colSpan={colSpan}>{'야탑 퇴근 버스'}</td>
      </tr>
      <tr>
        <th>Sk Hub 앞</th>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>17:30</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>18:30</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>19:30</td>
      </tr>
      <tr>
        <td style={{['text-align']: 'center'}}>20:30</td>
      </tr>
    </table>
  </div>
)

export default YatabShuttle;
