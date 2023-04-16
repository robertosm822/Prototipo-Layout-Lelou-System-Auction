const  express = require('express');
const  router = express.Router();

router.get('/', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('home.njk', data);
});

router.get('/registrar-se', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('register.njk', data);
});

module.exports = router