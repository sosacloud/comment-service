const express = require('express');
const app = express();
const port = 3001;
var bodyParser = require('body-parser');

app.use(express.static('/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/comments', (req, res) => {
res.send('Hello')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));