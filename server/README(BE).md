## 🏃 실행 방법

1. 레포지토리 클론

   ```bash
    <!-- 프론트 레포지토리 -->
   git clone "https://kdt-gitlab.elice.io/sw_track/class_03/web_project_2/team15/initialization"

    <!-- 서버 레포지토리 -->
   git clone "https://kdt-gitlab.elice.io/sw_track/class_03/web_project_2/team15/server.git"
   ```

2. 필요한 module 설치

   ```bash
   <!-- 프론트 레포 yarn 사용-->
   yarn instll
    <!-- 서버 레포 npm 사용 -->
   npm install
   ```

3. `.env` 설정

    프론트

    ```bash
    REACT_APP_KAKAOMAP_API_KEY=<카카오맵 api key>
    REACT_APP_SERVER_URL=<백 서버 url>
    ```

    백

      ```bash

        AWS_MYSQL_URL: <AWS RDB url>
        AWS_MYSQL_USER: <AWS RDB User>
        AWS_MYSQL_DATABASE: <AWS RDB DB_name>
        AWS_MYSQL_PASSWORD: <AWS DB password>
        AWS_MYSQL_PORT:<AWS Port>
        PORT=<서버실행시 사용할 포트 번호> 
    ```
    
4. express 앱을 실행

    프론트 레포
   ```
   yarn start
   ```
    서버 레포
    ```
    npm start
    ```

## 🪪 테스트 계정
  ```
  ID: test@elice.com
  PW: qwer1234! 
  ```

## 👨‍👩‍👦‍👦 Responsibility
| 담당자명(GitHub) | 담당 파트 |
| --- | --- |
| 선아 [@sunnao](https://github.com/sunnao) | 홈, 카페리스트페이지, 매칭이력 페이지&팀원평가창 연결 |
| 소진 [@sojinjang](https://github.com/sojinjang) | 지도 기능, 프론트 배포, msw |
| 재웅 [@wooooooongs](https://github.com/wooooooongs) | 모집 리스트, 글쓰기, 프로필 모달창, 페이지네이션 |
| 동현 [@cham0287](https://github.com/cham0287) | 홈, 로그인, 회원가입, 회원정보 수정, 네비바 |
| 지현 [@ULemong](https://github.com/ULemong) | 마이페이지, 매칭 이력 페이지, 모집 글 신청/취소하기(참가자), 참가 신청자 강제 퇴장(방장), 프로필 모달창 |
| 동하 [@donggram2](https://github.com/donggram2) | 유저관련 API, 팀원평가 API, 모집글 참여현황 API, 카페정보 API |
| 승빈 [@kkssbbb](https://github.com/kkssbbb) | 지도관련API, 모집게시글관련API , 이미지 업로드 API,  백엔드 배포, https 설정 |

## 🗂 서버 erd 구조
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/89888075/210206564-ea36859e-f129-460c-9b6b-72fe0d0e99ed.png">


## 🗂 서버 디렉토리 구조 및 의존성
<img width="1197" alt="image" src="https://user-images.githubusercontent.com/89888075/210204519-72ee3e3b-5d46-40a3-aae6-8e5d5c0e4a23.png">
