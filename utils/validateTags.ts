import fs from 'fs'; 
import glob from 'glob'; //npm install --save-dev @types/glob

const files = glob.sync('tests/**/*.spec.ts');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');

  if (!content.includes('@smoke') &&
      !content.includes('@regression') &&
      !content.includes('@e2e')) {
    throw new Error(`Missing suite tag in ${file}`);
  }
});
