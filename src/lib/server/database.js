import Database from 'better-sqlite3';

import {DB_FILE} from '$env/static/private';

let database;

export function database_handle() {
  if (!database) {
    console.log("opening db: " + DB_FILE);
    database = new Database(DB_FILE, { fileMustExist: true, verbose: console.log });
  }
  return database;
}

// import { Pool } from 'pg';
// import { config } from 'dotenv';

// // Load environment variables from .env.local
// config({ path: '.env.local' });

// // Create a PostgreSQL connection pool
// const pool = new Pool({
//     user: process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DATABASE,
//     password: process.env.POSTGRES_PASSWORD,
//     port: process.env.POSTGRES_PORT,
//     ssl: {
//         rejectUnauthorized: false, // Disable SSL verification (only for development)
//     },
// });

// export function database_handle() {
//     return pool;
// }
