const express = require("express");
const app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
const cors = require("cors");
aws = require('aws-sdk'),
  
    multer = require('multer'),
    multerS3 = require('multer-s3');


var multer = require("multer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var usermodel = require("./user");
var singsongmodel = require("./singlesong");
var userrequests = require("./userrequests");
var admin = require("./admin");
///const http = require("http");
///const socketIo = require("socket.io");
var path = require('path');
var myfilename='';
var mysongname='';
var filearray = [];
var myuser = usermodel.find({});
var mysinglesong= singsongmodel.find({});
var notifications=require("./notification");
var subscribeme=require("./subscribeme");

var editsong=require("./editsong");



var likethis=require("./likethis");

var sharethis=require("./sharethis");
var profiledata=require("./profiledata");
var subscribethis=require("./subscribethis");
var navbarsearch=require("./navbarsearch");
var playlist=require("./playlist");
var allsearches=require("./allsearches");
var getuserinfo=require("./getuserinfo");

var sidebarsearches=require("./sidebarsearches");


const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const config = require("./config");
var url=config.mongoURI;
//var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";
aws.config.update({
  secretAccessKey: 'Oxuzwk92aUDBAmEOdpl5CWFr2rfDauyH7Wgs8on8',
  accessKeyId: 'AKIAZDJU4JOQIX7GUKQT',
  region: 'us-east-1'
});
s3 = new aws.S3();


  ///var url = "mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/audiomac";







  app.get('/', (req, res) => {
   //// res.sendFile(__dirname + '/index.html');
  });


 


  
  
  







console.log("call to sockt");

 
  io.on("connection", (socket) => {
   
    console.log('connection on');
   
    socket.on("songid", (data)=>{
   //   console.log(songid);
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
      
        var songid=data;
          
      
         var stuff=[];
         var contstuff=[];
        var postedusers=[];
        
  
  
  
  
  
  
  
  
  calltry();
  
  
  
  
  
  
  
  
        async function calltry(){
  
  
  
          var songid=data;
          
        ///  console.log(songid);
           var stuff=[];
          var postedusers=[];
          
          const db = await MongoClient.connect(url);
          
          try {
           
            var dbo = db.db("audiomac");
            var query = {onsongid:songid} ;
           
            stuff = await  dbo.collection("songscomments").aggregate([
              { $match : { onsongid : songid} },
              { "$addFields": { "userObjId": { "$toObjectId": "$postedid" } } },
              { $lookup:
                 {
                   from: 'uploders',
                   localField: 'userObjId',
                   foreignField: '_id',
                   as: 'orderd'
                 }
               },
               {   $unwind:"$orderd" }, 
          
               {   
                $project:{
                     comment:1
                     ,time:1,
                    username : "$orderd.userfullname",
                    userimage : "$orderd.imageurl",
                
                } 
            }
              ]).toArray();
          

              contstuff = await  dbo.collection("songscomments").aggregate([
                { $match : { onsongid : songid} },
               { $group: { _id: null, count: { $sum: 1 } } }
              
                ]).toArray();
          

                if (contstuff==''){
                  var dummy=[{ _id: null, count: 0 }];
                  var obj = dummy.concat(stuff);
                }
                else{
                var obj = contstuff.concat(stuff);
                }

               /// var obj = contstuff.concat(stuff);






             /// return stuff;
            ////console.log(stuff);
            console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
           ///// console.log(stuff);
           socket.broadcast.emit(data, obj);
          
          
        
         
         /// 
        //  console.log(data);
           
        
        
        
        
          } finally {
          
          }
          
        
        
        
        
        }
  
  
     });
  


});

  


 

// router.post("/users/haha", (req, res) => {

// console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
// });






// create user
router.post("/users/signup", (req, res) => {
 var username= req.body.userfullname;
  var pass=req.body.pass;
 /// console.log(username)
var checkuser='';
var fltrparameter={ $and:[{username:username}]}
var userfilter=usermodel.find(fltrparameter);
 userfilter.exec(function(err,data){
  if(err) throw err;
 // console.log(data);
checkuser=data;

//res.json(data);



});



if(checkuser==''){




  var userdetail = new usermodel({
   
    username: req.body.username,
    pass: req.body.pass,
    imageurl:req.body.imageurl,
    userfullname:req.body.userfullname,

    profileemail: '',
    facevookurl: '',
    twitterurl: '',
    youtubeurl:'',
    instaurl: '',
    verified: 'no',


  });
 // console.log(userdetail);

  userdetail.save(function (err, res1) {
    if (err) throw err;

    myuser.exec(function (err, data) {
    /////////  console.log('yess')
      if (err) throw err;

      res.json('submitted');
    });
  });

}


else{
  res.json('already');

}
});






/////////////////////////for sign in////////////////

router.post("/users/sigin", (req, res) => {

  


console.log(req.body);











  var username= req.body.username;
   var pass=req.body.pass;
 
 var checkuser='';
 var fltrparameter={ $and:[{username:username},{pass:pass}]}
 var userfilter=usermodel.find(fltrparameter);
  userfilter.exec(function(err,data){
   if(err) throw err;
 checkuser=data;
 
 
 if(checkuser!=''){
 res.json(data);
 }
 else{
  res.json("no");
 }
 ///window.localStorage.setItem('token',data[0]._id)
 });


 });
 

 router.post("/users/example", (req, res) => {
console.log('ssssssssssssss')
  console.log(req.body);

 });

////////////////upload

var printname='';

app.use(express.static("client/build"));

// express route where we receive files from the client
// passing multer middleware
var myfilearray=[];
var myorginalname=[];
/////////////////////////for local storaogae/////////////
// const storage = multer.diskStorage({
  
//   destination: function (req, file, cb) {
//     cb(null, "public");
//   },
//   filename: function (req, file={}, cb) {
//     cb(null, ( printname=myfilename = Date.now() + "-" + file.originalname), ( printorginalname=myfilename = file.originalname));
//    myfilearray.push(printname);
//    myorginalname.push(printorginalname);
//   },
// });

// const upload = multer({ storage });
////////////////////// for amazon s3 ////////////////
var upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: 'mytestbucketpak',
      key: function (req, file, cb) {
          console.log(file);
          cb(null, ( printname=myfilename = Date.now() + "-" + file.originalname), ( printorginalname=myfilename = file.originalname));
            myfilearray.push(printname);
   myorginalname.push(printorginalname);
      }
  })
});

