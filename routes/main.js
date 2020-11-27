const express =require('express');
const router =express.Router();
const mainController = require('../../Heroes/controllers/mainController');


 
// Ruta Raíz / ➝ Home
router.get('/',mainController.index);

// Ruta Créditos
router.get('/creditos',mainController.creditos)

module.export= router