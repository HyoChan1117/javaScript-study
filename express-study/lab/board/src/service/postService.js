// Repository 계층을 가져옴 (DB 직접 접근은 여기서 담당)
const postRepository = require('../repository/postRepository');

// 전체 게시글 목록 조회
async function getAllPosts() {
  // 별도 비즈니스 로직 없이 repository에 위임
  return postRepository.findAll();
}

// 특정 게시글 단건 조회
async function getPostById(id) {
  const post = await postRepository.findById(id);
  // 게시글이 없으면 404 에러 생성 후 throw
  if (!post) {
    const err = new Error('Post not found');
    err.status = 404;
    throw err;
  }
  return post;
}

// 게시글 생성
async function createPost({ title, content, author }) {
  // 필수 필드 누락 시 400 에러 throw
  if (!title || !content || !author) {
    const err = new Error('title, content, author are required');
    err.status = 400;
    throw err;
  }
  return postRepository.create({ title, content, author });
}

// 게시글 수정
async function updatePost(id, { title, content }) {
  // 수정할 내용이 없으면 400 에러 throw
  if (!title || !content) {
    const err = new Error('title and content are required');
    err.status = 400;
    throw err;
  }
  const post = await postRepository.update(id, { title, content });
  // 해당 id의 게시글이 없으면 404 에러 throw
  if (!post) {
    const err = new Error('Post not found');
    err.status = 404;
    throw err;
  }
  return post;
}

// 게시글 삭제
async function deletePost(id) {
  const deleted = await postRepository.remove(id);
  // 삭제된 행이 없으면 (id가 존재하지 않으면) 404 에러 throw
  if (!deleted) {
    const err = new Error('Post not found');
    err.status = 404;
    throw err;
  }
}

// 각 함수를 외부에서 사용할 수 있도록 내보냄
module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
