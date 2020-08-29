"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
function connect() {
    const connection = promise_1.createPool({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}
exports.connect = connect;
