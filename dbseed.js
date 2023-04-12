const mysql = require('mysql');

process.env.RDS_HOSTNAME = "jd3133-database.cluster-cjskxz8uwtf0.us-east-2.rds.amazonaws.com";
process.env.RDS_USERNAME = "admin";
process.env.RDS_PASSWORD = "louis0108";
process.env.RDS_PORT = "3306";

const con = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT
    }
);

con.connect(function (err){
    if (err) throw err;
    console.log('connected');
    con.end();
});