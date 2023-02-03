# 🤗 방가방가 (bang-ga-bang-ga)

```
방탈출 러버 여기 모여라! 🙋‍♀️
난이도 최상인 테마를 깨고 싶은데 주변에 방탈출 고수가 없거나 
함께 할 친구가 없어서 절망했던 경험 있으신가요? 🤔 
방가방가에서 손쉽게 프로 방탈출러 멤버를 구해보세요! 🧞‍♂️
```
<br/>

[📎 <strong>서비스 링크 이동하기</strong>](http://kdt-sw3-team15.elicecoding.com/)
>  🔐 <strong>테스트 계정</strong>   
  ID : test@elice.com   
  PW : qwer1234!
<br/>

<img src="https://user-images.githubusercontent.com/62415003/211723812-8287631d-862c-4109-aa34-76633eb408e4.gif" width="600">
<br/>

## 🤹 서비스 주요 기능
- 원하는 시간대, 방탈출 카페를 지정해서 멤버 모집글 등록
- 프로필에 작성된 MBTI, 선호 테마등의 정보를 확인한 뒤 함께하고 싶은 멤버 수락
- 매칭 이후 멤버들끼리 탈출 레벨, 매너 점수 평가 및 한줄평 등록
- 누적된 점수에 따라 등급 변화
- 모집 중인 게시글은 리스트 또는 지도로 확인 가능
- 서울 내 인기 지역별 방탈출 카페 조회
<br/>

## 🎞 페이지 별 시연 영상보기
<details open><summary>홈화면</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724032-8add13f3-bb57-43db-8215-19251293792d.gif" width="960">
</details>
<details><summary>모집글 리스트로 보기</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724267-7bdb2308-9b5a-4b3e-af26-e93a058f3967.gif" width="960">
</details>
<details><summary>모집글 지도로 보기</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724299-611b6d15-bdd5-4e40-9419-d87823642ab0.gif" width="960">
</details>
<details><summary>모집글 상세보기 - 방장</summary>
<img src="https://user-images.githubusercontent.com/89888075/210947134-e578aeca-7b7f-43b5-8293-9a22d701a452.gif" width="960">
</details>
<details><summary>모집글 상세보기 - 참가자</summary>
<img src="https://user-images.githubusercontent.com/89888075/210947101-5b14b22d-82a2-4668-8209-35f6494ef943.gif" width="960">
</details>
<details><summary>서울지역 카페리스트 보기</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724311-ed721659-c302-4c03-979b-e1960aa727dd.gif" width="960">
</details>
<details><summary>회원가입</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724323-d18d89b4-8ff7-4e12-9c5c-f04a4a141798.gif" width="960">
</details>
<details><summary>로그인</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724336-7fb5ac59-2d14-4c16-92f1-c4fb88cc0b34.gif" width="960">
</details>
<details><summary>마이페이지 - 회원정보수정</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724349-89a5d985-af72-4698-b47f-a47ab1bd76db.gif" width="960">
</details>
<details><summary>마이페이지 - 팀원평가</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724824-b2dcaa22-39d9-4923-a389-655b1d685c19.gif" width="960">
</details>
<details><summary>마이페이지 - 매칭이력</summary>
<img src="https://user-images.githubusercontent.com/62415003/211724857-c18cd285-e698-4c52-9d23-487ff180a04b.gif" width="960">
</details>
<br/>

---
<br/>

## 🛠 기술 스택

<img src="https://user-images.githubusercontent.com/62415003/211724999-cb545695-63d3-49bb-ab86-6f1ac26f0302.png" width="960">
<br/>

## 🗂 프론트 디렉토리 구조
<details open>
<summary>client 디렉토리 구조 보기</summary>

```markdown
📦client
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂backgrounds
 ┃ ┃ ┣ 📂cafes
 ┃ ┃ ┣ 📂icon
 ┃ ┃ ┗ 📂user-profile
 ┃ ┣ 📂sounds
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┣ 📂backgrounds
 ┃ ┃ ┃ ┣ 📂icon
 ┃ ┃ ┃ ┗ 📂user-profile
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📂mypageEdit
 ┃ ┃ ┣ 📂recruit
 ┃ ┃ ┣ 📂recruit-detail
 ┃ ┃ ┗ 📂recruit-map
 ┃ ┣ 📂constants
 ┃ ┣ 📂mocks
 ┃ ┣ 📂modals
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜CafeList.css
 ┃ ┃ ┣ 📜CafeList.jsx
 ┃ ┃ ┣ 📜Home.css
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┣ 📜MatchingList.jsx
 ┃ ┃ ┣ 📜MyPage.jsx
 ┃ ┃ ┣ 📜MypageEdit.jsx
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┣ 📜RecruitDetail.jsx
 ┃ ┃ ┣ 📜RecruitList.jsx
 ┃ ┃ ┣ 📜RecruitMap.jsx
 ┃ ┃ ┗ 📜Register.jsx
 ┃ ┣ 📂recoil
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂recruit-list
 ┃ ┃ ┣ 📂recruit-map
 ┃ ┃ ┗ 📂register
 ┃ ┣ 📂router
 ┃ ┗ 📂utils
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜.yarnrc.yml
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js
```
</details>
<br/>

## 🗂 서버 디렉토리 구조 및 의존성
<details open>
  <summary>server 디렉토리 구조 보기</summary>
<img width="1197" alt="image" src="https://user-images.githubusercontent.com/89888075/210204519-72ee3e3b-5d46-40a3-aae6-8e5d5c0e4a23.png">
</details>
<br/>

## 🗂 서버 erd 구조
<details open>
  <summary>erd 구조 보기</summary>
  <img width="1437" alt="image" src="https://user-images.githubusercontent.com/89888075/210206564-ea36859e-f129-460c-9b6b-72fe0d0e99ed.png">
</details>
<br/>

---
<br/>


## 🏃 로컬 실행 방법
1. 레포지토리 클론

  ```bash
  git clone "https://github.com/sunnao/EscapeRoom-Crew_ReactProject.git"
  ```
<br/>

2. 서버 설정 및 실행
    <details>
    <summary>2-1. 디렉토리 이동
    
    ...</summary>
      
      ```bash
      cd server
      ```
    2-2. 필요한 module 설치
      ```bash
      npm install
      ```
    2-3. `.env` 설정
      ```bash
        AWS_MYSQL_URL: <AWS RDB url>
        AWS_MYSQL_USER: <AWS RDB User>
        AWS_MYSQL_DATABASE: <AWS RDB DB_name>
        AWS_MYSQL_PASSWORD: <AWS DB password>
        AWS_MYSQL_PORT: <AWS Port>
        PORT = <서버 실행 시 사용할 포트 번호>
      ```
    2-4. express 앱 실행
      ```bash
      npm start
      ```
    </details>
<br/>
  
3. 프론트 설정 및 실행
    <details>
    <summary>3-1. 디렉토리 이동

    ...</summary>
      
      ```bash
      cd client
      ```
    3-2. 필요한 module 설치
      ```bash
      yarn install
      ```
    3-3. `.env` 설정
      ```bash
      REACT_APP_KAKAOMAP_API_KEY=<카카오맵 api key>
      REACT_APP_SERVER_URL=<백 서버 url>
      ```
      ```bash
      #선택사항 - MSW(Mock Service Worker)
      REACT_APP_NODE_ENV=development # development로 설정 시 적용
      ```
    3-4. react 앱 실행
      ```bash
      yarn start
      ```
    </details>
<br/>

---
<br/>

## 👨‍👩‍👦‍👦 Responsibility

| 담당자명(GitHub) | 담당 파트 |
| --- | --- |
| 선아 [@sunnao](https://github.com/sunnao) | 홈, 카페리스트페이지, 매칭이력 페이지&팀원평가 연결 |
| 소진 [@sojinjang](https://github.com/sojinjang) | 지도 기능, 프론트 배포, msw |
| 재웅 [@wooooooongs](https://github.com/wooooooongs) | 모집 리스트, 글쓰기, 프로필 모달창, 페이지네이션 |
| 동현 [@cham0287](https://github.com/cham0287) | 홈, 로그인, 회원가입, 회원정보 수정, 네비바 |
| 지현 [@ULemong](https://github.com/ULemong) | 마이페이지, 매칭 이력 페이지, 모집 글 신청/취소하기(참가자), 참가 신청자 강제 퇴장(방장), 프로필 모달창 |
| 동하 [@donggram2](https://github.com/donggram2) | 유저관련 API, 팀원평가 API, 모집글 참여현황 API, 카페정보 API |
| 승빈 [@kkssbbb](https://github.com/kkssbbb) | 지도관련API, 모집게시글관련API , 이미지 업로드 API,  백엔드 배포 |
