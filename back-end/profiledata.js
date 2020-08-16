const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var mongoose = require('mongoose');
const config = require("./config");
var url=config.mongoURI;


module.exports = function(app) {




    app.post('/users/profiledata', function(req, res) {


        MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },function(err, db) {
            if (err) throw err;
          
            var dbo = db.db("audiomac");
            if(mongoose.Types.ObjectId.isValid(req.body.id)){
        

            dbo.collection('uploders').aggregate([
                { $match : { _id : ObjectId(req.body.id)} },
                
              
                
                 
                
                ]).toArray(function(err, resdata) {

              dbo.collection("subscribers").aggregate([
                        { $match : { goestoid : ObjectId(req.body.id)} },
                       { $group: { _id: null, follower: { $sum: 1 } } }
                      
                        ]).toArray(function(err, resdata1) {

                           //// console.log(resdata1);

                           /// var obj = resdata.concat(resdata1);
                          ////  console.log(obj);


                          dbo.collection("subscribers").aggregate([
                            { $match : { postedid : ObjectId(req.body.id)} },
                           { $group: { _id: null, following: { $sum: 1 } } }
                          
                            ]).toArray(function(err, resdata2) {
    
                          
    
                            ////   var obj = resdata.concat(resdata1);
                              ///   obj=obj.concat(resdata2);
                              /// console.log(obj);
    
    
                              dbo.collection("singlesongs").aggregate([
                                { $match : { uploderid : ObjectId(req.body.id)} },
                               { $group: { _id: null, totalsongs: { $sum: 1 } } }
                              
                                ]).toArray(function(err, resdata3) {
        
                                 ////   var dummy=[{ _id: null, count: 0 }];


                                if(resdata1==''){
                                    var dummy=[{ _id: null, follower: 0 }];
                                    var obj = resdata.concat(dummy);
                                   //// console.log(obj);
                                }
                            else{
                                var obj = resdata.concat(resdata1);
                            }


                            if(resdata2==''){
                                var dummy=[{ _id: null, following: 0 }];
                                 obj = obj.concat(dummy);
                            }
                        else{
                            obj=obj.concat(resdata2);
                        }

                        if(resdata3==''){
                            var dummy=[{ _id: null, totalsongs: 0 }];
                            obj = obj.concat(dummy);
                        }
                    else{
                        obj=obj.concat(resdata3);
                    }

                              
                                    
                                  
                                res.json(obj);
                             ///    console.log(obj);
        
        
        
        
        
                                  
        
                                })
    
    
    
                              
    
                            })




                        })








                   /// console.log(resdata);
                })



              }
              else{
                res.json('noresult');

              }




          });







      
            })
        
        
            app.post("/users/getsharedsongs", (req, res) => {

  
  
                MongoClient.connect(url, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                },function(err, db) {
                  if (err) throw err;
                  var dbo = db.db("audiomac");


                  /*Return only the documents with the address "Park Lane 38":*/
            if(mongoose.Types.ObjectId.isValid(req.body.id)){
                  dbo.collection('sharedsongs').aggregate([
                    { $match : { postedid : ObjectId(req.body.id)} },
                
                    { $lookup:
                       {
                         from: 'singlesongs',
                         localField: 'onsongid',
                         foreignField: '_id',
                         as: 'orderd'
                       }
                     },
              
                    
                     {   $unwind:"$orderd" }, 
              
                     // Join with user_role table
                  {
                    $lookup:{
                        from: "uploders", 
                        localField: "goestoid",
                        foreignField: "_id",
                        as: "user_role"
                    }
                },
                {   $unwind:"$user_role" },
                
                     {   
                      $project:{
                        songid:  "$orderd._id",
                        plays:  "$orderd.plays",
                        plays:  "$orderd.plays",
                        likes : "$orderd.likes",
                  share: "$orderd.share",
                  playlist: "$orderd.playlist",
                  songpicaddress:"$orderd.songpicaddress",
                  songstream:"$orderd.songstream",
                  uploderid:"$orderd.uploderid",
                        artistname:"$orderd.artistname",
                        songtitle:"$orderd.songtitle",
                     uplodername : "$user_role.userfullname",

                     uploderid : "$user_role._id",
                     uplodertick:"$user_role.verified",

                      } 
                  }
                    ]).toArray(function(err, resdata) {
              
              
              
               
                     ///   console.log(resdata);
                          res.json(resdata);
                    })
              
              
                  }
                  else{
res.json('noresult')

                  }
              
              
              
              
              
                 });
                
              
              
              
              
              });
                  


              app.post("/users/getownsongs", (req, res) => {

                var allsongs=[];
                var checksubscribe=[];
  
                MongoClient.connect(url, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                },async function(err, db) {
                  if (err) throw err;
                  var dbo = db.db("audiomac");
                  /*Return only the documents with the address "Park Lane 38":*/
                  if(mongoose.Types.ObjectId.isValid(req.body.id)){

              
                  
                  allsongs= await dbo.collection('singlesongs').aggregate([
                    { $match : { uploderid : ObjectId(req.body.id)} },
                
                 
              
                     // Join with user_role table
                  {
                    $lookup:{
                        from: "uploders", 
                        localField: "uploderid",
                        foreignField: "_id",
                        as: "user_role"
                    }
                },
                {   $unwind:"$user_role" },
                
                     {   
                      $project:{
                        plays: 1,
                        likes: 1,
                        share: 1,
                        playlist: 1,
                        songpicaddress:1,
                        songstream:1,
                        uploderid:1,
                              artistname:1,
                              songtitle:1,
                                uplodername : "$user_role.userfullname",
                                uploderid : "$user_role._id",
                                uplodertick:"$user_role.verified",
                      } 
                  }
                ]).toArray()

                for(var x = 0; x<allsongs.length; x++) {
          
          
                  if(req.body.postedid!='null'){
                  
                  console.log('ruuuuuuuuuuuuun');
                      checksubscribe=await dbo.collection("subscribers").aggregate([
                          { $match : { postedid : ObjectId (req.body.id),goestoid:ObjectId (allsongs[x].uploderid)} },
                          
                          
                        
                          ]).toArray();
                  
                          if(checksubscribe!=''){
                             //// console.log('yes');
                        /// res.json("yes");
                        allsongs[x].checksubscribe = 'yes';
                                            }
                                          if(checksubscribe==''){
                                           ///  console.log('yes');
                                             allsongs[x].checksubscribe = 'no';
                                    ///  res.json("no");  
                                 }
                     
                                }
                  
                  
                  else{
                  
                  
                    allsongs[x].checksubscribe = 'no';
                  
                  
                  
                  
                  }
                  
                  
                  
                  
                    }
                      
                  
                  
                  
                  
                  console.log('owwwwwwwwwwwwwm');
                  
                      ///    console.log(allsongs);
                         res.json(allsongs);
          
          
                  }
                  else{

                    res.json('noresult');

                  }
              
              
              
              
              
                 });
                
              
              
              
              
              });

              app.post('/users/sharethis', function(req, res) {

  
                MongoClient.connect(url, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                },function(err, db) {
                  if (err) throw err;
                
                  var dbo = db.db("audiomac");
              
              
              
                  var queryf = { postedid: ObjectId(req.body.id)};
                  dbo.collection("subscribers").find(queryf).toArray(function(err, result) {
                    if (err) throw err;
              ////      console.log('rrrrrrrrrrrrrrrrrrrrrr')
                 if(result==''){
                     
                  dbo.collection("singlesongs").aggregate([
                      { $match : { _id : ObjectId (req.body.onsongid)} },
                      {
                      $project:{
              
              
                          likes:1
                      }}
                    
                      ]).toArray(function(err, resdata) {
              
              ///console.log(resdata[0].likes)
              
              var myquery = {  _id : ObjectId (req.body.onsongid)};
              var newvalues = { $set: {likes:resdata[0].likes+1 } };
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
              
              
              var myobj1 = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid),  time: req.body.time,goestoid:resdata[0].uploderid};
              dbo.collection("likedsongs").insertOne(myobj1, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
               // res.json('submitted');
              //// calltry("5ea5624b309ef439d0fb82f1","fake");
              
              
                
              ///db.close();
              
              var myobj2 = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid),  Role: 'Like',time: req.body.time,goestoid:resdata[0].uploderid};
              dbo.collection("notifications").insertOne(myobj2, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
               // res.json('submitted');
              //// calltry("5ea5624b309ef439d0fb82f1","fake");
              
              
                
              ///db.close();
               
              });
              
              
              
              
               
              });
              
                      });
              
              
              
              
              
              
              //////////////////////send current like///////////////
              
              
              
              
              res.json('submitted');
              
                 }
              
              ///////////////////else
              
              else{
              
              
              
              
                  var myquerydel= { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid)};
                  dbo.collection("likedsongs").deleteOne(myquerydel, function(err, obj) {
                    if (err) throw err;
                    console.log("1 document deleted");
                   //// db.close();
                  });
              //////////////////////////for decremtnt////////
                  dbo.collection("singlesongs").aggregate([
                      { $match : { _id : ObjectId (req.body.onsongid)} },
                      {
                      $project:{
              
              
                          likes:1
                      }}
                    
                      ]).toArray(function(err, resdata) {
              
              ///console.log(resdata[0].likes)
              
              var myquery = {  _id : ObjectId (req.body.onsongid)};
              var newvalues = { $set: {likes:resdata[0].likes-1 } };
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


                  app.post('/users/deletesong', function(req, res) {


                    console.log(req.body);
                    finalsongid = req.body.songid.replace(/\r?\n|\r/g, " ");
                    finalsongid = finalsongid.trim();

                  
                    
                    
                    MongoClient.connect(url, {
                      useNewUrlParser: true,
                      useUnifiedTopology: true,
                    },function(err, db) {
                      if (err) throw err;
                      var dbo = db.db("audiomac");
                      var myquery = { _id: ObjectId(finalsongid) };
                      dbo.collection("singlesongs").deleteOne(myquery, function(err, obj) {
                        if (err) throw err;
                        console.log("1 document deleted");
                        db.close();
                        res.json('submitted');
                      });
                    });




                  })





};