/////////////////////////////handle my diles data///////////////////
router.post('/users/files' ,  upload.array('file'), (req, res) => {

  const file = req.file; // file passed from client
  const meta = req.body; // all other values passed from the client, like name, etc..

   console.log(req.body);
  









   /// console.log(myfilearray.length);
   var songpichere=myfilearray[1]
   var songmp3here=myfilearray[0];
   myfilearray=[];
 
   myfilearray.length=0;
   while( myfilearray.length > 0) {
     myfilearray.pop();
 }
  /// console.log(req.body.tags);
  var str = req.body.tags;
var ar = str.split(','); // no separator passed to split
///console.log( ar );


var songfeature=[];
ar.forEach(element => 
 
 songfeature.push(element)
 

   
   );



   let d = new Date();
   let timestamp = d.getTime();




    var uploderid=req.body.uploderid;
  var singlesongdetail = new singsongmodel({
   
    artistname: req.body.artistname,
    songtitle: req.body.songtitle,
    featuring: songfeature,
    producers: req.body.producers,
    genre: req.body.genre,
    tag1: req.body.tag1,
    tag2: req.body.tag2,
    tag3: req.body.tag3,
    tag4: req.body.tag3,
    album: req.body.album,
    youtubeurl: req.body.youtubeurl,
    songdescription: req.body.songdescription,

    songurl: req.body.songurl,
    privacy: req.body.privacy,
    uploderid: ObjectId(req.body.uploderid),
    plays:0,
    likes:0,
    share:0,
    playlist:0,
    songpicaddress:songpichere,
    songstream:songmp3here,
    songtype:req.body.songtype,
    time:timestamp
  });
  
  
  

  singlesongdetail.save(function (err, res1) {
    if (err) throw err;

    mysinglesong.exec(function (err, data) {
 
      if (err) throw err;

    ////  res.json('submitted');
      
     
    });
  });

  
 
  
  var songdataid=singlesongdetail._id;

 

  // MongoClient.connect(url, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // },function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("audiomac");
  //   var myobj = {songmp3:songmp3here,songdataid: ObjectId(songdataid)};
  //   dbo.collection("songstream").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //   ///  console.log("1 document inserted");
  //    // res.json('submitted');
  //  //// calltry("5ea5624b309ef439d0fb82f1","fake");

    
  //   //  db.close();
     
  //   }
  //   )})








  



  
   ar.forEach(element => 
    
    
    
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },function(err, db) {
      if (err) throw err;
      var dbo = db.db("audiomac");
      var myobj = {featuringtag:element,songdataid: ObjectId(songdataid)};
      dbo.collection("songsfeatures").insertOne(myobj, function(err, res1) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json('submitted');
  
       
      }
      )})
      
      );





 






 

});








