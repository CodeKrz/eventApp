var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/rsvp", function(err, response){
   if(err){ console.log( err); }
   else{ console.log('Connected to ' + db, ' + ', response); }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));


app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
 });

 var Schema = mongo.Schema;

var GuestSchema = new Schema({
 firstName: { type: String   },
 lastName: { type: String   },
 email: { type: String   },
 phoneNum: { type: String   },
 attending: { type: Boolean }
},{ versionKey: false });


var model = mongo.model('guest', GuestSchema, 'guest');

app.post("/api/SaveGuest",function(req,res){
 var mod = new model(req.body);
 if(req.body.mode =="Save")
 {
    mod.save(function(err,data){
      if(err){
         res.send(err);
      }
      else{
          res.send({data:"Thank you for your RSVP"});
      }
 });
}
else
{
 model.findByIdAndUpdate(req.body.id, { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, phoneNum: req.body.phoneNum, attending: req.body.attending},
   function(err,data) {
   if (err) {
   res.send(err);
   }
   else{
          res.send({data:"Your RSVP has been UPDATED"});
     }
 });


}
 })

 app.post("/api/deleteGuest",function(req,res){
    model.remove({ _id: req.body.id }, function(err) {
     if(err){
         res.send(err);
     }
     else{
            res.send({data:"Record has been Deleted..!!"});
        }
 });
   })



 app.get("/api/getGuest",function(req,res){
    model.find({},function(err,data){
              if(err){
                  res.send(err);
              }
              else{
                  res.send(data);
                  }
          });
  })


app.listen(8080, function () {

 console.log('Example app listening on port 8080!')
})
