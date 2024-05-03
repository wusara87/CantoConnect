

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/createAccount/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bg8kHvTr.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.5aw9XHfJ.js","_app/immutable/chunks/entry.CQivP_KY.js","_app/immutable/chunks/index.DspQOGsj.js"];
export const stylesheets = ["_app/immutable/assets/3.7JGvB1Ix.css"];
export const fonts = [];
