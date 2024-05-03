// import {database_handle} from '$lib/server/database';

// let db;

// export async function load() {
//     if (!db) {
//         db = database_handle();
//     }
//     const sentence_sql = `
//     SELECT 
//         sentence_id,
//         sentence
//     FROM
//         sentence_correctAns`;
//     const sentence_stmt = db.prepare(sentence_sql);
//     const sentence_rows = sentence_stmt.all();

//     const word_sql = `
//     SELECT 
//         word_id,
//         word,
//         sentence_id
//     FROM
//         sentence_words`;
//     const word_stmt = db.prepare(word_sql);
//     const word_rows = word_stmt.all();

//     console.log({sentence_rows});
//     console.log({word_rows});

//     const reformattedSentences = [];
//     for (let sentence_row of sentence_rows) {
//         let sentence = {
//             sentence: sentence_row.sentence,
//             words: []
//         };
    
//         for (let word_row of word_rows) {
//             if (word_row.sentence_id === sentence_row.sentence_id) {
//                 sentence.words.push(word_row.word);
//             }
//         }
    
//         reformattedSentences.push(sentence);
//     }

//     reformattedSentences.forEach(sentence => {
//         sentence.words = shuffle(sentence.words);
//     });

//     return { reformattedSentences };
// }

// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }



// Import the Pool class from the pg library
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
    // Execute a query to select data from sentence_correctAns
    const sentenceResult = await client.query('SELECT sentence_id, sentence FROM sentence_ans');
    const sentenceRows = sentenceResult.rows;

    // Execute a query to select data from sentence_words
    const wordResult = await client.query('SELECT word_id, word, sentence_id FROM sentence_words');
    const wordRows = wordResult.rows;

    // Combine the sentence and word data
    const reformattedSentences = [];
    for (let sentenceRow of sentenceRows) {
      let sentence = {
        sentence: sentenceRow.sentence,
        words: []
      };
  
      for (let wordRow of wordRows) {
        if (wordRow.sentence_id === sentenceRow.sentence_id) {
          sentence.words.push(wordRow.word);
        }
      }
  
      reformattedSentences.push(sentence);
    }

    // Shuffle the words in each sentence
    reformattedSentences.forEach(sentence => {
      sentence.words = shuffle(sentence.words);
    });

    return { reformattedSentences };
  } finally {
    // Release the database client back to the pool
    client.release();
  }
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}
