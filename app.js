const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app=express();

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/boardinfinityDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const TodoSchema =new mongoose.Schema({
  taskName:String,
  description:String,
  creator:String,
  duration:Number,
  createdAt:Date,
  // expire_at: {type: Date, default: createdAt, expires: duration}
});

const Task=mongoose.model("Task",TodoSchema);

app.get('/list',function(req,res){
  Task.find(function(err,task){
    if(!err){
      res.send(task);
    }
    else{
      res.send(err);
    }
  });
});

app.post('/add',function(req,res){
  const newTask=new Task({
    taskName:req.body.task,
    description:req.body.description,
    creator:req.body.creator,
    duration:req.body.duration,
    createdAt:new Date()
  });
  newTask.save(function(err){
    if(!err){
      res.send("Successfully added a new Task");
    }
  });
});




app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});
