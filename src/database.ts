import { createPool } from 'mysql2/promise';

export function connect() {
    const connection = createPool({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });

    return connection;

}