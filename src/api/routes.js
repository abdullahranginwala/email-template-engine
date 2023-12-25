const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.post('/upload-template', controllers.uploadTemplate);
router.post('/send-email', controllers.sendEmail);

module.exports = router;
