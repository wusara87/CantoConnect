import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: '.container.svelte-mcawbx{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}img.svelte-mcawbx{width:300px;height:auto}.button.svelte-mcawbx{margin:20px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-mcawbx:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-mcawbx{padding:0.25em 0.75em}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-mcawbx" data-svelte-h="svelte-15psr3b"><h1>Welcome to CantoConnect!</h1> <img src="src/routes/logo.jpg" alt="cute logo" class="svelte-mcawbx"><br> <a href="/login"><button class="button svelte-mcawbx">Log In</button></a><br> <a href="/createAccount"><button class="button svelte-mcawbx">Create An Account</button></a> </div>`;
});
export {
  Page as default
};
