import * as React from 'react';
import {
  UpdateDescription,
} from './ImfoPageStyled';

const InfoPage = () => (
  <div>
    <hr />
    <UpdateDescription new>
      {'2020.11.27'}<br />
      {'- 아무나 업로드 하면 안되기 때문에, 패스워드 걸어둠'}<br />
      {'- 패스워드는 비밀이나, 소스보기로 찾을 수는 있음'}<br />
      {'- 누군가 올려도 별 문제 없을것같아서 암호화 안함'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2020.11.22'}<br />
      {'- 1년만에 SW 업데이트'}<br />
      {'- 이미지 파일 업로드 하여 메뉴 이미지 표시하도록 수정 함'}<br />
      {'- (매번 이미지 파일을 올린 후 새로 빌드 해야 하는 문제점 수정 건임)'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2019.11.20'}<br />
      {'- 상단 글자색 흰색으로 변경 (배경색과 겹쳐서 안보인다는 의견 반영)'}<br />
      {'- 방문한 페이지 표시하는 기능 제거 (거슬린다는 의견)'}<br />
      {'- styled-components 적용'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2019.11.17'}<br />
      {'- Nu퇴능 추가: 월~목 확정근무시간만 입력하여 확인 가능 기능 추가'}<br />
      {'- 시간을 00:00 표기함 (기존에는 7:3 -> 07:03)'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2019.11.09'}<br />
      {'- 근무시간 4시간 이하일 경우 계산로직 수정 '}<br />
      {'- 시간 입력시 모두 지우면 0으로 변경되는 구문 수정 '}<br />
      {'- 셔틀버스 금요일 예외 시간 명시 '}<br />
      {'- 정보 탭 추가하여 히스토리 관리 '}<br />
    </UpdateDescription>
    <hr />
  </div>
)

export default InfoPage;
