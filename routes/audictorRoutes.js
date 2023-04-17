import  express from 'express';
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

router.get('/entrar', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('login.njk', data);
});

router.get('/contato', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('contact.njk', data);
});

router.get('/sobre', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('aboult.njk', data);
});

router.get('/faqs', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('faqs.njk', data);
});

router.get('/404', async function (req, res, next){
  const data = {
    layout: ''
  };
  res.render('404-error.njk', data);
});

export default router;