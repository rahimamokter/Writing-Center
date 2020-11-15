const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//specify where to find the schema
const Tutor = require('./models/tutor')

// connect and display the status 
mongoose.connect('mongodb://localhost:27017/MSIT6203', 
   { useNewUrlParser: true,
    useUnifiedTopology: true
   })

  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});

app.get('/tutors', (req, res, next) => {
  //call mongoose method find (MongoDB db.Tutors.find())
  Tutor.find() 
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  });
});

// serve incoming post requests to /tutors
app.post('/tutors', (req, res, next) => {    
  // create a new tutor variable and save request’s fields 
  const tutor = new Tutor({
    title: req.body.firstName,
    description: req.body.selfIntro
  });
  
//send the document to the database 
  tutor.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
  });
  
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/tutors/:id", (req, res, next) => {
  Tutor.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

  module.exports = app;
  