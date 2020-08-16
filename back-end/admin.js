const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;


module.exports = function(router) {

    router.post("/users/getverifyrequest", (req, res) => {
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
            var dbo = db.db("audiomac");
          ///  console.log('haaaaaaaaaaa');
            /*Return only the documents with the address "Park Lane 38":*/
            
            var query = {} ;
            dbo.collection("verifyrequest").find(query).toArray(function(err, result) {
              if (err) throw err;
            ///  console.log('haaaaaaaaaaa')
        ///
         console.log(result);
         res.json(result);
         
             /// db.close();
              
              
            });
        
          });
          
        

    })

    router.post("/users/getdmac", (req, res) => {
        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
            var dbo = db.db("audiomac");
          ///  console.log('haaaaaaaaaaa');
            /*Return only the documents with the address "Park Lane 38":*/
            
            var query = {} ;
            dbo.collection("dmcarequests").find(query).toArray(function(err, result) {
              if (err) throw err;
            ///  console.log('haaaaaaaaaaa')
        ///
         console.log(result);
         res.json(result);
         
             /// db.close();
              
              
            });
        
          });
          
        

    })
    router.post("/users/editverifyuser", (req, res) => {

////console.log(req.body);

        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
         
       

          uploderid = req.body.uploderid.replace(/\r?\n|\r/g, " ");
          uploderid = uploderid.trim();
          ////console.log('fffffffffffffffffffffff');
         //// console.log(uploderid);

          var myquery = {  _id : ObjectId (uploderid)};
          var newvalues = { $set: {
            verified: 'yes'
            
            
            
            
            
            } };
          dbo.collection("uploders").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
           console.log("1 document updated");
          
            ///db.close();
          });

        });
      
        res.json('submitted');





    })

  
    router.post('/users/deleterecord', function(req, res) {


        console.log(req.body);
        finalid = req.body.id.replace(/\r?\n|\r/g, " ");
        finalid = finalid.trim();

      
        
        
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          var myquery = { _id: ObjectId(finalid) };
          dbo.collection("verifyrequest").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
           
            db.close();
            
          });
        });

        res.json('submitted');


      })

   
////////////////

router.post("/users/confirmdmca", (req, res) => {

    ////console.log(req.body);
    
            MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              },function(err, db) {
              if (err) throw err;
              var dbo = db.db("audiomac");
             
           
    
             /// uploderid = req.body.uploderid.replace(/\r?\n|\r/g, " ");
             /// uploderid = uploderid.trim();
              ////console.log('fffffffffffffffffffffff');
              var songurl=req.body.songurl;
              var parts = songurl.split("/");
var songid = parts[parts.length - 1]; // Or parts.pop();


if(mongoose.Types.ObjectId.isValid(songid)){

    var myquery = { _id: ObjectId(songid) };
    dbo.collection("singlesongs").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
     
      db.close();
      
    });


 /// res.json('submitted');




}

    
            
    
            });
          
            res.json('submitted');
    
    
    
    
    
        })
    
      
        router.post('/users/deleterecorddmca', function(req, res) {
    
    
            console.log(req.body);
            finalid = req.body.id.replace(/\r?\n|\r/g, " ");
            finalid = finalid.trim();
    
          
            
            
            MongoClient.connect(url, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            },function(err, db) {
              if (err) throw err;
              var dbo = db.db("audiomac");
              var myquery = { _id: ObjectId(finalid) };
              dbo.collection("dmcarequests").deleteOne(myquery, function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
               
                db.close();
                
              });
            });
    
            res.json('submitted');
    
    
          })
    
       




};