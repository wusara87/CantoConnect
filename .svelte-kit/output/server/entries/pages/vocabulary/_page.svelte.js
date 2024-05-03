import { c as create_ssr_component, a as subscribe, e as escape, d as each, b as add_attribute } from "../../../chunks/ssr.js";
import { v as vocabScore } from "../../../chunks/vocabScore.js";
const css = {
  code: '.container.svelte-esjcp2{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}#homeBtn.svelte-esjcp2{position:absolute;top:0px;left:0px}.button.svelte-esjcp2{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-esjcp2:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-esjcp2{padding:0.25em 0.75em}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $vocabScore, $$unsubscribe_vocabScore;
  $$unsubscribe_vocabScore = subscribe(vocabScore, (value) => $vocabScore = value);
  let { data } = $$props;
  let currentQuestionIndex = 0;
  let quizData = data.reformattedQuestions;
  let selectedOption = "";
  let totalQuestions = quizData.length;
  vocabScore.set(0);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_vocabScore();
  return `<main class="container svelte-esjcp2"><a href="/homepage" data-svelte-h="svelte-b18wmx"><button class="button svelte-esjcp2" id="homeBtn">Back To Home</button></a><br> <h1 data-svelte-h="svelte-fwu59k">Vocabulary Mini-Game</h1> ${currentQuestionIndex < quizData.length ? `<p>${escape(quizData[currentQuestionIndex].question)}</p> ${each(quizData[currentQuestionIndex].options, (option) => {
    return `<input type="radio"${add_attribute("value", option, 0)}${add_attribute("id", option, 0)} class="svelte-esjcp2"${option === selectedOption ? add_attribute("checked", true, 1) : ""}> <label${add_attribute("for", option, 0)}>${escape(option)}</label><br>`;
  })} ${`<button class="button svelte-esjcp2" data-svelte-h="svelte-yhm8q9">Submit</button>`} ${`${``}`}` : `<p data-svelte-h="svelte-georj6">Congratulations, you have completed the quiz!</p> <p>Score: ${escape($vocabScore)}/${escape(totalQuestions)}</p> <button class="button svelte-esjcp2" data-svelte-h="svelte-1qnj27">Try Again</button>`} </main>`;
});
export {
  Page as default
};
