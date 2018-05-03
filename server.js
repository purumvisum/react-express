const express = require('express');
// var cors = require('cors')

const app = express();

// app.use(cors())

app.get('/api/customers', (req, res) => {
    console.log(req.url)
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
});

app.get('/test', (req, res) => {
    console.log(req.url)
    res.end('Hello')
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);