var express = require('express'),
	router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});
router.get('/View', function(req, res){
	res.render('view');
});


module.exports = router;


