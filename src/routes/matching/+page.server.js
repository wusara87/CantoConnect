import {database_handle} from '$lib/server/database';

let db;

export async function load() {
    if (!db) {
        db = database_handle();
    }
    const word_sql = `
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
        3`;
    const word_stmt = db.prepare(word_sql);
    const word_rows = word_stmt.all();

    let temp_image = word_rows[0].d_image_url;
    let temp_word = word_rows[0].a_word;

    word_rows[0].d_image_url = word_rows[1].d_image_url;
    word_rows[0].a_word = word_rows[1].a_word;

    word_rows[1].d_image_url = temp_image;
    word_rows[1].a_word = temp_word;

    //add more code

    console.log({word_rows});

    // let reformattedQuestions = [];

    // for (let word_row of word_rows) {
    //     let question = {
    //         question: word_row.question,
    //         options: [],
    //         correctAnswer: []
    //     };

    //     for (let answer_row of answer_rows) {
    //         if (answer_row.word_id === word_row.word_id) {
    //             question.options.push(answer_row.answer);
    //             if (answer_row.isCorrect) {
    //                 question.correctAnswer.push(answer_row.answer);
    //             }
    //         }
    //     }
    //     reformattedQuestions.push(question);
    // }

    return { words: word_rows };
}