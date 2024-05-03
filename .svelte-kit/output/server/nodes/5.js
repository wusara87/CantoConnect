import * as universal from '../entries/pages/lesson1Animals/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lesson1Animals/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/lesson1Animals/+page.js";
export const imports = ["_app/immutable/nodes/5.Cp5Fcc-q.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.5aw9XHfJ.js"];
export const stylesheets = ["_app/immutable/assets/5.DT4o63U4.css"];
export const fonts = [];
