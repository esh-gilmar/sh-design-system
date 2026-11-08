import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const json = JSON.parse(fs.readFileSync(path.join(root, 'packages/tokens/sh.tokens.json'), 'utf8'));
const vars = [];
for (const [section, values] of Object.entries(json.color)) {
  for (const [key, token] of Object.entries(values)) {
    vars.push(['sh-color-' + section + '-' + key, token.$value]);
  }
}
for (const section of ['space', 'radius']) {
  for (const [key, token] of Object.entries(json[section])) {
    vars.push(['sh-' + section + '-' + key, token.$value]);
  }
}
for (const [key, token] of Object.entries(json.typography)) {
  const family = token.$value.map(s => s.includes(' ') ? '"' + s + '"' : s).join(', ');
  vars.push(['sh-font-' + key, family]);
}
const css = [
  '/* AUTO-GENERATED from packages/tokens/sh.tokens.json. Run npm run tokens:build. */',
  ':root {',
  ...vars.map(([key, value]) => '  --' + key + ': ' + value + ';'),
  '}',
  '',
].join('\n');
const output = path.join(root, 'packages/tokens/sh.css');
if (process.argv.includes('--check')) {
  if (fs.readFileSync(output, 'utf8') !== css) {
    console.error('Tokens CSS divergentes. Execute npm run tokens:build.');
    process.exitCode = 1;
  } else {
    console.log('Tokens CSS sincronizados.');
  }
} else {
  fs.writeFileSync(output, css);
  console.log('Tokens CSS gerados.');
}
