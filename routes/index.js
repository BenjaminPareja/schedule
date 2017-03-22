var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/nosotros', function(req, res, next) {
    res.render('index', { title: 'nosotros' });
});
router.get('/servicios', function(req, res, next) {
    res.render('servicios', { title: 'nuestro-servicio' });
});
router.get('/catalogo', function(req, res, next) {
    res.render('catalogo', { title: 'catalogo' });
});
router.get('/contactenos', function(req, res, next) {
    res.render('contactenos', { title: 'catalogo' });
});
router.get('/horario', function(req, res, next) {
    res.render('horario', { title: 'catalogo' });
});
module.exports = router;
