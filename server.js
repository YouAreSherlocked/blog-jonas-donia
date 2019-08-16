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

const ObjectId = mongoose.Types.ObjectId;
const app = express();
const port = process.env.PORT || 5555;

const mongoURI = 'mongodb+srv://timo:timo@quotes-cluster-v05ei.azure.mongodb.net/blog-jonas-donia?retryWrites=true&w=majority';
const mongoClient = require('mongodb').MongoClient;


let db = mongoose.createConnection(mongoURI)

// INIT GFS
let gfs;
db.once('open', () => {
  // INIT STREAM
  gfs = Grid(db.db, mongoose.mongo);
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
// mongoClient.connect(mongoURI  , (err, client) => {
//   if (err) return console.log(chalk.bgRed(' CONNECTION ERROR '), err);
//   db = client.db('blog-jonas-donia');
//   app.listen(port, function() {
//     console.log(chalk.green('server is running on port ' + port));
//   })
// })

// MIDLEWARE
app.listen(port, () => console.log(chalk.green('server is running on port ' + port)))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


// POSTS
app.get('/posts', (req, res) => {
  db.collection('posts').find().sort({ created_at: -1 }).toArray((err, result) => {
    res.send({
      posts: result
    })
  })
})

app.get(`/post/:id`, (req, res) => {
  console.log(req.params.id)
  
  db.collection('posts').findOne({"_id":ObjectId(req.params.id)}, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      post: result
    })
  })
})

app.post('/posts', (req, res) => {
  req.body.created_at = new Date()
  req.body.edited_at = new Date()
  console.log(req.body)
  db.collection('posts').insertOne(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save post') + err);
    console.log(chalk.green('post saved'));
    res.redirect('/');
  })
})

app.put('/posts', (req, res) => {
  console.log(req.body._id)
  db.collection('posts')
  .findOneAndUpdate({_id: ObjectId(req.body._id)}, {
    $set: {
      title: req.body.title,
      text: req.body.text,
      edited_at: req.body.edited_at
    }
  }, {
    sort: {_id: -1}
  }, (err, result) => {
    if (err) return console.log(chalk.red('could not update post') + err);
    console.log(chalk.green('post updated'));
    res.redirect('/');
  })
})

app.delete('/posts', (req, res) => {
  console.log(req.body._id)
  db.collection('posts').deleteOne({ "_id" : ObjectId(req.body._id) }, (err, result) => {
    if (err) return console.log(chalk.red('could not delete post') + err);
    
    console.log(chalk.green(`post with id ${req.body._id} deleted`));
    res.redirect('/');
  })
})

app.post('/post', upload.single('img'),(req, res) => {
  res.json({ file: req.file})
})


// COUNTRIES
app.get('/countries', (req, res) => {
  db.collection('countries').find().sort({ created_at: -1 }).toArray((err, result) => {
    res.send({
      countries: result
    })
  })
})

app.get(`/countries/:id`, (req, res) => {
  console.log(req.params.id)
  
  db.collection('countries').findOne({"_id": ObjectId(req.params.id)}, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      country: result
    })
  })
})

app.get(`/countries`, (req, res) => {
  const c = { a: true } 
  db.collection('countries').findOne({"current": Object.bsonsize(c)}, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      country: result
    })
  })
})

app.post('/countries', (req, res) => {
  req.body.created_at = new Date()
  req.body.edited_at = new Date()
  req.body.curret = false
  console.log(req.body)
  db.collection('countries').insertOne(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save country') + err);
    console.log(chalk.green('country saved'));
    res.redirect('/admin');
  })
})


app.put('/countries', (req, res) => {
  console.log(req.body)
  if (!req.body.current) req.body.current = false
  db.collection('countries')
  .findOneAndUpdate({ 'name': req.body.name}, {
    $set: {
      name: req.body.name,
      current: req.body.current,
      edited_at: req.body.edited_at
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return console.log(chalk.red('could not update current country') + err);
    console.log(chalk.green('current country updated'));
    res.redirect('/');
  })
})

app.delete('/countries', (req, res) => {
  console.log(req.body._id)
  db.collection('countries').deleteOne({ "_id" : ObjectId(req.body._id) }, (err, result) => {
    if (err) return console.log(chalk.red('could not delete country') + err);
    
    console.log(chalk.green(`country with id ${req.body._id} deleted`));
    res.redirect('/');
  })
})


// FILES
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