const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use('/tweets', require("./tweets.js"))
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { title:"Check Out the tweets!", tweets: tweets } );
});

module.exports = router;