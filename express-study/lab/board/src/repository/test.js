// DB 연결 불러오기
const pool = require('../database/db');

// 전체 게시글 조회
async function findAll() {
  // const sql = "SELECT * FROM posts ORDER BY created_at DESC";
  // const result = await pool.query(sql);
  // const rows = result.rows;
  const sql = "SELECT * FROM posts ORDER BY created_at DESC";
  const { rows } = await pool.query(sql);

  return rows;
}

// 특정 게시글 조회
async function findById(id) {
  const sql = "SELECT * FROM posts WHERE id=$1";
  const { rows } = await pool.query(sql, [id]);

  return rows[0] ?? null;
}

// 게시글 작성
async function create({ title, content, author }) {
  const sql = "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3)";
  const { rows } = await pool.query(sql, [title, content, author]);
  
  return rows[0];
}

// 게시글 수정
async function update(id, { title, content, author }) {
  const sql = "UPDATE post SET title=$1, content=$2, author=$3 WHERE id=$4";
  const { rows } = await pool.query(sql, [title, content, author, id]);

  return rows[0];
}

// 게시글 삭제
async function remove(id) {
  const sql = "DELETE FROM posts WHERE id=$1";
  const { rows } = await pool.query(sql, [id]);

  return rows[0];
}

// 외부에서 함수 접근할 수 있도록 내보내기
module.exports(findAll, findById, create, update, remove);