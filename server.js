const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

const app = express();

var url = 'mongodb://localhost:27017/todo';

app.use(cors())

const port = 5000;

MongoClient.connect(url, function(err, client) {
    const db = client.db('todo')

    app.get('/api/todos', (req, res) => {
        db.collection('todo').find({}).toArray(function(err, docs){
            console.log(docs)
            res.json(docs);
        })
    });

    app.listen(port, () => `Server running on port ${port}`);
})