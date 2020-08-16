const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {




    app.post("/users/sidebarmixtape", (req, res) => {
      var allsongs=[];
      var checksubscribe=[];
  
  
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }, async function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          /*Return only the documents with the address "Park Lane 38":*/
          var query = {};
      
          allsongs= await  dbo.collection('singlesongs').aggregate([
            { $match : {songtype:'mixtape'}},
            // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
            { $lookup:
               {
                 from: 'uploders',
                 localField: 'uploderid',
                 foreignField: '_id',
                 as: 'orderd'
               }
             },
      
            
             {   $unwind:"$orderd" }, 
      
             // Join with user_role table
        //   {
        //     $lookup:{
        //         from: "subscribers", 
        //         localField: "uploderid",
        //         foreignField: "goestoid",
        //         as: "user_role"
        //     }
        // },
        // {   $unwind:"$user_role" },
        
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
                  uplodername : "$orderd.userfullname",
                  uploderid : "$orderd._id",
                  uplodertick:"$orderd.verified",
              } 
          }
            ]).toArray()
            for(var x = 0; x<allsongs.length; x++) {
  
  
              if(req.body.postedid!='null'){
              
              console.log('ruuuuuuuuuuuuun');
                  checksubscribe=await dbo.collection("subscribers").aggregate([
                      { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (allsongs[x].uploderid)} },
                      
                      
                    
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
                  
              
              
      
      
                res.json(allsongs);
      
      
      
      
      
         });
        
      
      
      
      
      });



      app.post("/users/sidebarpodcast", (req, res) => {
        var allsongs=[];
        var checksubscribe=[];
  console.log('i got requeat');
  
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }, async function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          /*Return only the documents with the address "Park Lane 38":*/
          var query = {};
      
          allsongs= await   dbo.collection('singlesongs').aggregate([
            { $match : {songtype:'poadcast'}},
            // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
            { $lookup:
               {
                 from: 'uploders',
                 localField: 'uploderid',
                 foreignField: '_id',
                 as: 'orderd'
               }
             },
      
            
             {   $unwind:"$orderd" }, 
      
             // Join with user_role table
        //   {
        //     $lookup:{
        //         from: "subscribers", 
        //         localField: "uploderid",
        //         foreignField: "goestoid",
        //         as: "user_role"
        //     }
        // },
        // {   $unwind:"$user_role" },
        
             {   
              $project:{
                plays: 1,
          likes: 1,
          share: 1,
          playlist: 1,
          songpicaddress:1,
          songstream:1,
          
                artistname:1,
                songtitle:1,
                  uplodername : "$orderd.userfullname",
                  uploderid : "$orderd._id",
                  uplodertick:"$orderd.verified",
              } 
          }
        ]).toArray()

        for(var x = 0; x<allsongs.length; x++) {
  
  
          if(req.body.postedid!='null'){
          
          console.log('ruuuuuuuuuuuuun');
              checksubscribe=await dbo.collection("subscribers").aggregate([
                  { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (allsongs[x].uploderid)} },
                  
                  
                
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
              
          
          
          
          
          
          
                  ///console.log(allsongs);
                  res.json(allsongs);
  
      
      
      
      
      
      
      
      
         });
        
      
      
      
      
      });




      app.post("/users/sidebarcarvinal", (req, res) => {

        var allsongs=[];
        var checksubscribe=[];
  
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },async  function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          /*Return only the documents with the address "Park Lane 38":*/
          var query = {};
      
          allsongs= await    dbo.collection('singlesongs').aggregate([
            { $match : {genre:'Carnival'}},
            // { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
            { $lookup:
               {
                 from: 'uploders',
                 localField: 'uploderid',
                 foreignField: '_id',
                 as: 'orderd'
               }
             },
      
            
             {   $unwind:"$orderd" }, 
      
             // Join with user_role table
        //   {
        //     $lookup:{
        //         from: "subscribers", 
        //         localField: "uploderid",
        //         foreignField: "goestoid",
        //         as: "user_role"
        //     }
        // },
        // {   $unwind:"$user_role" },
        
             {   
              $project:{
                plays: 1,
          likes: 1,
          share: 1,
          playlist: 1,
          songpicaddress:1,
          songstream:1,
        ///  uploderid:1,
                artistname:1,
                songtitle:1,
                  uplodername : "$orderd.userfullname",
                  uploderid : "$orderd._id",
                  uplodertick:"$orderd.verified",
              } 
          }
        ]).toArray()

        for(var x = 0; x<allsongs.length; x++) {
  
  
          if(req.body.postedid!='null'){
          
          console.log('ruuuuuuuuuuuuun');
              checksubscribe=await dbo.collection("subscribers").aggregate([
                  { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (allsongs[x].uploderid)} },
                  
                  
                
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
              
          
          
          
          
          
          
                  console.log(allsongs);
                  res.json(allsongs);
  
      
      
      
      
      
      
      
      
         });
        
      
      
      
      
      });








      app.post("/users/sidebarplaylist", (req, res) => {

        var allsongs=[];
  
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },async function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          /*Return only the documents with the address "Park Lane 38":*/
          var query = {};
      
          allsongs= await     dbo.collection('playlistsongs').aggregate([
           
            { $match : { postedid : ObjectId(req.body.postedid)} },
            { $lookup:
               {
                 from: 'uploders',
                 localField: 'postedid',
                 foreignField: '_id',
                 as: 'orderd'
               }
             },
      
            
             {   $unwind:"$orderd" }, 
      
             // Join with user_role table
          {
            $lookup:{
                from: "singlesongs", 
                localField: "songid",
                foreignField: "_id",
                as: "user_role"
            }
        },
        {   $unwind:"$user_role" },
        
             {   
              $project:{
               playlistname: 1,
                
        //   likes: 1,
        //   share: 1,
        //   playlist: 1,
        //   songpicaddress:1,
        //   songstream:1,
        //   uploderid:1,
        //         artistname:1,
        //         songtitle:1,

               
                plays : "$user_role.plays",
                songid : "$user_role._id",
                likes : "$user_role.likes",
                share: "$user_role.share:",
                songpicaddress : "$user_role.songpicaddress",
                songstream : "$user_role.songstream",

                uploderid : "$user_role.uploderid",
                artistname : "$user_role.artistname",
                songtitle : "$user_role.songtitle",
              




                  uplodername : "$orderd.userfullname",
                  uploderid : "$orderd._id",
                  uplodertick:"$orderd.verified",
              } 
          }
        ]).toArray()

        for(var x = 0; x<allsongs.length; x++) {
  
  
          if(req.body.postedid!='null'){
          
          console.log('ruuuuuuuuuuuuun');
              checksubscribe=await dbo.collection("subscribers").aggregate([
                  { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (allsongs[x].uploderid)} },
                  
                  
                
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
              
          
          
          
          
          
          
                  console.log(allsongs);
                  res.json(allsongs);
  
      
      
      
      
      
      
      
      
      
         });
        
      
      
      
      
      });
      app.post("/users/sidebarprofilesearch", (req, res) => {
        var alluploders=[];
        var checksubscribe=[];
    
        var countfollower=[];
            MongoClient.connect(url, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            },async function(err, db) {
              if (err) throw err;
              var dbo = db.db("audiomac");
              /*Return only the documents with the address "Park Lane 38":*/
              var query = {};
          
              alluploders= await dbo.collection('uploders').aggregate([
               
              { $match : {}},
            
             
                 {   
                  $project:{
                    _id:1,
                    userfullname: 1,
                    imageurl: 1,
                    verified:1,
             
                  } 
              }
                ]).toArray();
          ///////////group
         
              
          ///////
        
          for(var x = 0; x<alluploders.length; x++) {
            if(req.body.postedid!='null'){
    
            checksubscribe=await dbo.collection("subscribers").aggregate([
                { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (alluploders[x]._id)} },
                
                
              
                ]).toArray();
        
                if(checksubscribe!=''){
                   //// console.log('yes');
              /// res.json("yes");
              alluploders[x].checksubscribe = 'yes';
                                  }
                                if(checksubscribe==''){
                                 ///  console.log('yes');
                                   alluploders[x].checksubscribe = 'no';
                          ///  res.json("no");  
                       }
           
                      }
                      else{
    
                        alluploders[x].checksubscribe = 'no';
                      }
    
    
    
    
    
    
                       countfollower=await dbo.collection('subscribers').aggregate([
                        { $match : {goestoid: (alluploders[x]._id) }},
                         { $group : { _id :null, totalfollower: { $sum: 1 } }},
                     
                         ]).toArray();
                         if(countfollower!=''){
                       
    ////console.log(countfollower[0].totalfollower);
    
    alluploders[x].totalfollower = countfollower[0].totalfollower;
    }
    
    else{
    
        alluploders[x].totalfollower = 0;
    }
          }
            
        
        
        
        
        
        
           ///  console.log(alluploders);
               res.json(alluploders);
          
          
             });
            
          
          
          
          
          });

};