// Require connection.js
const connection = require('./connection.js');

// Write Helper for: creating SQL value placeholders as 'string' type
function questMarktoStr(num) {
    const placeholder = [];

    for (let i=0; i<num; i++) {
        placeholder.push("?"); 
    }
    return placeholder.toString();
}

// Write Helper for: converting key/value pairs in objects to proper SQL syntax.
function objToSql(obj) {
    const arr = []; 
   
   
    for (let key in obj) {
        let value = obj[key]; 

         // Check if key/value pair is a specific property in object
    if (Object.hasOwnProperty.call(obj, key)) {
        // If string with spaces, add quotations to enclose
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = `'${value}'`
        }

        arr.push(`${key} = ${value}`);
    }
    // Tranlate array of strings to a single comma-separated string
    return arr.toString(); 
}
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
        const queryStr = `UPDATE ${table_name} SET ${objToSql(col_name)} WHERE ${condition}`
        connection.query(queryStr, function(err,res) {
            if (err) {
                throw err;
            }
            cb(res); 
        });
    }
}

module.exports = orm; 
