const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {




    app.post('/users/subscribethis', function(req, res) {

  
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
  
    var dbo = db.db("audiomac");



    var queryf = { postedid: ObjectId(req.body.postedid), goestoid:ObjectId (req.body.goestoid)};
    dbo.collection("subscribers").find(queryf).toArray(function(err, result) {
      if (err) throw err;
      console.log('rrrrrrrrrrrrrrrrrrrrrr')
   if(result==''){
       

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







res.json("submitted");
  

   }

///////////////////else

else{

    var myquerydel= { postedid: ObjectId(req.body.postedid), goestoid:ObjectId (req.body.goestoid)};
    dbo.collection("subscribers").deleteOne(myquerydel, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
     //// db.close();
    });

//////////////////////send current like//////////////
res.json('submitted');

}


    });









 


    
   



   });
  





    });



    app.post('/users/checksubsribethis', function(req, res) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
     //// console.log(req.body);
            MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              },function(err, db) {
                if (err) throw err;
              
                var dbo = db.db("audiomac");
            
            
                // var queryf = { postedid: ObjectId(req.body.postedid), goestoid:ObjectId (req.body.songuploder)};
    
                if(mongoose.Types.ObjectId.isValid(req.body.postedid) && mongoose.Types.ObjectId.isValid(req.body.postedid)){


                
    
    
                dbo.collection("subscribers").aggregate([
                  { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (req.body.goestoid)} },
                  
                  
                
                  ]).toArray(function(err, resdata) {
              
  ////  console.log(resdata);
    
    ///res.json(resdata);
                    if(resdata!=''){
                    ///  console.log('yessubsribe');
                                  res.json("yessubsribe");
                                  
                      
                      
                                 }
                           
                                 if(resdata==''){
                                ///  console.log('nosubsribe');
                                              res.json("nosubsribe");
                                              
                                  
                                  
                                             }
    
                  })
    
                }
    
    
    
    
    
    
    
    
    
    //             dbo.collection("subscribers").find(queryf).toArray(function(err, result) {
    //               if (err) throw err;
    //               console.log('rrrrrrrrrrrrrrrrrrrrrr')
    //               console.log(result);
    //            if(result!=''){
    // console.log('yes');
    //             res.json("yes");
                
    
    
    //            }
         
    //            if(result==''){
             
    //                         res.json("no");
                            
                
                
    //                        }
            
    //         })
            
               
            
            
            
            
            
              });
            
          
                })
            
            








};