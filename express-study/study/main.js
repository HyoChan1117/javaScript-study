const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage'); 
})

app.listen(3000, () => {
    console.log("포트 3000번 연결 성공!");
})