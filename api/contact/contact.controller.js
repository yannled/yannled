var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yannlederrey@gmail.com',
    pass: 'Honda CBR 250'
  }
});

exports.send = function(req,res){
  var htmlContent = '<p>Name: ' + req.body.name + '</p>' +
                    '<p>Email: ' + req.body.email + '</p>' +
                    '<p>Message: ' + req.body.message + '</p>';
  var mailOptions = {
    to: 'yannlederrey@gmail.com',                  // your email here
    subject: 'New message',
    from: req.body.name + ' <' + req.body.email + '>',
    sender: req.body.email,
    html: htmlContent
  };
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    }else{
      console.log('Message sent: ' + info.response);
      return res.json(201, info);
    }
  });
}