const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config()
const mailer = require("nodemailer")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.get("/", (req, res)=>{

  res.render("index", {

 
  })
})

app.post("/", (req, res) =>{
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const msg = req.body.msg


  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: "iam4emmax@gmail.com",
      pass: "09069003426"
    }
  });
  
  const mailOptions = {
    name:name,
    from: email,
    to: 'iam4emmax@gmail.com',
    subject: subject,
    text: msg
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect("/")
    }
  });

})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`server started at port ${PORT}`);
})
module.exports = app;


