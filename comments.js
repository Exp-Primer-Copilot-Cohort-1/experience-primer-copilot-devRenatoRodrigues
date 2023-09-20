// Create web server application with express
var express = require('express');
var app = express();
// Create a server with http
var http = require('http').Server(app);
// Create socket io
var io = require('socket.io')(http);
// Create mongoose
var mongoose = require('mongoose');
// Create body parser
var bodyParser = require('body-parser');
// Create a path
var path = require('path');
// Create an object
var obj = {};
// Set the port
var port = process.env.PORT || 3000;
// Set the database
var db = process.env.MONGODB_URI || 'mongodb://localhost:27017/comments';
// Connect to the database
mongoose.connect(db);
// Set the path for the app
app.use(express.static(path.join(__dirname, 'public')));
// Set the path for the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Create a schema
var Schema = mongoose.Schema;
// Create a model
var commentSchema = new Schema({
