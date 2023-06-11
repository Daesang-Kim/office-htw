import * as React from 'react';
import {
  UpdateDescription,
} from './ImfoPageStyled';

const InfoPage = () => (
  <div>
    <UpdateDescription new>
      {'2023.06.11'}<br />
      {'- LocalStorage를 사용하여 쓰던 값을 저장해두고 사용하도록 수정'}<br />
      {'- 쓰던 값을 Reset 할 수 있도록 수정'}<br />
      {'- 일부 스타일 수정'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2023.06.07'}<br />
      {'- BottomNavigation 에 Router 적용'}<br />
      {'- 앱 이름 변경'}<br />
      {'- 뉴스를 불필요하게 부르지 않도록 수정'}<br />
      {'- 한화비전 뉴스 검색하도록 수정'}<br />
      {'- iPhone에서만 퇴근시간계산VER2의 숫자에 점(.) 안들어가는 문제 수정'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2022.02.12'}<br />
      {'- PWA 적용. Web 기반 앱 설치 가능'}<br />
      {'- firebase version update'}<br />
      {'- UI/UX 개선'}<br />
      {'- 접속 URI 변경'}<br />
      {'- 한화테크윈 기사 검색 및 노출'}<br />
      {'- 전체 메뉴 리뉴얼'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2021.05.05'}<br />
      {'- 하단 메뉴로 UX를 변경'}<br />
      {'- 전체 SW Warning 수정'}<br />
      {'- 한줄 평 최신 글이 가장 위로 보이도록 수정'}<br />
      {'- 스크롤 시 하단 메뉴때문에 내용이 가려지는 문제 수정'}<br />
      {'- 전체 스타일 수정'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2021.05.04'}<br />
      {'- fun 페이지'}<br />
      {'- 한줄 평 추가'}<br />
      {'- DB 연동 완료'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2021.04.22'}<br />
      {'- animal 페이지를 fun 페이지로 변경'}<br />
      {'- Header 가 길어져 media query 적용 하여 font-size 조절 함'}<br />
      {'- 이미지 접기/펼치기 기능 추가'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2021.04.19'}<br />
      {'- animal 페이지 추가'}<br />
      {'- 동물 그림들 추가하려고 만들었는데, 지아 사진과 함께 올려버림.. (응?)'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
      {'2020.12.20'}<br />
      {'- 마지막 업로드 시간을 저장'}<br />
      {'- 업로드 시간을 보고 이번주 업데이트 여부를 판단 가능'}<br />
    </UpdateDescription>
    <hr />
    <UpdateDescription>
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
