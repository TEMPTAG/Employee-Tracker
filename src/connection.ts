import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database', err);
    }
};

export { pool, connectToDb };