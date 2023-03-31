const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});
app.listen(process.env.PORT || 3000);