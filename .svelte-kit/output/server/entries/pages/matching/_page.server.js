import { d as database_handle } from "../../../chunks/database.js";
let db;
async function load() {
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
  temp_image = word_rows[1].d_image_url;
  temp_word = word_rows[1].a_word;
  word_rows[1].d_image_url = word_rows[2].d_image_url;
  word_rows[1].a_word = word_rows[2].a_word;
  word_rows[2].d_image_url = temp_image;
  word_rows[2].a_word = temp_word;
  console.log({ word_rows });
  return { words: word_rows };
}
export {
  load
};
