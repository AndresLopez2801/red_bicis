var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletacontrollerapi');

router.get('/', bicicletaController.bicicleta_list);
router.post('/create', bicicletaController.bicicleta_create);
module.exports = router;