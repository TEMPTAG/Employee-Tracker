import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to company database.');
    } catch (err) {
        console.error('Error connecting to database.', err);
        process.exit(1);
    }
};

export { pool, connectToDb };