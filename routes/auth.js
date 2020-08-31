const express = require('express');
const router = express.Router();

// REST API
// 여기서 Application에서는 form이 없어요,
// form 태그가 없어요.
// POSTMAN

// 로그인 구현상 문제.
// 우리 서버 = Local Server(localhost(127.0.0.1))
// - Application


// 서버에 올려보도록 해요.
// fetch("http://127.0.0.1:3000")

router.post('/login', function (req, res, next) {

  res.send("login");
})

router.post('/register', function (req, res, next) {
  res.send("register")
})

router.post('/logout', function (req, res, next) {
  res.send("logout")
})

module.exports = router;