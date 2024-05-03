import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
const Image_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `${`${`${``}`}`}`;
});
const css = {
  code: '.container.svelte-ej3b7a.svelte-ej3b7a{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.content.svelte-ej3b7a.svelte-ej3b7a{display:flex;flex-direction:column;align-items:center}.image.svelte-ej3b7a.svelte-ej3b7a{width:400px;height:400px;margin-bottom:20px}.card-wrapper.svelte-ej3b7a.svelte-ej3b7a{width:25rem;height:200px}.card-body.svelte-ej3b7a.svelte-ej3b7a{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.6s;transform-style:preserve-3d;box-shadow:0 15px 35px rgba(0,0,0,0.2),0 5px 15px rgba(0,0,0,0.19)}.card-front.svelte-ej3b7a.svelte-ej3b7a,.card-back.svelte-ej3b7a.svelte-ej3b7a{background-color:#ffffff;position:absolute;width:100%;height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden}.card-front.svelte-ej3b7a span.svelte-ej3b7a,.card-back.svelte-ej3b7a span.svelte-ej3b7a{position:relative;top:50%;transform:translateY(-50%);font-size:large;margin:0}.card-back.svelte-ej3b7a.svelte-ej3b7a{transform:rotateX(180deg)}.card-wrapper.svelte-ej3b7a:hover .card-body.svelte-ej3b7a{transform:rotateX(180deg)}.buttons.svelte-ej3b7a.svelte-ej3b7a{position:absolute;bottom:0px;left:0px;right:0px;display:flex;justify-content:space-between}#homeBtn.svelte-ej3b7a.svelte-ej3b7a{position:absolute;top:0px;left:0px}.button.svelte-ej3b7a.svelte-ej3b7a{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-ej3b7a.svelte-ej3b7a:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-ej3b7a.svelte-ej3b7a{padding:0.25em 0.75em}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let card_index = 0;
  data.flashcards.length;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="container svelte-ej3b7a"><a href="/homepage" data-svelte-h="svelte-b18wmx"><button class="button svelte-ej3b7a" id="homeBtn">Back To Home</button></a><br> <h1 data-svelte-h="svelte-1rm2hzu">Lesson 1: Fruits</h1> <div class="content svelte-ej3b7a"><div class="image svelte-ej3b7a">${validate_component(Image_1, "Image").$$render(
    $$result,
    {
      src: data.flashcards[card_index].image_url
    },
    {},
    {}
  )}</div> <div class="card-wrapper svelte-ej3b7a"><div class="card-body svelte-ej3b7a"><div class="card-front svelte-ej3b7a"><span class="english svelte-ej3b7a">${escape(data.flashcards[card_index].english)}</span></div> <div class="card-back svelte-ej3b7a"><span class="cantonese svelte-ej3b7a">${escape(data.flashcards[card_index].cantonese)}</span></div></div></div></div> <br> <div class="buttons svelte-ej3b7a"><button class="prev button svelte-ej3b7a" data-svelte-h="svelte-gfaxn7">Previous</button> <button class="next button svelte-ej3b7a" data-svelte-h="svelte-1mj9e7v">Next</button></div> </main>`;
});
export {
  Page as default
};
