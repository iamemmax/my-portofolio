const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config()
const mail = require("nodemailer")

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
 
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const msg = req.body.msg;
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPass =  process.env.ADMIN_PASS
    
    
    let error = [];


    try {
        if(!name || !email || !msg || !subject){
            error.push(error, "this field is important")
            res.redirect('/')
        }else{
            var transporter = mail.createTransport({
                service: 'gmail',
                auth: {
                  user: adminEmail,
                  pass: adminPass
                }
              });
              
              var mailOptions = {
                from: email,
                to: adminEmail,
                subject: subject,
                text:msg,
                html:`<b>Hey ${name}! </b><br> ${msg}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  res.redirect(`/`)
                }
              });
        }
    } catch (error) {
        console.log(error);
    }
    console.log(username);
})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`server started at port ${PORT}`);
})
module.exports = app;


