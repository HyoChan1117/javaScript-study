// DB 연결 풀 가져오기
const pool = require('../database/db');

// 모든 게시글 조회
async function findAll() {
  // pool.query()로 SQL 실행 후 결과에서 rows만 추출
  const sql = "SELECT * FROM posts ORDER BY created_at DESC";
  const result = await pool.query(sql);
  const rows = result.rows;

  // rows 반환
  return rows;
}

// id로 특정 게시글 조회
async function findById(id) {
  const sql = "SELECT * FROM posts WHERE id = $1";

  // SQL 인젝션 방지 처리
  const result = await pool.query(sql, [id]);
  const rows = result.rows;

  // rows 반환
  return rows[0] ?? null;
}

// 새 게시글 생성
async function create(id, { title, content, author }) { 
  const sql = "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3)";
  const result = await pool.query(sql, [title, content, author]);
  const rows = result.rows;

  return rows[0];
}

// 게시글 수정
async function update(id, { title, content, author }) {
  const sql = "UPDATE posts SET title = $1, content = $2, author = $3 WHERE id = $4";
  const result = await pool.query(sql, [title, content, author, id]);
  const rows = result.rows;

  return rows[0] ?? null;
}

// 게시글 삭제
async function remove(id) {
  const sql = "DELETE FROM posts WHERE id = $1";
  const result = await pool.query(sql, [id]);
  const rowCount = result.rowCount;

  return rowCount > 0;
}

// 각 함수를 외부에서 사용할 수 있도록 내보내기
module.exports = { findAll, findById, create, update, remove };