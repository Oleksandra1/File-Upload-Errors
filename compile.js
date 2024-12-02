const pug = require('pug');
const fs = require('fs');

const html = pug.renderFile('index.pug');

fs.writeFileSync('error.html', html, 'utf-8');
console.log('Файл сгенерировано: index.html');