////////////////////////////////upload album //////////////multippe files

router.post('/users/multiplefiles' ,  upload.array('file'), (req, res2) => {

  const file = req.file; // file passed from client
  const meta = req.body; // all other values passed from the client, like name, etc..

  ///  console.log(req.body);
  
   /// console.log(myfilearray.length);
   var songpichere=myfilearray[0]

  /// console.log(req.body.tags);
  var str = req.body.tags;
var ar = str.split(','); // no separator passed to split
///console.log( ar );
    var uploderid=req.body.uploderid;

    let d = new Date();
    let timestamp = d.getTime();
 
    for(var x = 1; x<myfilearray.length; x++) {
      var singlesongdetail = new singsongmodel({
   
   
        artistname: req.body.artistname,
        songtitle: myorginalname[x].substr(0, myorginalname[x].indexOf('.')),
        featuring: req.body.featuring,
        producers: req.body.producers,
        genre: req.body.genre,
        tag1: req.body.tag1,
        tag2: req.body.tag2,
        tag3: req.body.tag3,
        tag4: req.body.tag3,
        album: req.body.album,
        youtubeurl: req.body.youtubeurl,
        songdescription: req.body.songdescription,
    
        songurl: req.body.songurl,
        privacy: req.body.privacy,
        uploderid: ObjectId(req.body.uploderid),
        plays:0,
        likes:0,
        share:0,
        playlist:0,
        songpicaddress:songpichere,
        songtype:req.body.songtype,
        time:timestamp,
        songstream:myfilearray[x]
        
      });
      
      
      
    
      singlesongdetail.save(function (err, res1) {
        if (err) throw err;
    
        mysinglesong.exec(function (err, data) {
     
          if (err) throw err;
    
         /// res.json('submitted');
          
         
        });
      });
    
      
     
      
      var songdataid=singlesongdetail._id;




////////////////for  make album/////////////////////
MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},function(err, db) {
  if (err) throw err;
  var dbo = db.db("audiomac");
  var myobj = {album:req.body.album,songdataid: ObjectId(songdataid), uploderid: ObjectId(req.body.uploderid)};

  dbo.collection("albums").insertOne(myobj, function(err, res) {
    if (err) throw err;
  ///  console.log("1 document inserted");
   // res.json('submitted');
 //// calltry("5ea5624b309ef439d0fb82f1","fake");

 console.log("run album");
  //  db.close();
   
  }
  )})




///////////////for featuring////////


    
    
       ar.forEach(element => 
        
        
        
        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },function(err, db) {
          if (err) throw err;
          var dbo = db.db("audiomac");
          var myobj = {featuringtag:element,songdataid: ObjectId(songdataid)};
          dbo.collection("songsfeatures").insertOne(myobj, function(err, res1) {
            if (err) throw err;
          ///  console.log("1 document inserted");
           res2.json('submitted');
         //// calltry("5ea5624b309ef439d0fb82f1","fake");
      
          
          //  db.close();
           
          }
          )})
          
          );
    
    
    
    
    



    }



    
   myfilearray=[];
   myfilearray.length=0;
   while( myfilearray.length > 0) {
     myfilearray.pop();
 }
  
 myorginalname=[];
 myorginalname.length=0;
 while( myorginalname.length > 0) {
  myorginalname.pop();
}








 

});










