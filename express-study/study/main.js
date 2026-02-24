const express = require('express');
const app = express();

// 라우팅
// JavaScript 정규식 객체
// /^...$/

// acd, abcd와 일치
// ? 앞에 b가 0개 또는 1개 있을 경우
app.get(/^\/ab?cd$/, (req, res) => {
    res.send('ab?cd');
})

// abcd, abbcd, abbbcd 등과 일치
// + 앞에 b가 1개 이상 있을 경우
app.get(/^\/ab+cd$/, (req, res) => {
    res.send('ab+cd');
})

// abcd, abxcd, abRABDMcd, ab123cd 등과 일치
// *을 자유롭게 사용할 수 있음
app.get(/^\/ab*cd$/, (req, res) => {
    res.send('ab*cd')
})

// abe, abcde 등과 일치
//                  
app.get(/^\/ab(cd)?e$/, (req, res) => {
    res.send('ab(cd)?e');
})

// Node가 운영체제에게 포트 3000번 연결 요청
// 성공 시 콜백 함수 실행
// 실패 시 에러 실행
app.listen(3000, () => {
    console.log("포트 3000번 연결 성공!");
})