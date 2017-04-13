//database config.js
var mysql = require('mysql')
var app = require('express');
//You can configure any DB here.

var db_config = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b53e02615a7876',
    password: '5b4624e8',
    database: 'heroku_dffa9cad521a868'
};

var pool;

function handleDisconnect() {
    pool = mysql.createPool(db_config);
    return pool;
}

pool = handleDisconnect();
module.exports.config = pool;

