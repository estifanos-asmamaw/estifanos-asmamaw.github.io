const fs = require('fs')
const html = `<script>
    ${fs.readFileSync('data.js').toString()};
    window.data = data;
	</script>`
const index = fs.readFileSync('index.html').toString()
fs.writeFileSync('index.html', index.replace(/(<script>).*?(<\/script>)/gm, html))