// Require connection.js
const connection = require('./connection.js');

// Create Helpers for value placeholders as 'string' type and 
// MySQL commands for manipulating data
const orm = {
    selectAll: function(table_name, cb) {
        const queryStr = `SELECT * FROM ${table_name};`;
        connection.query(queryStr, function(err,res) {
            if (err) {
                throw err;
            }
           cb(res) 
        })
    },
}

