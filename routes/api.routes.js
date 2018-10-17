const express = require('express');
const router = express.Router();

const thing = require('./api/thing.route');

router.use('/thing', thing);

module.exports = router;