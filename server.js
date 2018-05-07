const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


var url = 'mongodb://localhost:27017/todo';

app.use(cors())

app.use(bodyParser.json())

const port = 5000;

MongoClient.connect(url, function(err, client) {
    const db = client.db('todo')

    app.get('/api/todos', (req, res, next) => {
        db.collection('todo').find({}).toArray(function(err, docs){
            res.json(docs);
        })
    });

    app.put('/api/todo/', (req, res, next) => {
        const id = ObjectID(req.body.id)
        const item = req.body.item
        db.collection('todo').updateOne(
            {'_id': id},
            {$set: item}
        )
    });

    app.post('/api/todo/', (req, res, next) => {
        console.log('req.params.text', req.body)
        db.collection('todo').insert(
            {
                text: req.body.text,
                done: false
            }
        )
    });

    app.delete('/api/todo/:id', (req, res, next) => {
        db.collection('todo').deleteOne(
            {'_id': ObjectID(req.params.id)}
        )

    });

    app.listen(port, () => `Server running on port ${port}`);
})