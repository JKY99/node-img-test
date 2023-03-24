const http = require('http'); // http 모듈 import

// const server = http.createServer((req, res) => {...});

const express = require('express'); // express 모듈 import
const app = express(); // express 객체 생성
const path = require('path');

// img 폴더를 static 파일로 등록
app.use(express.static(path.join(__dirname, 'img')));

const cors = require('cors'); // cors 모듈 import
const corsOptions = {
  origin: '*', // 모든 도메인에서 접근 허용
  optionsSuccessStatus: 200,
};
// cors 미들웨어 등록
app.use(cors(corsOptions));

// 클라이언트 요청에 대해 mov01.png 파일을 제공
app.get('/api/mov01', (req, res) => {
  res.sendFile(path.join(__dirname, 'img/mov01.png'));
});

const port = 3000;
// 포트 3000으로 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