router.post("/users/upload", (req, res) => {
 /// console.log(req.body);
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    },
    filename: function (req, file, cb) {
      cb(null, (myfilename = Date.now() + "-" + file.originalname));
      //myfilename=file.originalname;
    },
  });

  var upload = multer({ storage: storage }).single("file");

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
  ///console.log(myfilename);
});



////////////////upload song
router.post("/users/uploadsongpic", (req, res) => {
////  console.log(req.body);
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    }, 
    filename: function (req, file, cb) {
      cb(null, (mysongname = Date.now() + "-" + file.originalname));
      //myfilename=file.originalname;
    },
  });

  var upload = multer({ storage: storage }).single("songpic");

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
  ///console.log(mysongname);

});

//////////////get single all songs//////////
router.post("/users/getsinglesongs", (req, res) => {

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
      { $match : {}},
      { $sort : { plays : -1,likes : -1,share : -1,playlist:-1}},
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
    songtype:1,
    genre:1,
    time:1,




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



router.post("/users/getexclusives", (req, res) => {

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
      { $match : {}},
      { $sort : { time : -1}},
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
    songtype:1,
time:1,


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







///////////////////////search by genre//////////////////////
router.post("/users/getsongsbbygenre", (req, res) => {

  
  
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
    var dbo = db.db("audiomac");
    /*Return only the documents with the address "Park Lane 38":*/
    var query = {};

    dbo.collection('singlesongs').aggregate([
      { $match : {genre:req.body.searcbygenre}},
  
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
      ]).toArray(function(err, resdata) {



     //// console.log(resdata);
            res.json(resdata);
      })








   });
  




});

///////////////////////display album songs///////////

router.post("/users/getalbumsongs", (req, res) => {

 // console.log(req.body);
  
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


    allsongs= await   dbo.collection('singlesongs').aggregate([
      { $match : {album:req.body.albumname,uploderid:ObjectId(req.body.id)}},
  
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
   /// uploderid:1,
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
        
    
    
    
    
    
    console.log('ssssssssssssssssssssssss');
           //// console.log(allsongs);
            res.json(allsongs);










   });
  




});




//////////////////////////for album/////////////
router.post("/users/getalbum", (req, res) => {

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
      { $match : {}},
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
                        uplodertick:"$orderd.verified",
                    } 
                }
                  ]).toArray();
      
      
                 albumstuff.totalsongs = resdata[x].totalsongs;
   ///
   
   console.log(albumstuff);
        myobj=myobj.concat(albumstuff);
      
      
              }
      
            console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
         /// console.log(myobj );






        for(var x = 0; x< myobj.length; x++) {
  
  
          if(req.body.postedid!='null'){
          
          console.log('ruuuuuuuuuuuuun');
              checksubscribe=await dbo.collection("subscribers").aggregate([
                  { $match : { postedid : ObjectId (req.body.postedid),goestoid:ObjectId ( myobj[x].uploderid)} },
                  
                  
                
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
              
          
          
          
          
          
          
                  ///console.log(allsongs);
                ///  res.json(allsongs);
  
      
      










          res.json(myobj);
      
            })
      








   });
  




});







