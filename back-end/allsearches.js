

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {


////////////////////////////// for data search

app.post("/users/singlesongsearch", (req, res) => {

console.log(req.body.postedid);



var allsongs=[];
var checksubscribe=[];
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },async function(err, db) {
      if (err) throw err;
      var dbo = db.db("audiomac");
      /*Return only the documents with the address "Park Lane 38":*/
      var query = {};
  
     allsongs= await dbo.collection('singlesongs').aggregate([
       
        { $match : {songtitle:{ $regex: req.body.datasearch }}},
    
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
            plays: 1,
      likes: 1,
      share: 1,
      playlist: 1,
      songpicaddress:1,
      songstream:1,
      uploderid:1,
      genre:1,
      time:1,
            artistname:1,
            songtitle:1,
              uplodername : "$orderd.userfullname",
              uploderid : "$orderd._id",
          } 
      }
        ]).toArray();
  
  
  
      
  /////////

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
    






      ///  console.log(allsongs);
        res.json(allsongs);
  
  
     });
    
  
  
  
  
  });








  app.post("/users/getalbumsearch", (req, res) => {

    albumstuff=[];
    myobj=[];
   
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },function(err, db) {
      if (err) throw err;
      var dbo = db.db("audiomac");
      /*Return only the documents with the address "Park Lane 38":*/
      var query = {};
  
      dbo.collection('albums').aggregate([
        { $match : {album:{ $regex: req.body.datasearch }}},
        { $group : { _id : {album:"$album",uploderid:"$uploderid"}, totalsongs: { $sum: 1 } }},
    
        ]).toArray(async function(err, resdata) {
   
                for(var x = 0; x<resdata.length; x++) {
                  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',[x]);
                  console.log(resdata[x].totalsongs);
        
                 albumstuff= await  dbo.collection('singlesongs').aggregate([
                   
                    { $match : { album: resdata[x]._id.album,uploderid:resdata[x]._id.uploderid} },
                    { $limit: 1 },
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
                        album:1,
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
                      } 
                  }
                    ]).toArray();
        
        
                    albumstuff[0].totalsongs = resdata[x].totalsongs;
     ///
     
   ////  console.log(albumstuff);
          myobj=myobj.concat(albumstuff);
        
        
                }
        
            

            for(var x = 0; x<myobj.length; x++) {
              if(req.body.postedid!='null'){


                checksubscribe=await dbo.collection("subscribers").aggregate([
                    { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId (myobj[x].uploderid)} },
                    
                    
                  
                    ]).toArray();
            
                    if(checksubscribe!=''){
                       //// console.log('yes');
                  /// res.json("yes");
                  myobj[x].checksubscribe = 'yes';
                                      }
                                    if(checksubscribe==''){
                                     ///  console.log('yes');
                                     myobj[x].checksubscribe = 'no';
                              ///  res.json("no");  
                           }
               
              }

              else{
                myobj[x].checksubscribe = 'no';

              }
            }
            

             //// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
             /// console.log(myobj );
  


            res.json(myobj);
        
              })
        
  
  
  
  
  
  
  
  
     });
    
  
  
  
  
  });
  
  ///////////////////profile search

  app.post("/users/getprofilesearch", (req, res) => {
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
           
          { $match : {userfullname:{ $regex: req.body.datasearch }}},
        
         
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
    

}