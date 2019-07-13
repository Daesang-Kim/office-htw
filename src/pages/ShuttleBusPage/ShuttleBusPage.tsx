import * as React from 'react';
const colSpan = 2;
const ShuttleBusPage = () => (
    <>
      <h2>셔틀버스</h2>
      <div style={{display: 'flex'}}>
        <table style={{border: '1px solid'}}>
          <tr>
            <td colSpan={colSpan}>{'야탑 출근 버스'}</td>
          </tr>
          <tr>
            <th>어린이집</th>
            <th>야탑역</th>
          </tr>
          <tr>
            <td>07:05</td>
            <td>07:10</td>
          </tr>
          <tr>
            <td>07:35</td>
            <td>07:40</td>
          </tr>
          <tr>
            <td>07:55</td>
            <td>08:00</td>
          </tr>
          <tr>
            <td>08:15</td>
            <td>08:20</td>
          </tr>
          <tr>
            <td>08:35</td>
            <td>08:40</td>
          </tr>
        </table>

        <table style={{border: '1px solid'}}>
          <tr>
            <td colSpan={colSpan}>{'야탑 퇴근 버스'}</td>
          </tr>
          <tr>
            <th>Sk Hub 앞</th>
          </tr>
          <tr>
            <td>17:30</td>
          </tr>
          <tr>
            <td>18:30</td>
          </tr>
          <tr>
            <td>19:30</td>
          </tr>
          <tr>
            <td>20:30</td>
          </tr>
        </table>
      </div>
    </>
)

export default ShuttleBusPage;
