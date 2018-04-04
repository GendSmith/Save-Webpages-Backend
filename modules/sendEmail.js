var nodemailer = require("../node_modules/nodemailer/lib/nodemailer.js");

var transporter = nodemailer.createTransport({
    service:'qq',
    port:465,
    secureConnection:true,
    auth: {
      user: '1439786496@qq.com',
      pass: '********'
    }
});

var mailOptions = {
  from: '1439786496@qq.com',
  to:"*******@qq.com",
  subject:"【自动发送】",
  attachments: [
    {
      filename: "附件",
      path: "../package-lock.json"
    }
  ],
  encoding: "UTF-8"
};

transporter.sendMail(mailOptions, function(err, info) {
  if(err){
    return console.log("出错了！" + err);
  } else {
    console.log("发送成功！" + info.response);
  }
})
