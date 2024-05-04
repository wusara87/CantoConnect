// export async function load({ fetch }) {
//     return {flashcards:[
//     {english: "apple", cantonese: "蘋果", image_url: "https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png"},
//     {english: "watermelon", cantonese: "西瓜", image_url: "https://www.kroger.com/product/images/xlarge/front/0000000003421"},
//     {english: "banana", cantonese: "香蕉", image_url: "https://www.thedailymeal.com/img/gallery/the-astonishingly-low-cost-of-a-single-whole-foods-banana/intro-1668962689.jpg"},
//     {english: "strawberry", cantonese: "草莓", image_url: "https://www.collinsdictionary.com/images/full/strawberry_227472010.jpg"},
//     {english: "orange", cantonese: "橙", image_url: "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png"}
//     ]};
// }

// import {database_handle} from '$lib/server/database';

// let db;

// export async function load() {
//     if (!db) {
//         db = database_handle();
//     }
//     const flashcard_sql = `
//     SELECT 
//         english,
//         cantonese,
//         image_url
//     FROM
//         flashcards
//     `;
//     const flashcard_stmt = db.prepare(flashcard_sql);
//     const flashcard_rows = flashcard_stmt.all();

//     console.log({flashcard_rows});

//     return { flashcards: flashcard_rows };
// }

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
