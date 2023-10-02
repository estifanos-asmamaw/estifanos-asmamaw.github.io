const fs = require('fs')
const html = `
    ${fs.readFileSync('data.js').toString()};
    window.data = data;`
const index = fs.readFileSync('200.html').toString()
console.log({index})
fs.writeFileSync('200.html', index.replace('window.data = data',html))