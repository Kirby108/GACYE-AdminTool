/* eslint-disable import/no-mutable-exports */
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

import ActiveSession from '../models/activeSession';
import User from '../models/user';
import Role from '../models/role';


const options: ConnectionOptions = {
  type: 'mysql',
  host: process.env.RDS_HOSTNAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: 3306,
  database: process.env.RDS_DB_NAME,
  entities: [User, ActiveSession, Role],
  logging: true,
};

export let connection : Connection | undefined;

export const connect = async (): Promise<Connection | undefined> => {
  try {
    const conn = await createConnection(options);
    connection = conn;
    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

