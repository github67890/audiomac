const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;



module.exports = function(router) {




    router.post('/users/editfiles' , (req, res) => {


        console.log(req.body)
        ////const file = req.file; // file passed from client
       //// const meta = req.body; // all other values passed from the client, like name, etc..
      
       const obj = JSON.parse(JSON.stringify(req.body));
        
        var str = req.body.featuring;
        var ar = str.split(','); // no separator passed to split
        ///console.log( ar );
        
        
        var songfeature=[];
        ar.forEach(element => 
         
         songfeature.push(element)
         
        
           
           );
      
          /// var mysongid=req.body.songid;
         //  mysongid = mysongid.replace(/\r?\n|\r/g, " ");
      
        
         MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
         
          var text = "'"+req.body.songid+"'";
          console.log(text);

          finalsongid = req.body.songid.replace(/\r?\n|\r/g, " ");
          finalsongid = finalsongid.trim();

          var myquery = {  _id : ObjectId (finalsongid)};
          var newvalues = { $set: {
            featuring: songfeature, artistname: req.body.artistname, songtitle: req.body.songtitle, producers: req.body.producers,
            genre: req.body.genre, tag1: req.body.tag1, tag2: req.body.tag2, album: req.body.album,
            youtubeurl: req.body.youtubeurl, songdescription: req.body.songdescription, privacy: req.body.privacy
            
            
            
            
            
            } };
          dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
           console.log("1 document updated");
            ///db.close();
          });












        //   var myquery = { '_id':  ObjectId(obj.songid) };
        //   var newvalues = { $set: {
        //     featuring: songfeature, artistname: req.body.artistname, songtitle: req.body.songtitle, producers: req.body.songid,
        //     genre: req.body.genre, tag1: req.body.tag1, tag2: req.body.tag2, album: req.body.album,
        //     youtubeurl: req.body.youtubeurl, songdescription: req.body.songdescription, privacy: req.body.privacy
            
            
            
            
            
        //     } };
        //   dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     db.close();
        //   });
        });
      
      
      
      
      
       
      
      
      
      
      
      
       
      
      });
      
      
      








    
}