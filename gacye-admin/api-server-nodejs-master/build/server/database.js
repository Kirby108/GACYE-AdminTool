"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.connection = void 0;
/* eslint-disable import/no-mutable-exports */
const typeorm_1 = require("typeorm");
const activeSession_1 = __importDefault(require("../models/activeSession"));
const user_1 = __importDefault(require("../models/user"));
const role_1 = __importDefault(require("../models/role"));
const options = {
    type: 'mysql',
    host: process.env.RDS_HOSTNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: 3306,
    database: process.env.RDS_DB_NAME,
    entities: [user_1.default, activeSession_1.default, role_1.default],
    logging: true,
};
const connect = async () => {
    try {
        const conn = await (0, typeorm_1.createConnection)(options);
        exports.connection = conn;
        console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
    }
    catch (err) {
        console.log(err);
    }
    return undefined;
};
exports.connect = connect;
//# sourceMappingURL=database.js.map