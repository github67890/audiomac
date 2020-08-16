const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {




    app.post('/users/subscribeme', function(req, res) {
///console.log(req.body);
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("audiomac");




    var myobj1 = { postedid: ObjectId(req.body.postedid), goestoid:ObjectId (req.body.goestoid)};
    dbo.collection("subscribers").insertOne(myobj1, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
     // res.json('submitted');
    //// calltry("5ea5624b309ef439d0fb82f1","fake");
    
    
      
    ///db.close();
     
    });

    var myobj2 = { postedid: ObjectId(req.body.postedid),  Role: 'Subscribed',time: req.body.time,goestoid:ObjectId (req.body.goestoid)};
    dbo.collection("notifications").insertOne(myobj2, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
     // res.json('submitted');
    //// calltry("5ea5624b309ef439d0fb82f1","fake");
    
    
      
    ///db.close();
     
    });






  });

res.json("submitted");
    });








    app.post('/users/checksubscribe', function(req, res) {

        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
          
            var dbo = db.db("audiomac");
        
            if(mongoose.Types.ObjectId.isValid(req.body.postedid)&&  mongoose.Types.ObjectId.isValid(req.body.songuploder)){
            // var queryf = { postedid: ObjectId(req.body.postedid), goestoid:ObjectId (req.body.songuploder)};




            dbo.collection("subscribers").aggregate([
              { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (req.body.songuploder)} },
              
              
            
              ]).toArray(function(err, resdata) {
    
                if(resdata!=''){
              
                              res.json("yes");
                              
                
                             }
                       
                             if(resdata==''){
                      
                                          res.json("no");
                                          
                              
                              
                                         }

              })

            }
          });
        
      
            })
        
        
        








};