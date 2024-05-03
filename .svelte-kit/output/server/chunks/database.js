import Database from "better-sqlite3";
const DB_FILE = "./data/canto.db";
let database;
function database_handle() {
  if (!database) {
    console.log("opening db: " + DB_FILE);
    database = new Database(DB_FILE, { fileMustExist: true, verbose: console.log });
  }
  return database;
}
export {
  database_handle as d
};
