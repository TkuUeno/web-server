const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('<h1>トップページ</h1>')
// })

// app.get('/about', function (req, res) {
//   res.send('Aboutページ')
// })


app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;  // 情報を受け取る
  if (answer === "2") {
    // res.send(answer + " :正解！");
    res.redirect("/correct.html");
  } else {
    res.send(answer + " :不正解！");
  }
})

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: "Mike",
    age: 30,
  });
})


app.listen(3000, function(){
    console.log("server running!")
})

console.log("最終行");