// pg 라이브러리에서 Pool 클래스만 가져옴
const { Pool } = require('pg');

// .env 파일의 환경변수로 PostgreSQL 연결 설정
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

// pool 인스턴스 내보내기
module.exports = pool;