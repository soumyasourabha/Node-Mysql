const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'employees',
    multipleStatements : true,
    insecureAuth : true
})

db.connect((err) => {
    if(err) 
        console.log(err);
    else{
        console.log('DB Connected!')
    }
})

module.exports = db;