var mongoose = require("mongoose");

const config = require("./config");
var url=config.mongoURI;
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var singlesongschm = new mongoose.Schema({

    artistname: String,
    songtitle: String,
    featuring: { type: Array, required: true },
    producers: String,
    genre: String,
    tag1: String,
    tag2: String,
    tag3: String,
    tag4: String,
    album: String,
    youtubeurl: String,
    songdescription: String,

    songurl: String,
    privacy: String,
    uploderid: mongoose.ObjectId ,
    songstream:String,
   plays:Number,
   likes:Number,
   share:Number,
   playlist:Number,
    songpicaddress: String,
    songtype:String,
    time:Number,
});

var singlesongmodel = mongoose.model("singlesong", singlesongschm);
module.exports = singlesongmodel;
