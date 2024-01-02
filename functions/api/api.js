const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path')

let records = [];

app.set('view engine', 'ejs');

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/hello', (req, res) => {
  console.log(fs.existsSync(path.join(__dirname, "data.txt")))
  fs.readFile(path.join(__dirname, "data.txt"), 'utf8', function(err, data) {
    if (err) throw err;
    console.log("yes", data)
    res.send(data)
  })
  //res.send("hello")
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
