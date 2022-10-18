const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.Port || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');

app.get('/', (req, res) => {
    res.send('New Api Running')
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log('Dragon News Server runnig on port', port);
})