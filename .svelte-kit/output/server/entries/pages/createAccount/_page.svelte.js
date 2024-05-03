import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: '.container.svelte-1lzm1ab{text-align:center;width:500px;height:800px;border:2px solid;padding:20px;box-sizing:border-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.form-group.svelte-1lzm1ab{text-align:left;margin-left:120px}input.svelte-1lzm1ab{margin:4px}.button.svelte-1lzm1ab{margin:0px;font-family:"Open Sans", sans-serif;font-size:16px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;color:#000;cursor:pointer;border:3px solid;padding:0.25em 0.5em;box-shadow:1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button.svelte-1lzm1ab:active{box-shadow:0px 0px 0px 0px;top:5px;left:5px}@media(min-width: 768px){.button.svelte-1lzm1ab{padding:0.25em 0.75em}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let username = "";
  let email = "";
  $$result.css.add(css);
  type = "password";
  return `<div class="container svelte-1lzm1ab"><h1 data-svelte-h="svelte-19vylav">Create Account</h1> <form id="createAccountForm"><div class="form-group svelte-1lzm1ab"><label for="username" data-svelte-h="svelte-1wr0xay">Username</label><br> <input type="text" id="newUsername" required class="svelte-1lzm1ab"${add_attribute("value", username, 0)}></div> <div class="form-group svelte-1lzm1ab"><label for="newEmail" data-svelte-h="svelte-18vayqo">Email</label><br> <input type="email" id="newEmail" required class="svelte-1lzm1ab"${add_attribute("value", email, 0)}></div> <div class="form-group svelte-1lzm1ab"><label for="newPassword" data-svelte-h="svelte-1hhf608">Password</label><br> <input${add_attribute("type", type, 0)} id="newPassword" required class="svelte-1lzm1ab"> <button type="button">${escape("Show")}</button></div> <br> <button class="button svelte-1lzm1ab" type="submit" data-svelte-h="svelte-1e5o6iz">Create Account</button></form> <p data-svelte-h="svelte-mcwoq1">Already have an account? <a href="/login">Login</a></p> </div>`;
});
export {
  Page as default
};
