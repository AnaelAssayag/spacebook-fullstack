// import { read } from 'fs';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var Post = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
app.get('/posts', function (req, res) {
  Post.find(function(err, result) {
    if (err) {
      console.error(err);
    }else {
      res.send(result)
    }
  });
});

// 2) to handle adding a post
app.post('/posts', function (req, res) {
  var newPost = new Post(req.body);
  newPost.save(function (err, post) {
    if (err){
      throw err
    }else{
      res.send(post)
    }

})
})
// 3) to handle deleting a post
app.delete('/posts/:id', function (req, res) {
  console.log(req.params.id)

  Post.findByIdAndRemove(req.params.id, function(err, data){
    if (err) {
      throw err;
        }
    else {
      res.send(data) 
    }
      })
    });



    


// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(8000, function() {
  console.log("what do you want from me! get me on 8000 ;-)");
});
