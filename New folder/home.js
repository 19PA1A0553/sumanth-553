const { query } = require('express');
var express = require('express'); 
var app = express()  
app.use(express.static('public'));
var mongojs = require('mongojs')
var cString='mongodb+srv://sumanthgmr:sumanthgmr@2001@cluster0.yflxb.mongodb.net/sumanthbot?retryWrites=true&w=majority';
var db = mongojs(cString,['project'])

  
app.get('/hellow', function (req, res) {  
res.sendFile(__dirname+"/public/home.html")
})  

app.get('/signupsubmi',function(req,res) {
	var d={
		password:req.query.pass,
		username:req.query.us,
		Phone number:req.query.phn,
		Email:req.query.em,
		Full nam:req.query.text

	}
	db.project.insert(d,function (err,docs) {
		if (err) {
			res.send("error")
		}
		else{
			res.sendFile(__dirname+"/public/login.html")
		}
		
	})

	// body...
})
  
app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})