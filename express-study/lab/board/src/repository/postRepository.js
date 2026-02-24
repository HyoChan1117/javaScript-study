// DB 연결 풀을 가져옴
const pool = require('../database/db');

// 모든 게시글 조회 (최신순 정렬)
async function findAll() {
  // pool.query()로 SQL 실행, 결과에서 rows만 추출
  // const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
  // const rows = result.rows;
  const { rows } = await pool.query(
    'SELECT * FROM posts ORDER BY created_at DESC'
  );
  return rows;
}

// id로 특정 게시글 조회
async function findById(id) {
  // $1은 파라미터 플레이스홀더 → SQL 인젝션 방지
  const { rows } = await pool.query(
    'SELECT * FROM posts WHERE id = $1',
    [id]
  );
  // rows[0]: 첫 번째 행, 없으면 ?? null로 null 반환
  return rows[0] ?? null;
}

// 새 게시글 생성
async function create({ title, content, author }) {
  // RETURNING *: INSERT 후 삽입된 행을 바로 반환
  const { rows } = await pool.query(
    'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
    [title, content, author]
  );
  return rows[0];
}

// 게시글 수정 (제목, 내용만 수정 가능)
async function update(id, { title, content }) {
  // WHERE id = $3으로 해당 게시글만 업데이트
  const { rows } = await pool.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  // 해당 id가 없으면 rows[0]이 undefined → null 반환
  return rows[0] ?? null;
}

// 게시글 삭제
async function remove(id) {
  // rowCount: 실제로 삭제된 행의 수
  const { rowCount } = await pool.query(
    'DELETE FROM posts WHERE id = $1',
    [id]
  );
  // 1 이상이면 삭제 성공(true), 0이면 해당 id 없음(false)
  return rowCount > 0;
}

// 각 함수를 외부에서 사용할 수 있도록 내보냄
module.exports = { findAll, findById, create, update, remove };
