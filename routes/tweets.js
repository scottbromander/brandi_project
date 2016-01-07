/**
 * Created by Brandi on 1/7/16.
 */
var express = require('express');
var router = express.Router();
var Tweet = require('../models/index').Tweet;
var Tweets = require('../data/collection').TweetsCollection;

/* GET home page. */
router.get('/', function(req, res, next) {
    Tweets.forge()
        .query(function(qb) {
            qb.limit(100);
        })
        .fetch()
        .then(function(tweet){
            res.json({data: tweet.toJSON()});
        })
});


module.exports = router;

