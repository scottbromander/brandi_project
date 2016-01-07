/**
 * Created by Brandi on 1/6/16.
 */
"use strict";

var Model = require('../models/index.js');
var Tweets = Model.Bookshelf.Collection.extend({
    model: Model.Tweet
});
exports.TweetsCollection = Tweets;

var Comments = Model.Bookshelf.Collection.extend({
    model: Model.Comment
});
exports.CommentsCollection = Comments;

var Tags = Model.Bookshelf.Collection.extend({
    model: Model.Tag
});
exports.TagsCollection = Tags;
