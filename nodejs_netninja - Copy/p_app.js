var express= require('express');
var app = express();
let (x) => console.log(x);


// function logger(req, res, next){
//     console.log(new Date(), req.method, req.url );
//     next();
// }

// app.use(logger);
// app.listen(3000)

// var stuff = require('./stuff')

// console.log(stuff.add(3,4))
// console.log(stuff.add(stuff.pi,5));


// var http = require('http');
// var fs = require('fs');
//
// var server =http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/html'});
// // path to streams are not case sensitive?
//   var readstream=fs.createReadStream(__dirname +'/index.html', 'utf8');
//   readstream.pipe(res);
//  });
//
// server.listen(3000,'127.0.0.1');
// console.log('server up and ready');
//
// var counter = function(arr){
//   return 'There are ' + arr.length + 'elements in the array'
// };
//
// var adder = function(a,b){
//   return 'The sum of the 2 number is ${a+b}'
// }
