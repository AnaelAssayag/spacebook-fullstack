var mongoose = require('mongoose');

//design the two schema below and use sub docs
//to define the relationship between posts and comments

var commentSchema = new mongoose.Schema({
    text: String,
    user: String
});


var postSchema = new mongoose.Schema({
    text: String,
    comments: [commentSchema]
});

var Post = mongoose.model('post', postSchema)

var ana = new Post({
    text:"hi",
    comments:[{text:"ok", user:"op"}]
})
var bob = new Post({
    text:"ok",
    comments:[{text:"ok", user:"bob"}]
})
// bob.save(callbackfn);

function callbackfn(err,data) {
    if(err) throw err;
    else console.log(data)
 }
module.exports = Post


