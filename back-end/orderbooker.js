var mongoose = require("mongoose");
const config = require("./config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var bookerschm = new mongoose.Schema({
  orginalid: String,
  fname: String,
  mname: String,
  lname: String,
  fathername: String,
  gender: String,

  wnumber: String,

  altemail: String,
  address: String,
  nlandmark: String,
  city: String,
  province: String,
  country: String,
  zipcode: String,
  bday: String,
  cnic: String,
  quli: String,
  relegion: String,
  facepic: String,
  character: String,
  refrence: String,

  idcard: String,
  bankname: String,
  branchname: String,
  bankcity: String,

  accountname: String,
  type: String,
  accountno: String,
  ibn: String,
});

var usermodel = mongoose.model("booker", bookerschm);
module.exports = usermodel;
