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


// POSTS

app.get('/posts', (req, res) => {
  db.collection('posts').find().toArray((err, result) => {
    res.send({
      posts: result
    })
  })
})

app.post('/posts', (req, res) => {
  req.body.created_at = new Date()
  req.body.edited_at = new Date()
  console.log(req.body)
  db.collection('posts').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save post') + err);
    console.log(chalk.green('post saved'));
    res.redirect('/');
  })
})

app.delete('/posts', (req, res) => {
  db.collection('posts').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete posts') + err);
    console.log(chalk.green('posts deleted'));
    res.redirect('/');
  })
})