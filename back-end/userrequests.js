const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;


module.exports = function(router) {

    router.post("/users/requestdmac", (req, res) => {
     ///   console.log(req.body);
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
            var dbo = db.db("audiomac");
            var myobj = {description:req.body.description,postedid: ObjectId(req.body.postedid),songurl: req.body.songurl,username: req.body.username};
            dbo.collection("dmcarequests").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");

              
        
             
            }
            
            )}
            
            
            )
            res.json('submitted');

    })




    router.post("/users/requestverify", (req, res) => {
        ///   console.log(req.body);
           MongoClient.connect(url, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
             },function(err, db) {
               if (err) throw err;
               var dbo = db.db("audiomac");
               var myobj = {description:req.body.description,postedid: ObjectId(req.body.postedid),username: req.body.username};
               dbo.collection("verifyrequest").insertOne(myobj, function(err, res) {
                 if (err) throw err;
                 console.log("1 document inserted");
   
                 
           
                
               }
               
               )}
               
               
               )
               res.json('submitted');
   
       })
   

};