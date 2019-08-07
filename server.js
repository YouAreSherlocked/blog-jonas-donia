const chalk = require('chalk');
const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5555;

let db;
const mongoURI = 'mongodb+srv://timo:timo@quotes-cluster-v05ei.azure.mongodb.net/blog-jonas-donia?retryWrites=true&w=majority';
const mongoClient = require('mongodb').MongoClient;


const connection = mongoose.createConnection(mongoURI)

// INIT GFS
let gfs;
connection.once('open', () => {
  // INIT STREAM
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('uploads');
})

// CREATE STORAGE ENGINE
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// CONNECT TO DATABASE
/*mongoClient.connect(dbPath, (err, client) => {
  if (err) return console.log(chalk.bgRed(' CONNECTION ERROR '), err);
  db = client.db('blog-jonas-donia');
  app.listen(port, function() {
    console.log(chalk.green('server is running on port ' + port));
  })
})*/

// MIDLEWARE
app.listen(port, () => console.log(chalk.green('server is running on port ' + port)))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// POSTS
/*
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
})*/

app.post('/post', upload.single('img'),(req, res) => {
  res.json({ file: req.file})
})

app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }
    return res.json(files)
  })
  
})