router.post("/users/getsongpagedata", function (req, res, next) {

 // console.log(req.body.id);
  
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
    var dbo = db.db("audiomac");
  ///  console.log('haaaaaaaaaaa');
    /*Return only the documents with the address "Park Lane 38":*/
    if(mongoose.Types.ObjectId.isValid(req.body.id)){
    var query = {_id:ObjectId(req.body.id)} ;
    dbo.collection("singlesongs").find(query).toArray(function(err, result) {
      if (err) throw err;
    ///  console.log('haaaaaaaaaaa')
///
// console.log(result);
 if(result==''){
   
  res.json('noresult');
 }
 else{
   res.json(result);
  console.log(result);
  



  var myquery = {  _id:ObjectId (result[0]._id)};
  var newvalues = { $set: {plays:result[0].plays+1 } };
  dbo.collection("singlesongs").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
  ///  console.log("1 document updated");
    ///db.close();
  });





  
  }
     /// db.close();
      
      
    });
  }
  else{
   //// console.log('noooo');
    res.json('noresult');
  }
  });
  


  

});



router.post("/users/getcommentonsong", function (req, res, next) {
 

 
  //console.log(req.body);

  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
    var dbo = db.db("audiomac");
    var myobj = { postedid: req.body.postedid, onsongid: req.body.onsongid,  comment: req.body.comment,time: req.body.time};
    dbo.collection("songscomments").insertOne(myobj, function(err, res) {
      if (err) throw err;
     // console.log("1 document inserted");
     // res.json('submitted');
   //// calltry("5ea5624b309ef439d0fb82f1","fake");

    
    //  db.close();
     
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
            console.log('hssssssssssss');
       ///  console.log(resdata);


  var myobj1 = { postedid: ObjectId(req.body.postedid), onsongid:ObjectId (req.body.onsongid),  Role: 'comment',time: req.body.time,goestoid:resdata[0].uploderid};
    dbo.collection("notifications").insertOne(myobj1, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
     // res.json('submitted');
   //// calltry("5ea5624b309ef439d0fb82f1","fake");

    
      db.close();
     
    });

            });





  






  ////
});

  res.json('submitted');



});


router.post("/users/getallcoments",  async function (req, res, next) {
var songid=req.body.id;
///console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
///console.log(songid);
 var stuff=[];
 var contstuff=[];
var postedusers=[];

const db = await MongoClient.connect(url);

try {
 


  var dbo = db.db("audiomac");
  var query = {onsongid:req.body.id} ;
 
  stuff = await  dbo.collection("songscomments").aggregate([
    { $match : { onsongid : req.body.id} },
 
    { "$addFields": { "userObjId": { "$toObjectId": "$postedid" } } },
    { $lookup:
       {
         from: 'uploders',
         localField: 'userObjId',
         foreignField: '_id',
         as: 'orderd'
       }
     },
     {   $unwind:"$orderd" }, 

     {   
      $project:{
           comment:1
           ,time:1,
          username : "$orderd.userfullname",
          userimage : "$orderd.imageurl",
      
      } 
  }
    ]).toArray();



    contstuff = await  dbo.collection("songscomments").aggregate([
      { $match : { onsongid : req.body.id} },
     { $group: { _id: null, count: { $sum: 1 } } }
    
      ]).toArray();




  
} finally {

}


console.log('gggggggggggggggggggggggg');
//  console.log(stuff);
//  console.log(contstuff[0].count);

 //var obj = Object.assign(stuff,contstuff );
 //console.log(contstuff);
 if (contstuff==''){
   var dummy=[{ _id: null, count: 0 }];
   var obj = dummy.concat(stuff);
 }
 else{
 var obj = contstuff.concat(stuff);
 }
  console.log('aaaaaaaaaaaaaaaaa');

//// console.log(JSON.stringify(stuff));
//console.log(JSON.parse(JSON.stringify(obj)));
///console.log(obj[0].count);

res.json(obj);


});

notifications(router);
likethis(router);
sharethis(router);
subscribeme(router);
editsong(router)
profiledata(router);
subscribethis(router);
sidebarsearches(router);
navbarsearch(router);
userrequests(router);
admin(router);
allsearches(router);
getuserinfo(router);

playlist(router);


if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.use("/api", router);
server.listen(port, () => console.log(`Listening on port ${port}`));





