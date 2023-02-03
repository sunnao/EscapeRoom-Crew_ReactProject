## 🏃 프론트 실행 방법

1. 레포지토리 클론

   ```bash
   git clone "https://github.com/sunnao/EscapeRoom-Crew_ReactProject.git"
   ```
2. 디렉토리 이동
   ```bash
   cd client
   ```
2. 필요한 module 설치

   ```bash
   yarn install
   ```

3. `.env` 설정

    ```bash
    REACT_APP_KAKAOMAP_API_KEY=<카카오맵 api key>
    REACT_APP_SERVER_URL=<백 서버 url>
    ```
    ```bash
    #선택사항 - msw(Mock Service Worker)
    REACT_APP_NODE_ENV=development # development로 설정 시 적용
    ```

4. react 앱 실행

   ```bash
   yarn start
   ```
<br/>

---
<br/>

## 🗂 디렉토리 구조
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
