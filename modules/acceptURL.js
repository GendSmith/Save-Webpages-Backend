var express = require('express');
var app = express();

app.post('/url2pdf', function(req, res) {
  var q = req.query.q; //获取到url
  console.log(res);
  console.log(q);
});

var server = app.listen(3000,function () {
  var host = "127.0.0.1";
  var port = "3000";
  console.log("Server start @ " + host + ":" + port);
});
