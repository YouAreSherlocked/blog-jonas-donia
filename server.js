const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5555;

let db;
const dbPath = 'mongodb+srv://timo:timo@quotes-cluster-v05ei.azure.mongodb.net/test?retryWrites=true&w=majority';
const mongoClient = require('mongodb').MongoClient;

// CONNECT TO DATABASE
mongoClient.connect(dbPath, (err, client) => {
  if (err) return console.log(chalk.bgRed(' CONNECTION ERROR '), err);
  db = client.db('blog-jonas-donia');
  app.listen(port, function() {
    console.log(chalk.green('server is running on port ' + port));
  })
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// BLOGS

app.get('/blogs', (req, res) => {
  db.collection('blogs').find().toArray((err, result) => {
    res.send({
      blogs: result
    })
  })
})

app.post('/blogs', (req, res) => {
  db.collection('blogs').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save blog') + err);
    console.log(chalk.green('blog saved'));
    res.redirect('/');
  })
})

app.delete('/blogs', (req, res) => {
  db.collection('blogs').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete blog') + err);
    console.log(chalk.green('blogs deleted'));
    res.redirect('/');
  })
})