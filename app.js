require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb+srv://pundirakash:"+process.env.SECRET+"@cluster0.v6gnn.mongodb.net/boardinfinityDB?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});


/////////////////////////////////////////////Defining Schema//////////////////////////////////////////////////

const TodoSchema = new mongoose.Schema({
  taskName: String,
  description: String,
  creator: String,
  duration: Number,
  createdAt: {
    type: Date,
    default:new Date()
  },
  expireAt:{
    type:Date,
    expires:0
  }
});

const Task = mongoose.model("Task", TodoSchema);

//////////////////////////////////////////Routypes////////////////////////////////////////////////////////////////
app.get('/list', function(req, res) {
  Task.find(function(err, task) {
    if (!err) {
      res.send(task);
    } else {
      res.send(err);
    }
  });
});

app.post('/add', function(req, res) {

var dt = new Date();
dt.setSeconds( dt.getSeconds() + req.body.duration );

//New todo task
  const newTask = new Task({
    taskName: req.body.task,
    description: req.body.description,
    creator: req.body.creator,
    duration: req.body.duration,
    expireAt:dt
  });
  console.log(newTask.expireAt);
  newTask.save(function(err) {
    if (!err) {
      res.send("Successfully added a new Task");
    } else {
      console.log(err);
    }
  });
});


//////////////////////////////////////////////End of Routes//////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started");
});
