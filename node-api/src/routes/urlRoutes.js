const express = require('express');
const urlController = require('../controllers/urlController');

const router = express.Router();

router.get('/:slug', urlController.getUrl);
router.post('/', urlController.postUrl);

module.exports = router;