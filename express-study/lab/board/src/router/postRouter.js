// express에서 Router 클래스를 가져옴
// Router: 라우트를 모듈 단위로 분리할 수 있게 해주는 미니 앱
const { Router } = require('express');
const postController = require('../controller/postController');

const router = Router();

// GET /api/posts        - 전체 게시글 목록 조회
router.get('/', postController.getAll);

// GET /api/posts/:id    - 특정 게시글 단건 조회
router.get('/:id', postController.getOne);

// POST /api/posts       - 게시글 생성
router.post('/', postController.create);

// PUT /api/posts/:id    - 게시글 수정
router.put('/:id', postController.update);

// DELETE /api/posts/:id - 게시글 삭제
router.delete('/:id', postController.remove);

// 라우터를 외부에서 사용할 수 있도록 내보냄
// app.js에서 app.use('/api/posts', postRouter)로 마운트됨
module.exports = router;
