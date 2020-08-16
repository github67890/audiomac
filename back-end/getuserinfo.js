const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;


module.exports = function(app) {




    app.post('/users/getuserinfo', function(req, res) {
///console.log(req.body);
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("audiomac");


    dbo.collection('uploders').aggregate([
        { $match : { _id : ObjectId(req.body.postedid)} },
        
      
        ]).toArray(function(err, resdata) {

          ////  console.log(resdata);
            res.json(resdata);

        })




  });


    });





    app.post('/users/saveuserinfo', function(req, res) {
        ///console.log(req.body);
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
          
            var dbo = db.db("audiomac");
        
        
            var myquery = {  _id : ObjectId (req.body.postedid)};
            var newvalues = { $set: {userfullname:req.body.userfullname,
                username:req.body.username,facevookurl:req.body.facevookurl,
                youtubeurl:req.body.youtubeurl,userfullname:req.body.userfullname,
                instaurl:req.body.instaurl,twitterurl:req.body.twitterurl
            
            } };
            dbo.collection("uploders").updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            ///  console.log("1 document updated");
              ///db.close();
            });
        
        
        
        
          });
        
        
            });
        




            app.post('/users/updateuserpass', function(req, res) {
             /// console.log(req.body);
                MongoClient.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  },function(err, db) {
                    if (err) throw err;
                  
                    var dbo = db.db("audiomac");
                
                
                    var myquery = {  _id : ObjectId (req.body.postedid)};
                    var newvalues = { $set: {pass:req.body.newpass
                    
                    
                    } };
                    dbo.collection("uploders").updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                    ///  console.log("1 document updated");
                      ///db.close();
                    });
                
                res.json("submitted");
                
                
                  });
                
                
                    });
                




};