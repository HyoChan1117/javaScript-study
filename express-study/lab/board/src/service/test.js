// Repository 계층 가져오기
const postRepository = require('../repository/postRepository');

// 전체 게시글 목록 조회
async function getAllPosts() {
  return postRepository.findAll();
}

// 특정 게시글 조회
async function getPostById(id) {
  const post = await postRepository.findById(id);

  // 게시글이 없으면 404 에러 생성 후 throw
  if (!post) {
    const err = new Error('게시물이 없습니다.');
    err.status = 404;
    throw err;
  }
  return post;
}

// 게시글 생성
async function createPost({ title, content, author }) {
  // 필수 필드 누락 시 400 에러 throw
  if (!title || !content || !author) {
    const err = new Error('제목, 내용, 작성자 입력은 필수입니다.');
    err.status = 400;
    throw err;
  }

  return postRepository.create({ title, content, author });
}

// 게시글 수정
async function updatePost(id, { title, content, author }) {
  // 수정할 내용이 없으면 400 에러 throw
  if (!title || !content || !author) {
    const err = new Error('제목, 내용, 작성자 입력은 필수입니다.');
    err.status = 400;
    throw err;
  }
  const post = await postRepository.update(id, { title, content, author });

  // 해당 id의 게시글이 없으면 404 에러 throw
  if (!post) {
    const err = new Error('게시물을 찾을 수 없습니다.');
    err.status = 404;
    throw err;
  }
  return post;
}

// 게시글 삭제
async function deletePost(id) {
  const deleted = await postRepository.remove(id);

  // 삭제된 행이 없으면 404 에러 throw
  if (!deleted) {
    const err = new Error('게시물을 찾을 수 없습니다.');
    err.status = 404;
    throw err;
  }
}

// 각 함수 내보내기
module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };