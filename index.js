const express = require('express');
var url=require('url');
const router = express.Router();
var mysql=require('mysql');

router.get('/', (req, res) => {
    res.render('first',{title:'Yes',content:'Correct page!'});
});

router.get('/Home',(req,res)=>{
    res.render('Home');
});

router.get('/AboutUs', (req,res)=>{
    res.render('AboutUs');
});

router.get('/HowItWorks',(req,res)=>{
    res.render('HowItWorks');
})

router.get('/ContactUs', (req,res)=>{
    res.render('ContactUs');
});

router.get('/Login', (req,res)=>{
    res.render('Login');
});

router.get('/hello',(req,res)=> {
    //console.log('buk');
    res.render('events');
});

router.get('/events',(req,res)=> {
    res.send('Yes changed');
    res.end();
});

router.get('/Register',(req,res)=>{
    res.render('RegistrationPage')
});

router.get('/registerIntoDb',(req,res)=>{
    var dbcon=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'romanreigns'
    });
    dbcon.connect(function(err){
        if(err) throw err;
        console.log('Connection successful');
    });
    var sql='USE Forum';
    dbcon.query(sql,function(err){
        if(err) throw err;
        console.log('Database selected');
    });
    sql=`INSERT INTO BasicDetails(FirstName, LastName, Mail, Phone,Verified) VALUES("${req.query.FirstName}","${req.query.LastName}","${req.query.Mail}","${req.query.Phone}", false)`;
    dbcon.query(sql,function(err){
        if(err)
        throw err;
        else
        {
            res.render('OtpVerification');
        }
    });
});

router.get('/forumExtraction',(req,res)=>{
    var dbcon=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'romanreigns'
    });
    dbcon.connect(function(err){
        if(err) throw err;
        console.log('Connection successful');
    });
    var sql='USE Forum';
    dbcon.query(sql,function(err){
        if(err) throw err;
        console.log('Database selected');
    });
    sql='SELECT Question,Answer FROM questionanswer';
    dbcon.query(sql,function(err,result,fields){
        if(err) throw err;
        res.send(result);
    });
});

router.get('/Forum',(req,res)=>{
    res.render('forumPage');
});
module.exports = router;
