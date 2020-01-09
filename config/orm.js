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
        });
    },
    
    insertOne: function(table_name, col_name, vals) {
        const queryStr = `INSERT INTO ${table_name} (${col_name.toString()}) VALUES ${vals}`
        connection.query(queryStr, function(err, res) { 
            if (err) {
                throw err;
            }
            cb(res)
        });
    },

    updateOne: function(table_name, col_name, condition) {
        const queryStr = `UPDATE ${table_name} SET ${col_name} WHERE ${condition}`
        connection.query(queryStr, function(err,res) {
            if (err) {
                throw err;
            }
            cb(res); 
        });
    }
}

