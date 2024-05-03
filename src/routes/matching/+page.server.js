// import {database_handle} from '$lib/server/database';

// let db;

// export async function load() {
//     if (!db) {
//         db = database_handle();
//     }
//     const word_sql = `
//     SELECT 
//         word as d_word,
//         image_url as d_image_url,
//         word as a_word,
//         image_url as a_image_url
//     FROM
//         matching_words
//     ORDER BY
//         RANDOM()
//     LIMIT 
//         3`;
//     const word_stmt = db.prepare(word_sql);
//     const word_rows = word_stmt.all();

//     let temp_image = word_rows[0].d_image_url;
//     let temp_word = word_rows[0].a_word;

//     word_rows[0].d_image_url = word_rows[1].d_image_url;
//     word_rows[0].a_word = word_rows[1].a_word;

//     word_rows[1].d_image_url = temp_image;
//     word_rows[1].a_word = temp_word;

//     temp_image = word_rows[1].d_image_url;
//     temp_word = word_rows[1].a_word;

//     word_rows[1].d_image_url = word_rows[2].d_image_url;
//     word_rows[1].a_word = word_rows[2].a_word;

//     word_rows[2].d_image_url = temp_image;
//     word_rows[2].a_word = temp_word;

//     console.log({word_rows});

//     return { words: word_rows };
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
    const result = await client.query(`
      SELECT 
        word as d_word,
        image_url as d_image_url,
        word as a_word,
        image_url as a_image_url
      FROM
        matching_words
      ORDER BY
        RANDOM()
      LIMIT 
        3
    `);

    const word_rows = result.rows;

    let temp_image = word_rows[0].d_image_url;
    let temp_word = word_rows[0].a_word;

    word_rows[0].d_image_url = word_rows[1].d_image_url;
    word_rows[0].a_word = word_rows[1].a_word;

    word_rows[1].d_image_url = temp_image;
    word_rows[1].a_word = temp_word;

    temp_image = word_rows[1].d_image_url;
    temp_word = word_rows[1].a_word;

    word_rows[1].d_image_url = word_rows[2].d_image_url;
    word_rows[1].a_word = word_rows[2].a_word;

    word_rows[2].d_image_url = temp_image;
    word_rows[2].a_word = temp_word;

    console.log({word_rows});

    return { words: word_rows };
  } finally {
    // Release the database client back to the pool
    client.release();
  }
}
