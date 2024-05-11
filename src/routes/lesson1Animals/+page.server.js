// Import the pg module
import pg from 'pg';

// Create a new Pool instance with your Vercel PostgreSQL database credentials
const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: false, // Ignore self-signed SSL certificates
  },
});

// Function to fetch data from the database
export async function load() {
  // Connect to the database
  const client = await pool.connect();

  try {
    // Execute a query to select random words and image URLs from the matching_words table
    const flashcard = await client.query(`
        SELECT 
            english,
            cantonese,
            image_url
        FROM
            flashcards
    `);

    const flashcard_rows = flashcard.rows;

    console.log({flashcard_rows});

    return { flashcards: flashcard_rows };
  } finally {
    // Release the database client back to the pool
    client.release();
  }
}
