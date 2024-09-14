import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const connectDB = async () => {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
};

export const initDB = async () => {
  const db = await connectDB();
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
};
