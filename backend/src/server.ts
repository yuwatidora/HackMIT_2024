import express from 'express';
import dotenv from 'dotenv';
import { connectDB, initDB } from './db';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

(async () => {
  // Initialize database
  await initDB();

  // API route to get data from SQLite
  app.get('/users', async (req, res) => {
    const db = await connectDB();
    const users = await db.all('SELECT * FROM users');
    res.json(users);
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
