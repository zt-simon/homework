/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('01Login');
});

module.exports = router;