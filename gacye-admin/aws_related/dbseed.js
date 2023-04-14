const mysql = require('mysql');

// process.env.RDS_HOSTNAME = "jd3133-database.cluster-cjskxz8uwtf0.us-east-2.rds.amazonaws.com";
// process.env.RDS_USERNAME = "admin";
// process.env.RDS_PASSWORD = "louis0108";
// process.env.RDS_PORT = "3306";

process.env.RDS_HOSTNAME = 'database-2.cej2zfq0kc69.us-east-2.rds.amazonaws.com';
process.env.RDS_USERNAME = "admin";
process.env.RDS_PASSWORD = "GacyeDB123";
process.env.RDS_PORT = "3306";


const con = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT
    }
);

console.log('connected');
con.query('USE defaultDB;');
con.query('SHOW tables;',
    function (error, result, fields) {
        if (error) throw  error;
        console.log(result);
    }
);


con.query('SELECT * FROM defaultDB.georgia;',
    function (error, result, fields) {
        if (error) throw error;
        console.log(result)
    }
);


con.end();