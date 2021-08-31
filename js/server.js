'use strict';

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/page.html');
});

http.listen(3000,function(){
    console.log('listening on : 3000');
});

// const express = require('express');
//  var fs = require('fs');
//  var index = fs.readFileSync('./page.html');

// // Constants
// const PORT = 8082;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.use(express.json()); 
// app.get('/', (req, res) => {

//   res.sendFile(__dirname + '/page.html');
 
// });

// app.listen(PORT, HOST);
// console.log(`Running on http:/localhost:${PORT}`);

// var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync('./page.html');
// let express = require('express');
// const app = express();

// app.all('*', function (req, res) {
//   res.setHeader("Content-Type", "");
//   res.sendFile(index) /* <= Where my ng-view is located */
// })

// // http.createServer(function (req, res) {
// //   //res.writeHead(200);
// //   //res.end(index);
// // }).listen(9615);

// var server = app.listen(3001, function () {
//   var host = server.address().address
//   var port = server.address().port
// })
