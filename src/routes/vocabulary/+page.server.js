import {database_handle} from '$lib/server/database';

let db;

export async function load() {
    if (!db) {
        db = database_handle();
    }
    const question_sql = `
    SELECT 
        question_id,
        question
    FROM
        vocabulary_questions`;
    const question_stmt = db.prepare(question_sql);
    const question_rows = question_stmt.all();

    const answer_sql = `
    SELECT 
        answer_id,
        answer,
        isCorrect,
        question_id
    FROM
        vocabulary_answers`;
    const answer_stmt = db.prepare(answer_sql);
    const answer_rows = answer_stmt.all();

    console.log({question_rows});
    console.log({answer_rows});

    let reformattedQuestions;

    //functions inside

    return { questions: reformattedQuestions };
}