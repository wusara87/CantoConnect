import { d as database_handle } from "../../../chunks/database.js";
let db;
async function load() {
  if (!db) {
    db = database_handle();
  }
  const sentence_sql = `
    SELECT 
        sentence_id,
        sentence
    FROM
        sentence_correctAns`;
  const sentence_stmt = db.prepare(sentence_sql);
  const sentence_rows = sentence_stmt.all();
  const word_sql = `
    SELECT 
        word_id,
        word,
        sentence_id
    FROM
        sentence_words`;
  const word_stmt = db.prepare(word_sql);
  const word_rows = word_stmt.all();
  console.log({ sentence_rows });
  console.log({ word_rows });
  const reformattedSentences = [];
  for (let sentence_row of sentence_rows) {
    let sentence = {
      sentence: sentence_row.sentence,
      words: []
    };
    for (let word_row of word_rows) {
      if (word_row.sentence_id === sentence_row.sentence_id) {
        sentence.words.push(word_row.word);
      }
    }
    reformattedSentences.push(sentence);
  }
  reformattedSentences.forEach((sentence) => {
    sentence.words = shuffle(sentence.words);
  });
  return { reformattedSentences };
}
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}
export {
  load
};
