var express = require('express');
var router = express.Router();

// links of Home Page
let opt = [ {op:'Message from HOD'},
			{op:'Teaching Faculty'},
			{op:'Department Staff'},
			{op:'Infrastructure'},
			{op:'Department Brochure'},
			{op:'Committees'}];
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('template', { title: 'DUCS',page:'index',opti:opt,cssa:'index'});
});
router.get('/HOD_message',function(req,res){
	res.render('template',{title:'HOD Message',page:'HOD_message',opti:opt,cssa:'hod'});
})
module.exports = router;
