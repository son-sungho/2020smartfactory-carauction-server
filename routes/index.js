var express = require('express');
var router = express.Router();

// router.use(function (req, res, next) {
//   let addPath;
//   if (req.cookies) {
//     const userPath = req.cookies.userPath;
//     addPath = userPath.concat([req.path]);
//   } else {
//     addPath = req.path;
//   }
//   res.cookie('userPath', addPath);
//   console.log(next)
// })

/* GET home page. */
router.get('/', function (req, res, next) {

  // 쿠키 읽기(Request Cookie)
  console.log(req.cookies);

  // 쿠키 쓰기(Response Cookie)
  // res.cookie("<key>", "<value>", "<option>")
  res.cookie('cookieName', 'cookieValue', {
    maxAge: 1000 * 60 * 60 * 24, // 밀리초 (하루)
    // expires: new Date(Date.now() + 900000), // 만료 표준 시간
    // domain: "loaded", // 쿠키의 도메인 (현재경로)
    httpOnly: true, // JS 접근 불가(프론트에서 접근 못하도록)
    secure: false, // HTTPS 프로토콜만 쿠키 사용 가능
    signed: false // 서명 여부 (HTTPS)
  });

  res.send("응답보냄.")
});

// view Count가 몇번했는지 설정.
router.get('/sessionTest', function (req, res, next) {
  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }
  console.log(req.session.viewCount);
  console.log(req.session.profile)
  req.session.profile = {
    name: "신윤수",
    city: "서울"
  }
  res.send("세션 테스트")
})

module.exports = router;
