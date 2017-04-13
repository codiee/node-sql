
//query.js

var pool = require('./config').config

module.exports = {
    getUsers: function(req, res) {
      pool.getConnection(function(err, connection) {
        connection.query('SELECT * from Users', function(err, rows, fields) {
          connection.release();
          if (!err)
            res.json(rows);
          else
            console.log('Error while performing Query.', err);
        });
      });
    },
    addUser: function(req, res) {
      var name = req.body.name;
      var age = req.body.age;
      var city = req.body.city;
      var query = 'Insert into Users (Name, Age, City) values ("'+name+'",'+age+',"'+city+'")';
      console.log(query);
      pool.getConnection(function(err, connection) {
        connection.query(query, function(err, rows, fields) {
          connection.release();
          if (!err)
            res.json(rows);
          else
            console.log('Error while performing Query.', err);
        });
      });
    },
    updateUser: function(req, res) {
      var name = req.body.name;
      var age = req.body.age;
      var city = req.body.city;
      var query = 'Update Users SET Name = "'+name+'", Age = '+age+' , City = "'+city+'" where ID = '+req.params.id+'';
      pool.getConnection(function(err, connection) {
        connection.query(query, function(err, rows, fields) {
          connection.release();
          if (!err)
            res.json(rows);
          else
            console.log('Error while performing Query.', err);
          });
      });
    },
    deleteUser: function(req, res) {
      var query = 'Delete from Users where ID = '+req.params.id+'';
       pool.getConnection(function(err, connection) {
        connection.query(query, function(err, rows, fields) {
          connection.release();
          if (!err)
            res.json(rows);
          else
            console.log('Error while performing Query.', err);
        });
      });
    }
}
