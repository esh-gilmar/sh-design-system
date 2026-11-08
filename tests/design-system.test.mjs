import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const text = p => fs.readFileSync(path.join(root,p),'utf8');
const tokens = JSON.parse(text('packages/tokens/sh.tokens.json'));
const brand = Object.fromEntries(Object.entries(tokens.color.brand).map(([k,v])=>[k,v.$value]));
function luminance(hex) {
  const rgb=hex.slice(1).match(/../g).map(n=>parseInt(n,16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);
  return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;
}
function contrast(a,b){const [hi,lo]=[luminance(a),luminance(b)].sort((x,y)=>y-x);return (hi+.05)/(lo+.05);}
test('cores oficiais coincidem com HEX do Brandbook SH 2026',()=>{
  assert.deepEqual(brand, {'green':'#00602D','green-dark':'#032D10','orange':'#EF7D00','white':'#FFFFFF'});
});
test('texto branco em ação primária verde atende WCAG AA',()=>{
  assert.ok(contrast(brand.green, brand.white)>=4.5);
});
test('laranja institucional não deve ser usado com texto branco normal',()=>{
  assert.ok(contrast(brand.orange,brand.white)<4.5);
});
test('todos os tokens de cor são HEX de seis dígitos',()=>{
  for(const set of Object.values(tokens.color))for(const token of Object.values(set))assert.match(token.$value,/^#[0-9A-Fa-f]{6}$/);
});
test('tokens CSS incluem referências institucionais',()=>{
  const css=text('packages/tokens/sh.css');
  for(const [key,val] of Object.entries(brand))assert.ok(css.includes('--sh-color-brand-'+key+': '+val+';'));
});
test('estilos UI são baseados nos tokens corporativos',()=>{
  const css=text('packages/ui/sh-components.css');
  assert.match(css,/var\(--sh-color-brand-green\)/);
  assert.match(css,/focus-visible/);
  assert.match(css,/@media/);
});
test('vitrine possui idioma, viewport e dados fictícios',()=>{
  const html=text('showcase/index.html');
  assert.match(html,/lang="pt-BR"/);
  assert.match(html,/name="viewport"/);
  assert.match(html,/Dados fictícios/);
});
test('arquivos de governança presentes',()=>{
  for(const p of ['README.md','AGENTS.md','CLAUDE.md','GEMINI.md','docs/foundations.md','docs/references.md','.agents/skills/sh-web-ui/SKILL.md','.claude/skills/sh-web-ui/SKILL.md'])assert.ok(fs.statSync(path.join(root,p)).isFile());
});
