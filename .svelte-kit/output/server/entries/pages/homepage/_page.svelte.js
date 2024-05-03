import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { v as vocabScore } from "../../../chunks/vocabScore.js";
import { w as writable } from "../../../chunks/index.js";
const matchingScore = writable("Not Completed");
const sentenceScore = writable("Not Completed");
const css = {
  code: '.container.svelte-pr6emv{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}img.svelte-pr6emv{width:200px;height:auto}.button.svelte-pr6emv{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-pr6emv:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-pr6emv{padding:0.25em 0.75em}}#homeBtn.svelte-pr6emv{position:absolute;top:10px;left:10px;font-size:14px;padding:5px 10px;height:auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $vocabScore, $$unsubscribe_vocabScore;
  let $matchingScore, $$unsubscribe_matchingScore;
  let $sentenceScore, $$unsubscribe_sentenceScore;
  $$unsubscribe_vocabScore = subscribe(vocabScore, (value) => $vocabScore = value);
  $$unsubscribe_matchingScore = subscribe(matchingScore, (value) => $matchingScore = value);
  $$unsubscribe_sentenceScore = subscribe(sentenceScore, (value) => $sentenceScore = value);
  $$result.css.add(css);
  $$unsubscribe_vocabScore();
  $$unsubscribe_matchingScore();
  $$unsubscribe_sentenceScore();
  return `<main class="container svelte-pr6emv"><a href="/login" data-svelte-h="svelte-mqzn8v"><button class="button svelte-pr6emv" id="homeBtn">Logout</button></a><br> <h1 data-svelte-h="svelte-y91hwf">CantoConnect</h1> <img src="src/routes/logo.jpg" alt="cute logo" class="svelte-pr6emv"><br> <a href="/lesson1Animals" data-svelte-h="svelte-1bqrz0x"><button class="button svelte-pr6emv">Lesson 1: Fruits</button></a><br> <a href="/vocabulary" data-svelte-h="svelte-1syvjpb"><button class="button svelte-pr6emv">Vocabulary Mini-Game</button></a><br> <a href="/matching" data-svelte-h="svelte-1hic5ih"><button class="button svelte-pr6emv">Matching Mini-Game</button></a> <a href="/sentence" data-svelte-h="svelte-10mbab2"><button class="button svelte-pr6emv">Sentence Shuffle Mini-Game</button></a> <h3 data-svelte-h="svelte-1cmvk95">Daily Report</h3> <p>Vocabulary: ${escape($vocabScore)}/2</p> <p>Matching: ${escape($matchingScore)}</p> <p>Sentence Shuffle: ${escape($sentenceScore)}</p> </main>`;
});
export {
  Page as default
};
