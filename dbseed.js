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

console.log('connected');
con.query('CREATE DATABASE IF NOT EXISTS gacye;');
con.query('USE gacye;');
con.query('DROP TABLE IF EXISTS admin;');

con.query('create table admin(username char(20) NOT NULL, password char(20) NOT NULL, primary key (username));',
    function (error, result, fields) {
        if (error) throw  error;
        console.log(result);
    });


con.query("INSERT INTO admin VALUES('jkim3663', 'louis0108');",
    function (error, result, fields) {
        if (error) throw  error;
        console.log(result);
    });

con.query('USE gacye;');
con.query('SELECT * FROM admin;',
    function (error, result, fields) {
        if (error) throw  error;
        console.log(result);
    });
