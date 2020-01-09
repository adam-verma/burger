// Require orm.js to create functions that interact with data from database
const orm = require('../config/orm.js');

burger = { 
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });   
    },
    
    insertOne: function(col_name, vals, cb) {
        orm.insertOne("burgers", col_name, vals, function(res) {
            cb(res); 
        });
    },

    updateOne: function(col_name, condition, cb) {
        orm.updateOne("burgers", col_name, condition, function(res) {
            cb(res); 
        });    
    },
 }

 module.exports = burger; 