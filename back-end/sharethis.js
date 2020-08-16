const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;





module.exports = function(app) {




    app.post('/users/sharethis', function(req, res) {

  
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("audiomac");



    var queryf = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid)};
    dbo.collection("sharedsongs").find(queryf).toArray(function(err, result) {
      if (err) throw err;
   /////   console.log('rrrrrrrrrrrrrrrrrrrrrr')
   if(result==''){
       
    dbo.collection("singlesongs").aggregate([
        { $match : { _id : ObjectId (req.body.onsongid)} },
        {
        $project:{


            share:1
        }}
      
        ]).toArray(function(err, resdata) {

///console.log(resdata[0].likes)

var myquery = {  _id : ObjectId (req.body.onsongid)};
var newvalues = { $set: {share:resdata[0].share+1 } };
dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
  ///db.close();
});

        });
  
  
      









    dbo.collection('singlesongs').aggregate([
        { $match : { _id : ObjectId(req.body.onsongid)} },
        
        { $lookup:
           {
             from: 'uploders',
             localField: 'uploderid',
             foreignField: '_id',
             as: 'orderd'
           }
         },

        
         {   $unwind:"$orderd" }, 
    
         {   
          $project:{
           
              
              
              uploderid : "$orderd._id",
          
          } 
      }
        ]).toArray(function(err, resdata) {
        if (err) throw err;
       /// console.log('hssssssssssss');
   ///  console.log(resdata);


var myobj1 = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid),time: req.body.time,goestoid:resdata[0].uploderid};
dbo.collection("sharedsongs").insertOne(myobj1, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
 // res.json('submitted');
//// calltry("5ea5624b309ef439d0fb82f1","fake");


  
///db.close();
 
});


var myobj2 = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid),  Role: 'Share',time: req.body.time,goestoid:resdata[0].uploderid};
dbo.collection("notifications").insertOne(myobj2, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
 // res.json('submitted');
//// calltry("5ea5624b309ef439d0fb82f1","fake");


  
///db.close();
 
});







        });






//////////////////////send current like///////////////




res.json('submitted');

   }

///////////////////else

else{




    var myquerydel= { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid)};
    dbo.collection("sharedsongs").deleteOne(myquerydel, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
     //// db.close();
    });
//////////////////////////for decremtnt////////
    dbo.collection("singlesongs").aggregate([
        { $match : { _id : ObjectId (req.body.onsongid)} },
        {
        $project:{


            share:1
        }}
      
        ]).toArray(function(err, resdata) {

///console.log(resdata[0].likes)

var myquery = {  _id : ObjectId (req.body.onsongid)};
var newvalues = { $set: {share:resdata[0].share-1 } };
dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log("1 document updated");
db.close();
});

        });
  
  



//////////////////////send current like//////////////
res.json('submitted');

}


    });









 


    
   



   });
  





    });






    app.post('/users/checksharethis', function(req, res) {

  
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },function(err, db) {
          if (err) throw err;
        
          var dbo = db.db("audiomac");
      
      
      
          var queryf = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid)};
          dbo.collection("sharedsongs").find(queryf).toArray(function(err, result) {
            if (err) throw err;
         //////   console.log('rrrrrrrrrrrrrrrrrrrrrr')
         if(result==''){


res.json('noshared')


         }
        
        else{
            res.json('yesshared')

        }
        
        
        
        })})});











};