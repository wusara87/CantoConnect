import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: '.container.svelte-ucj4zg.svelte-ucj4zg{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.block.svelte-ucj4zg.svelte-ucj4zg{margin-bottom:20px;display:flex;align-items:center;justify-content:center}.block.svelte-ucj4zg label img.svelte-ucj4zg{max-width:150px;height:auto;border-radius:5px;margin-left:10px}#homeBtn.svelte-ucj4zg.svelte-ucj4zg{position:absolute;top:0px;left:0px}.button.svelte-ucj4zg.svelte-ucj4zg{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-ucj4zg.svelte-ucj4zg:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-ucj4zg.svelte-ucj4zg{padding:0.25em 0.75em}}#returnBtn.svelte-ucj4zg.svelte-ucj4zg{margin:0px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-ucj4zg"><a href="/homepage" data-svelte-h="svelte-b18wmx"><button class="button svelte-ucj4zg" id="homeBtn">Back To Home</button></a><br> <h1 data-svelte-h="svelte-4vzsr3">Matching Mini-Game</h1> <p data-svelte-h="svelte-1ch20ip">Select the matching pairs and click submit to check your answer!</p> <div class="word-image-block">${each(data.words, (w) => {
    return `<div class="block svelte-ucj4zg"><input type="radio" name="word"${add_attribute("id", w.d_word, 0)}${add_attribute("value", w.d_word, 0)} ${w.matched ? "disabled" : ""} class="svelte-ucj4zg"> <label${add_attribute("for", w.d_word, 0)}>${escape(w.d_word)}</label> <input type="radio" name="image"${add_attribute("id", w.d_image_url, 0)}${add_attribute("value", w.d_image_url, 0)} ${w.matched ? "disabled" : ""} class="svelte-ucj4zg"> <label${add_attribute("for", w.d_image_url, 0)}><img${add_attribute("src", w.d_image_url, 0)}${add_attribute("alt", `Picture ${w.word}`, 0)} class="svelte-ucj4zg"></label> </div>`;
  })}</div> ${`<button class="button svelte-ucj4zg" id="submitBtn" data-svelte-h="svelte-k2vk23">Submit</button>`} ${``} </div>`;
});
export {
  Page as default
};
