import * as server from '../entries/pages/matching/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/matching/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/matching/+page.server.js";
export const imports = ["_app/immutable/nodes/7.Dr3Ih9oI.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.5aw9XHfJ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/matchingScore.Cw0WyQal.js","_app/immutable/chunks/index.DspQOGsj.js"];
export const stylesheets = ["_app/immutable/assets/7.DOAeSuNo.css"];
export const fonts = [];
