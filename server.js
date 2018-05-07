const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
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

    app.put('/api/todo/:text', (req, res) => {
        console.log('req.params.text', req.params.text)
        db.collection('todo').insert(
            {
                text: req.params.text,
                done: false
            }
        )
    });

    app.delete('/api/todo/:id', (req, res) => {
        try {
            db.collection('todo').deleteOne(
                {'_id': ObjectID(req.params.id)}
            )
        } catch (e) {
            console.log(e)
        }
    });

    app.listen(port, () => `Server running on port ${port}`);
})