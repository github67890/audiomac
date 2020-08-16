

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;


module.exports = function(app) {


app.post("/users/getsinglesongsnavbar", (req, res) => {

    var allsongs=[];
    var allalbums=[];
    var albumstuff=[];
    var allusers=[]
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },async function(err, db) {
      if (err) throw err;
      var dbo = db.db("audiomac");
      /*Return only the documents with the address "Park Lane 38":*/
      var query = {};
  
  
    //   dbo.collection("singlesongs").find(query).toArray(function(err, result) {
    //     if (err) throw err;
    //  /// console.log(result);
    //     db.close();
    //     res.json(result);
        
    //   });
     
  
  
  
  
  
    allsongs=await dbo.collection('singlesongs').aggregate([
        { $match : {}},
        { "$addFields": { "mysongtitle": "$songtitle" } },
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
           myartist: 1,
            mysongtitle:1,
              
          } 
      }
        ]).toArray();
  
  
  
    
         getalbums=await dbo.collection('albums').aggregate([
            { $match : {}},
           
            { $group : { _id : {album:"$album",uploderid:"$uploderid"} }},
            { "$addFields": { "mysongtitle": "$_id.album" } },
            {   
                $project:{
                
                  mysongtitle:1,
                    
                } 
            }
        
            ]).toArray();




            allusers=await dbo.collection('uploders').aggregate([
                { $match : {}},
               
             
                { "$addFields": { "mysongtitle": "$userfullname" } },
                {   
                    $project:{
                    
                      mysongtitle:1,
                        
                    } 
                }
            
                ]).toArray();






 
      ///console.log(allusers);
        ////concat/////////////////
       var obj= allsongs.concat(getalbums);
       var newobj=obj.concat(allusers)
     /// console.log(newobj);
        res.json(newobj);
  
     });
    
  
     
  
  
  
  });

}