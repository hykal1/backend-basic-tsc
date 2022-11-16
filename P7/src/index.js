const express = require('express');
const data = require('./data');
const routes = require('./routes');

const app = express();

/**
 * see more information abt middleware and interceptor
 * https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js
 */
app.use(express.json()); // Middleware
app.use('/api', routes)

/* // Query
app.get('/api/test-get', (req, res) => {
    console.log(req.query);
    const id = req.query;
    // TODO: cari di database
    const data = {
        judul: "PRAKTIKUM KOMUNIKASI DATA DAN JARINGAN KOMPUTER",
        course_content: [{}, {}, {}]
    }
    res.json(data)
})

// Params
app.get('/api/profile/:username', (req, res) => {
    console.log(req.params);
    const { username } = req.params;

    res.send("Halo, " + username + "!");
})

app.post('/api/test-post', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.delete('/api/test-delete', (req, res) => {
    res.send(true);
}) */

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})