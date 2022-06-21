var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('content-type', 'text/javascript');
  res.render('embed_content', { title: 'Embed Child', layout: 'empty_layout' });
});

module.exports = router;
