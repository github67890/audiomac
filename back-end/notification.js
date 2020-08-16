const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const config = require("./config");
var url=config.mongoURI;



module.exports = function(app) {




    app.post('/users/getallnotification', function(req, res) {
////console.log(req.body.id);
  
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },function(err, db) {
    if (err) throw err;
    var dbo = db.db("audiomac");
dbo.collection('notifications').aggregate([
      { $match : {goestoid : ObjectId(req.body.id)}},
      { $sort : { time : 1}},
      { $limit :5},
      { $lookup:
         {
           from: 'uploders',
           localField: 'postedid',
           foreignField: '_id',
           as: 'orderd'
         }
       },

      
       {   $unwind:"$orderd" }, 
  
       {   
        $project:{
          postedid:1,
          onsongid: 1,
          time: 1,
          Role: 1,
          time: 1,
   
            uplodername : "$orderd.userfullname",
            uploderpic : "$orderd.imageurl",
        } 
    }
      ]).toArray(function(err, resdata) {



       /// console.log(resdata);
            res.json(resdata);
      })








   });
  





    });



};