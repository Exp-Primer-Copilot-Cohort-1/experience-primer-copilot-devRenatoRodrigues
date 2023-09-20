// Create web server for comments
// =============================================================================

// Import modules
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

// Set up body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Set up comments file
var commentsFile = path.join(__dirname, '..', 'data', 'comments.json');

// Set up GET request
router.get('/', function (req, res, next) {
    res.sendFile(commentsFile);
});

// Set up POST request
router.post('/', function (req, res, next) {
    // Read comments file
    fs.readFile(commentsFile, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            // Parse data
            var comments = JSON.parse(data);

            // Get new comment
            var newComment = {
                id: Date.now(),
