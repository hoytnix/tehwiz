import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'out');

if (fs.existsSync(outDir)) {
  // 1. Remove any dev-only editor or api artifacts from static export
  const targets = [
    path.join(outDir, 'editor'),
    path.join(outDir, 'editor.html'),
    path.join(outDir, 'editor.txt'),
    path.join(outDir, 'api'),
  ];

  targets.forEach((target) => {
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`[clean-export] Scrubbed dev route from static export: ${path.basename(target)}`);
    }
  });

  // 2. Ensure .nojekyll exists so GitHub Pages preserves _next/ directory
  const nojekyll = path.join(outDir, '.nojekyll');
  if (!fs.existsSync(nojekyll)) {
    fs.writeFileSync(nojekyll, '');
    console.log('[clean-export] Created out/.nojekyll for GitHub Pages');
  }

  console.log('[clean-export] Static export directory out/ is clean and ready for GitHub Pages.');
}
