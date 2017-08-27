var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "654321",
    database: "bitcoins"
});


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM admin_controls", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});