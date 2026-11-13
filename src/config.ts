// Where the engine's word lists come from. In a browser app they are fetched from `dataUrl` (default /writer, where
// `npm run engine:assets` copies them); a Node script or test passes its own `loadJson` that reads the files.
let dataUrl = '/writer';
let custom: ((name: string) => Promise<unknown>) | null = null;
// liveLookups: true lets the engine ask outside dictionaries for words its lists do not have (the independent work
// dashboard); false never does; left out, a teacher's "Allow live lookups" setting decides (Literacy Manipulatives).
export interface EngineConfig { dataUrl?: string; loadJson?: (name: string) => Promise<unknown>; liveLookups?: boolean }
let live: boolean | undefined;
export const liveLookupsSetting = () => live;
export function configureEngine(c: EngineConfig) {
  if (c.dataUrl) dataUrl = c.dataUrl.replace(/\/$/, '');
  if (c.loadJson) custom = c.loadJson;
  if (c.liveLookups !== undefined) live = c.liveLookups;
}
export function loadJson<T>(name: string): Promise<T> {
  if (custom) return custom(name) as Promise<T>;
  return fetch(`${dataUrl}/${name}`).then((r) => { if (!r.ok) throw new Error(`${name}: ${r.status}`); return r.json() as Promise<T>; });
}
