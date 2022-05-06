const router = require('express-promise-router')(); 
const cepController = require('../controllers/cep.controller');

router.get('/cep/:cep', cepController.getCEP);

module.exports = router;