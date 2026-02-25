// Service 계층 가져오기
const postService = require('../service/postService');

// GET /api/posts - 전체 게시글 조회
async function getAll(req, res, next) {
  try {
    // postService.getAllPosts()를 json 형식으로 응답
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
}

// GET /api/posts/:id - 특정 게시글 조회
async function getOne(req, res, next) {
  try {
    // req.params.id는 문자열이므로 Number()로 숫자 변환
    const post = await postService.getPostById(Number(req.params.id));
    res.json(post);
  } catch (err) {
    next(err);
  }
}

// POST /api/posts - 게시글 생성
async function create(req, res, next) {
  try {
    // req.body에서 title, content, author를 받아 Service에 전달
    const post = await postService.createPost(req.body);
    res.status(201).json(post);  // 201 Created 응답
  } catch (err) {
    next(err);
  }
}

// PUT /api/posts/:id - 게시글 수정
async function update(req, res, next) {
  try {
    const post = await postService.updatePost(Number(req.params.id), req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
}

// DELETE /api/posts/:id - 게시글 삭제
async function remove(req, res, next) {
  try {
    await postService.deletePost(Number(req.params.id));
    res.status(204).end();  // 204 No Content: 삭제 성공, 응답 본문 없음
  } catch (err) {
    next(err);
  }
}

// 각 함수 내보내기
module.exports = { getAll, getOne, create, update, remove };