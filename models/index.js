/**
 * Created by Brandi on 1/5/16.
 */
"use strict";

var moment = require('moment');
var Knex = require('knex')({
    client:'pg',
    connection: {
        host: 'localhost',
        user: 'Brandi',
        password: '',
        database: 'tweets'
    }
});


var Bookshelf = require('bookshelf')(Knex);
Bookshelf.plugin('visibility');

var Comment = Bookshelf.Model.extend({
    tableName: 'comments',
    tweet: function () {
        this.belongsTo(Tweet, 'tweet_id')
    }
});
exports.Comment = Comment;


var Tweet = Bookshelf.Model.extend({
    tableName: 'new_tweets',
    comment: function() {
        return this.belongsTo(Comment, 'comment_id');
    },
    tag: function() {
        return this.belongsToMany(Tag, 'tweet_tags_id', 'tweet_id')
    }
});
exports.Tweet = Tweet;

var Tag = Bookshelf.Model.extend({
    tableName: 'tags',
    tweet: function() {
        return this.belongsToMany(Tweet, 'tweet_tags_id', 'tag_id')
    }
});
exports.Tag = Tag;

exports.Bookshelf = Bookshelf;
