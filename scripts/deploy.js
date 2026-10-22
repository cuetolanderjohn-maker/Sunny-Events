import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building project for www.sunnyeventsbypam.com...');
execSync('npm run build', { stdio: 'inherit' });

const distPath = path.resolve('dist');
const gitDir = path.join(distPath, '.git');

console.log('Deploying to GitHub Pages (gh-pages branch)...');
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

execSync('git init -b gh-pages', { cwd: distPath, stdio: 'inherit' });
execSync('git add .', { cwd: distPath, stdio: 'inherit' });
execSync('git commit -m "deploy: update www.sunnyeventsbypam.com"', { cwd: distPath, stdio: 'inherit' });
execSync('git remote add origin https://github.com/cuetolanderjohn-maker/Sunny-Events.git', { cwd: distPath, stdio: 'inherit' });
execSync('git push -u origin gh-pages --force', { cwd: distPath, stdio: 'inherit' });

if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}
console.log('Deployment complete! Live at www.sunnyeventsbypam.com');
