const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {




    app.post('/users/createplaylist', function(req, res) {
///console.log(req.body);
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("audiomac");




    var myobj1 = { postedid: ObjectId(req.body.postedid), playlistname:req.body.playlistname};
    dbo.collection("playlist").insertOne(myobj1, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
     // res.json('submitted');
    //// calltry("5ea5624b309ef439d0fb82f1","fake");
    
    
      
    ///db.close();
     
    });


    var myobj2 = { postedid: ObjectId(req.body.postedid), playlistname:req.body.playlistname,songid: ObjectId(req.body.songid)};
    dbo.collection("playlistsongs").insertOne(myobj2, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    
     
    });



 
       
    dbo.collection("singlesongs").aggregate([
        { $match : { _id : ObjectId (req.body.songid)} },
        {
        $project:{


            playlist:1
        }}
      
        ]).toArray(function(err, resdata) {

///console.log(resdata[0].likes)

var myquery = {  _id:ObjectId (req.body.songid)};
var newvalues = { $set: {playlist:resdata[0].playlist+1 } };
dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
///  console.log("1 document updated");
  ///db.close();
});

        });
  










    res.json("submitted");
     
   









    });


});


    app.post('/users/addinplaylist', function(req, res) {
        ///console.log(req.body);
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
          
            var dbo = db.db("audiomac");
        
        
        
        
          
        
        
            var myobj2 = { postedid: ObjectId(req.body.postedid), playlistname:req.body.playlistname,songid: ObjectId(req.body.songid)};
            dbo.collection("playlistsongs").insertOne(myobj2, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
             // res.json('submitted');
            //// calltry("5ea5624b309ef439d0fb82f1","fake");
            
            
              
            ///db.close();
             
            });
        
            dbo.collection("singlesongs").aggregate([
                { $match : { _id : ObjectId (req.body.songid)} },
                {
                $project:{
        
        
                    playlist:1
                }}
              
                ]).toArray(function(err, resdata) {
        
        ///console.log(resdata[0].likes)
        
        var myquery = {  _id:ObjectId (req.body.songid)};
        var newvalues = { $set: {playlist:resdata[0].playlist+1 } };
        dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
        ///  console.log("1 document updated");
          ///db.close();
        });
        
                });
          
            res.json("submitted");
             
           
        
        
        
        
        
        
          });
        
        
            });
        
    



    app.post('/users/existingplaylist', function(req, res) {
        ///console.log(req.body);
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
          
            var dbo = db.db("audiomac");
        
        
        
        
    dbo.collection('playlist').aggregate([
        { $match : {postedid:ObjectId(req.body.postedid)}},

        ]).toArray(function(err, resdata) {
  
  
  
       //// console.log(resdata);
              res.json(resdata);
        })
        
        
       
             
           
        
        
        
        
        
        
          });
        
        
            });





};