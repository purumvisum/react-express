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

    app.put('/api/todo', (req, res) => {
        db.collection('todo').insert(
            {
                text: 'qwe3',
                done: false
            }
        )
    });

    app.delete('/api/todo/:id', (req, res) => {
        // console.log('req',req.url)
        // console.log('req params',req.params.id)
        // { 'text': 'qwe' }

        const id = new ObjectID(req.params.id)
        console.log(id)
        try {
            db.collection('todo').deleteOne(
                {'_id': id}
            )
        } catch (e) {
            console.log(e)
        }
    });

    app.listen(port, () => `Server running on port ${port}`);
})