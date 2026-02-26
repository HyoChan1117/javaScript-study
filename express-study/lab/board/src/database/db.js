// pg 라이브러리에서 Pool 클래스를 가져옴
// Pool: 여러 DB 연결을 미리 만들어두고 재사용하는 연결 풀
const { Pool } = require('pg');

// .env 파일의 환경변수로 PostgreSQL 연결 설정
const pool = new Pool({
  host: process.env.DB_HOST,         // DB 서버 주소
  port: Number(process.env.DB_PORT ?? 5432), // DB 포트 (기본 5432), 문자열을 숫자로 변환
  database: process.env.DB_NAME,     // 사용할 데이터베이스 이름
  user: process.env.DB_USER,         // DB 사용자 이름
  password: process.env.DB_PASSWORD, // DB 비밀번호
});

// pool 인스턴스를 다른 파일에서 사용할 수 있도록 내보냄
module.exports = pool;
