// import {database_handle} from '$lib/server/database';

// let db;

// export async function load() {
//     if (!db) {
//         db = database_handle();
//     }
//     const question_sql = `
//     SELECT 
//         question_id,
//         question
//     FROM
//         vocabulary_questions`;
//     const question_stmt = db.prepare(question_sql);
//     const question_rows = question_stmt.all();

//     const answer_sql = `
//     SELECT 
//         answer_id,
//         answer,
//         isCorrect,
//         question_id
//     FROM
//         vocabulary_answers`;
//     const answer_stmt = db.prepare(answer_sql);
//     const answer_rows = answer_stmt.all();

//     console.log({question_rows});
//     console.log({answer_rows});

//     let reformattedQuestions = [];

//     for (let question_row of question_rows) {
//         let question = {
//             question: question_row.question,
//             options: [],
//             correctAnswer: []
//         };

//         for (let answer_row of answer_rows) {
//             if (answer_row.question_id === question_row.question_id) {
//                 question.options.push(answer_row.answer);
//                 if (answer_row.isCorrect) {
//                     question.correctAnswer.push(answer_row.answer);
//                 }
//             }
//         }
//         reformattedQuestions.push(question);
//     }

//     return { reformattedQuestions };
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
    // Execute a query to select questions from the vocabulary_questions table
    const questionResult = await client.query('SELECT question_id, question FROM vocabulary_questions');
    const questionRows = questionResult.rows;

    // Execute a query to select answers from the vocabulary_answers table
    const answerResult = await client.query('SELECT answer_id, answer, is_correct, question_id FROM vocabulary_answers');
    const answerRows = answerResult.rows;

    let reformattedQuestions = [];

    for (let questionRow of questionRows) {
      let question = {
        question: questionRow.question,
        options: [],
        correctAnswer: []
      };

      for (let answerRow of answerRows) {
        if (answerRow.question_id === questionRow.question_id) {
          question.options.push(answerRow.answer);
          if (answerRow.is_correct) {
            question.correctAnswer.push(answerRow.answer);
          }
        }
      }
      reformattedQuestions.push(question);
    }

    return { reformattedQuestions };
  } finally {
    // Release the database client back to the pool
    client.release();
  }
}
