import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: '.container.svelte-16pjvez{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#homeBtn.svelte-16pjvez{position:absolute;top:0px;left:0px}.word-container.svelte-16pjvez{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:20px;justify-content:center}.word.svelte-16pjvez{padding:5px 10px;background-color:#f0f0f0;border-radius:5px;cursor:pointer}.word.selected.svelte-16pjvez{background-color:#a0a0a0}.sentence.svelte-16pjvez{margin-top:20px}.button.svelte-16pjvez{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-16pjvez:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-16pjvez{padding:0.25em 0.75em}}#returnBtn.svelte-16pjvez{margin:0px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let words = data.reformattedSentences;
  let currentIndex = 0;
  let selectedWords = [];
  let userSentence = "";
  console.log(words);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="container svelte-16pjvez"><a href="/homepage" data-svelte-h="svelte-b18wmx"><button class="button svelte-16pjvez" id="homeBtn">Back To Home</button></a> <br> <h1 data-svelte-h="svelte-sit8dg">Sentence Shuffle</h1> ${`<p data-svelte-h="svelte-1okkgm0">Click on the words to form a sentence:</p> <div class="word-container svelte-16pjvez">${currentIndex < words.length ? `${each(words[currentIndex].words, (word) => {
    return `<button class="${["word svelte-16pjvez", selectedWords.includes(word) ? "selected" : ""].join(" ").trim()}">${escape(word)} </button>`;
  })}` : ``}</div> <div class="sentence svelte-16pjvez"><p>Your Sentence: ${escape(userSentence)}</p> <button class="button svelte-16pjvez" data-svelte-h="svelte-12b3m8z">Submit</button> <button class="button svelte-16pjvez" data-svelte-h="svelte-1r81w13">Clear</button></div>`} ${``} </main>`;
});
export {
  Page as default
};
