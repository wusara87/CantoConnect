import * as server from '../entries/pages/vocabulary/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/vocabulary/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/vocabulary/+page.server.js";
export const imports = ["_app/immutable/nodes/9.QZrma8oK.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.5aw9XHfJ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/vocabScore.FSqiCPXm.js","_app/immutable/chunks/index.DspQOGsj.js"];
export const stylesheets = ["_app/immutable/assets/9.o_SAxbWX.css"];
export const fonts = [];
