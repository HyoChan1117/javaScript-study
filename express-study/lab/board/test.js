// .env 파일에서 환경 변수 로드
require('dotenv').config();

// express 모듈 가져오기
const express = require('express');

// postRouter 모듈 가져오기
const postRouter = require('./src/router/postRouter');

// app 인스턴스 생성
const app = express();

// 포트 번호 설정
const PORT = process.env.PORT || 3000;

// JSON 형태의 요청 본문을 파싱하는 미들웨어 등록
app.use(express.json());

// '/api/posts' 경로로 들어오는 요청은 postRouter가 처리하도록 라우팅
app.use('/api/posts', postRouter);

// 에러 처리 미들웨어 등록
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
