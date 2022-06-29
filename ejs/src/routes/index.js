const { Router } = require('express');
const router = Router();
const { routeController } = require('../controllers/routesController')
const productos = require('./productos');

router.get('/', routeController);
router.use('/productos', productos);

module.exports = router;