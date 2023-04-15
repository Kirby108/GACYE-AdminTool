const { get } = require('babel-register/lib/cache');
const mysql = require('mysql');

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

// var GetAllLocationsModule = (function() {
//     let GetAllLocations = function () {
//         var arr = [];
//         con.query('SELECT * FROM defaultDB.georgia;',
//             function (error, result, fields) {
//                 if (error) throw error;
//                 // var arr = [];
//                 for (i = 0; i < result.length; i++){
//                     var json = {
//                         "lat": String(result[i].latitude),
//                         "lng": String(result[i].longitude)
//                     };
//                     arr.push(json);
//                 }
//                 // console.log(arr);
//                 return(arr);
//             }
//         );
//         return(arr);
//     };
//     return GetAllLocations;
// })();

// var arr;
// arr = await function GetL(callback) {
//     con.query('SELECT * FROM defaultDB.georgia;',
//             function (error, result, fields) {
//                 if (error) throw error;
//                 // var arr = [];
//                 for (i = 0; i < result.length; i++){
//                     var json = {
//                         "lat": String(result[i].latitude),
//                         "lng": String(result[i].longitude)
//                     };
//                     arr.push(json);
//                 }
//                 callback(arr);
//             }
//         );
// }


// // var ret = GetAllLocationsModule.GetAllLocations();
// // GetL(function(result){return result;});
// var ar;
// GetL(function(data){
//     // console.log(data);
//     return data;
// });
// console.log(arr);

function Gatherdata() {
    const fs = require('fs');
    fs.writeFile('./test.txt', "", err => {
                        if (err) {
                          console.error(err);
                        }
                        // file written successfully
                      });
    fs.close;
    
    con.query('SELECT * FROM defaultDB.georgia;',
            function (error, result, fields) {
                if (error) throw error;
                var arr = [];
                // fs.writeFile('./test.txt', result);
                for (i = 0; i < result.length; i++){
                    var json = {
                        "lat": String(result[i].latitude),
                        "lng": String(result[i].longitude)
                    };
                    fs.appendFile('./test.txt', JSON.stringify(json) + "\n", err => {
                        if (err) {
                          console.error(err);
                        }
                        // file written successfully
                      });
                    arr.push(json);
                }
                console.log(arr);
                // fs.writeFile('./test.txt', result);
            }
    );
}

Gatherdata();