// postController 모듈 가져오기
const postController = require('../controller/postController');

// express에서 Router 클래스를 가져옴
const { Router } = require('express');

// 라우터 인스턴스 생성
const router = Router();

// GET /api/posts - 전체 게시글 조회
router.get('/posts', postController.getAll);

// GET /api/posts/:id - 특정 게시글 조회
router.get('/posts/:id', postController.getOne);

// POST /api/posts - 게시글 생성
router.post('/posts', postController.create);

// PUT /api/posts/:id - 게시글 수정
router.put('/posts/:id', postController.update);

// DELETE /api/posts/:id - 게시글 삭제
router.delete('/posts/:id', postController.remove);

// 라우터를 외부에서 사용할 수 있도록 내보냄
module.exports = router;