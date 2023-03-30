var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var v1 = Math.floor(Math.random() * 10);
    var v2 = Math.floor(Math.random() * 10);
    var v3 = Math.floor(Math.random() * 10);
    var absFunction = Math.abs(v1);
    var acosFunction = Math.acos(v2);
    var sinFunction = Math.sin(v3);
    res.render('computation',
                {
                    title: 'Vinay Meenkeri Computation function. ',
                    v1: v1,
                    v2: v2,
                    v3: v3,
                    abs: absFunction,
                    acos: acosFunction,
                    sin: sinFunction
                });
});
module.exports = router;