const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'App.jsx');
const appContent = fs.readFileSync(appFile, 'utf8');
const routePaths = new Set(
  [...appContent.matchAll(/(?:path=|path:\s*)["']([^"']+)["']/g)]
    .map(match => match[1])
    .filter(Boolean)
);
routePaths.delete('*');

function walkDir(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return walkDir(fullPath);
    }
    return entry.isFile() && /\.(js|jsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

it('keeps route links aligned with App.jsx routes', () => {
  const files = walkDir(path.join(__dirname, '..'));
  const mismatches = [];

  files.forEach(file => {
    if (file.endsWith('App.jsx') || file.endsWith('AppRoutes.test.js')) {
      return;
    }

    const content = fs.readFileSync(file, 'utf8');
    const matches = [...content.matchAll(/(?:to|href)\s*=\s*['"]\/([^'"]+)['"]|link\s*:\s*['"]\/([^'"]+)['"]/g)];

    matches.forEach(match => {
      const value = match[1] || match[2];
      if (value && !routePaths.has(`/${value}`)) {
        mismatches.push(`${path.relative(process.cwd(), file)} -> /${value}`);
      }
    });
  });

  expect(mismatches).toEqual([]);
});
