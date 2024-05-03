import * as server from '../entries/pages/sentence/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sentence/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sentence/+page.server.js";
export const imports = ["_app/immutable/nodes/8.BvAyeTmx.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.5aw9XHfJ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/sentenceScore.CAhiTsTt.js","_app/immutable/chunks/index.DspQOGsj.js"];
export const stylesheets = ["_app/immutable/assets/8.E-00ZDaJ.css"];
export const fonts = [];
