## 🏃 서버 실행 방법

1. 레포지토리 클론
    ```bash
    git clone "https://github.com/sunnao/EscapeRoom-Crew_ReactProject.git"
    ```

2. 디렉토리 이동 
    ```bash
    cd server
    ```
3. 필요한 module 설치
    ```bash
    npm install
    ```
4. `.env` 설정
    ```bash
      AWS_MYSQL_URL: <AWS RDB url>
      AWS_MYSQL_USER: <AWS RDB User>
      AWS_MYSQL_DATABASE: <AWS RDB DB_name>
      AWS_MYSQL_PASSWORD: <AWS DB password>
      AWS_MYSQL_PORT: <AWS Port>
      PORT = <서버 실행 시 사용할 포트 번호>
    ```
5. express 앱 실행
    ```bash
    npm start
    ```

<br/>

---
<br/>

## 🗂 서버 erd 구조
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/89888075/210206564-ea36859e-f129-460c-9b6b-72fe0d0e99ed.png">

<br/>

## 🗂 서버 디렉토리 구조 및 의존성
<img width="1197" alt="image" src="https://user-images.githubusercontent.com/89888075/210204519-72ee3e3b-5d46-40a3-aae6-8e5d5c0e4a23.png">
