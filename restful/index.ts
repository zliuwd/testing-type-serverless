var router = require('express').Router();

router.use('/restful', require('./api'));

module.exports = router;
