var express = require('express');
var router = express.Router();
const countryController = require('../controllers/countries');

router.get('/', countryController.index);
router.get('/:id',countryController.index);

router.get('/add', countryController.add);
router.get('/delete', countryController.delete);
router.get('/edit', countryController.edit);

module.exports = router;
