import * as React from 'react';

const InfoPage = () => (
  <div>
    <hr />
      {'2019.11.20'}<br />
      {'- 상단 글자색 흰색으로 변경 (배경색과 겹쳐서 안보인다는 의견 반영)'}<br />
      {'- 방문한 페이지 표시하는 기능 제거 (거슬린다는 의견)'}<br />
      {'- styled-components 적용'}<br />
    <hr />
      {'2019.11.17'}<br />
      {'- Nu퇴능 추가: 월~목 확정근무시간만 입력하여 확인 가능 기능 추가'}<br />
      {'- 시간을 00:00 표기함 (기존에는 7:3 -> 07:03)'}<br />
    <hr />
      {'2019.11.09'}<br />
      {'- 근무시간 4시간 이하일 경우 계산로직 수정 '}<br />
      {'- 시간 입력시 모두 지우면 0으로 변경되는 구문 수정 '}<br />
      {'- 셔틀버스 금요일 예외 시간 명시 '}<br />
      {'- 정보 탭 추가하여 히스토리 관리 '}<br />
    <hr />
  </div>
)

export default InfoPage;
