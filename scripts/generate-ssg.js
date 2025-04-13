import { createServer } from 'vite';

import fs from 'fs/promises';
import path from 'path';

import { routes } from './src/router/index.ts';

const base = process.env.BASE || '/';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
});

for (const route of routes) {
  const render = (await vite.ssrLoadModule('/src/entry-server.ts')).render

  const rendered = await render(route.path);
  const templateHtml = await fs.readFile('./dist/client/index.html', 'utf-8');

  const filePath = route.path === '/' ? '/index.html' : `${route.path}/index.html`;
  const fullPath = path.join('dist/ssg', filePath);

  const html = templateHtml
    .replace(`<div id="app"></div>`, `<div id="app">${rendered.html}</div>`)
    .replace(`<!--app-head-->`, rendered.head ?? '');

  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, html);
}

vite.close();
process.exit(0);

