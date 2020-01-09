// Require connection.js
const connection = require('./connection.js');

// Write Helpers for: creating SQL value placeholders as 'string' type AND converting key/value pairs in objects to proper SQL syntax.
function questMarktoStr(num) {
    placeholder = [];

    for (let i=0; i<num; i++) {
        placeholder.push("?"); 
    }
    return placeholder.toString();
}

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
    
    insertOne: function(table_name, col_name, vals, cb) {
        const queryStr = `INSERT INTO ${table_name} (${col_name.toString()}) VALUES ${questMarktoStr(vals.length)}`
        console.log(queryStr);
        connection.query(queryStr, vals, function(err, res) { 
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table_name, col_name, condition, cb) {
        const queryStr = `UPDATE ${table_name} SET ${col_name} WHERE ${condition}`
        connection.query(queryStr, function(err,res) {
            if (err) {
                throw err;
            }
            cb(res); 
        });
    }
}

module.exports = orm; 
