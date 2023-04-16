const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//template engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

//routes with views
app.get('/', (req, res) => {
    res.render('home');
});

app.all('/api/', (req, res) => {
    console.log("Just got a request!")
    res.send({"data": "Teste de API"})
});
app.listen(process.env.PORT || 3000);