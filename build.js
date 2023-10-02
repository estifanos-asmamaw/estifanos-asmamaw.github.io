const fs = require('fs')
const html = `<script>
    ${fs.readFileSync('data.js').toString()};
    window.data = data;
	</script>`
function updateFile(file) {
	const index = fs.readFileSync(file).toString()

	fs.writeFileSync(file, index.replace(/(<script>).*?(<\/script>)/gm, html).replace('<script src="/data.js"></script>', ''))
}
['index.html', 'gallery/index.html', 'blog/index.html', 'projects/index.html'].map(file => updateFile(file))