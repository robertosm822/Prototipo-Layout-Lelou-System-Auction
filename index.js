import express from 'express';
import  nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

import  indexRouter from './routes/audictorRoutes.js';

//template engine
nunjucks.configure('views', {
    autoescape:  true,
    express:  app
  });

app.use('/', indexRouter)
//app.use('/users', usersRouter)

app.all('/api/', (req, res) => {
    console.log("Just got a request!")
    res.send({"data": "Teste de API"})
});
app.listen(process.env.PORT || 3000);