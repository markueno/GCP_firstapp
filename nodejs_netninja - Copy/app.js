// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs. createReadStream(__dirname +'/readMe.txt');
// var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');
//
//
// myReadStream.pipe(myWriteStream);

// res.writeHead(200, {'Content-Type': 'application/json'});
// var myObj={
//   name:'Ryu',
//   job: 'Ninja',
//   age:29,

// }
// res.end(JSON.stringify(myObj));
// myRead Stream.pipe(res);


// var myReadStream= fs.createReadStream(__dirname  +'/readMe.txt', 'utf8');
// var myWriteStream= fs.createWriteStream(__dirname + '/writeME.txt');
//
//
// myReadStream.on('data',function(chunk){
//   console.log('new chunk received:');
//   myWriteStream.write(chunk);
// });


// var server = http.createServer(function(req,res){
//   console.log('request was made'+ req.url)
//   res.writeHead(200,{"Content-Type": 'text/plain'});
//   res.end("hey ninjas its finished")
// })
//
// // listening to port 3000
// // any request on port 3000 no matter the path would be connected to this
// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening ');


var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html')
});
app.get('/contact',function(req,res){
  res.sendFile(__dirname +'/contact.html')
});
// /:name
// first profile parameter for file name in views
// person is the property 
app.get('/profile/:name',function(req,res){
  var data ={age:29, job: "ninja", hobbies:['eating','sleping','lolling']}
  res.render('profile', {person: req.params.name, data:data});
});


app.listen(3000);
