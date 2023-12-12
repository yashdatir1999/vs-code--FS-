var express = require('express');
var router = express.Router();
var fs = require("fs")
/* GET home page. */
router.get('/', function(req, res, next) {
  var files = fs.readdirSync("public/database/yash")
  res.render('index', { files , fname:null ,fdata:null});
});

router.post('/create', function(req, res, next) {
  fs.writeFileSync(`public/database/yash/${req.body.filename}` , "")
  res.redirect("/")
});

router.get('/edit/:fedit', function(req, res, next) {
  var fdata = fs.readFileSync(`public/database/yash/${req.params.fedit}` , "utf-8")
  var files = fs.readdirSync("public/database/yash")
  res.render('index', { files , fdata , fname: req.params.fedit});

});


router.post('/save/:fsave', function(req, res, next) {
  fs.writeFileSync(`public/database/yash/${req.params.fsave}` , req.body.filedata )
  res.redirect(`/edit/${req.params.fsave}`) 
});

router.get('/delete/:del', function(req, res, next) {
  fs.unlinkSync(`public/database/yash/${req.params.del}`)
  res.redirect("/")
});

module.exports = router;
