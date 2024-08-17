import Cli from './classes/cli.js';
// import { pool, connectToDb } from './connection.js';

// Connect to the database at the start of the application
// await connectToDb();

const cli = new Cli();

cli.startCli();