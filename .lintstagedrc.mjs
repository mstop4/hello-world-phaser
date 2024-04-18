export default {
  '**/*.ts': [
    `npx prettier *.ts --write`,
    'npx tsc --noEmit',
    `npx eslint *.ts`,
  ],
  '**/*.js': [
    `npx prettier *.js --write`,
    `npx eslint *.js`,
  ],
  '**/*.json': [
    `npx prettier *.json --write`,
  ],
  '**/*.css': [
    `npx prettier *.css --write`,
  ],
};