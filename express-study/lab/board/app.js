require('dotenv').config();
const express = require('express');
const postRouter = require('./src/router/postRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/posts', postRouter);

// 에러 핸들러
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
