var mongoose = require("mongoose");

const config = require("./config");
var url=config.mongoURI;
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var userschm = new mongoose.Schema({

  username: String,
  pass: String,
  imageurl: String,
  userfullname: String,

  
  userfullname: String,
  profileemail: String,
  facevookurl: String,
  twitterurl: String,
  youtubeurl: String,
  instaurl: String,
  verified: String,
});

var usermodel = mongoose.model("uploders", userschm);
module.exports = usermodel;
