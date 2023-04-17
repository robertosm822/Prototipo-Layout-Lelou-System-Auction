import  express from 'express';
const  router = express.Router();

router.get('/', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('admin/dashboard.njk', data);
});

router.get('/dashboard', async  function(req, res, next) {
    let  data = {
      message: '',
      layout:  'layout.njk',
      title: ''
    }  
    res.render('admin/dashboard.njk', data);
});

export default router;