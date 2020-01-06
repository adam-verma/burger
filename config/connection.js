// Require Node Package
mysql = require('mysql');

// Establish Connection with DB
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });

  // Check for error
  connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return
    } else {
        console.log("connected as id: " + connection.threadId);
    }
});

// Export connection 
module.exports = connection;  