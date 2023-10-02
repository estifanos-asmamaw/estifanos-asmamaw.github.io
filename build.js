const fs = require('fs')
const html = `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<meta name="theme-color" content="#000000" />
	<meta name="google-site-verification" content="UfHu2Q8F4tiS7FnwSDzQW_iJM1fclDQFRNpuVqxYTGM" />
	<meta name="description"
		content="Estifanos Asmamaw's Portfolio website with the gallery, blog and projects. I'm a Graphic Designer, Artist, Visual Arts from Addis ababa" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Estifanos Asmamaw Portfolio" />
	<meta property="og:image" content="/img/preview.jpg" />
	<meta property="og:description"
		content="Estifanos Asmamaw's Portfolio website with the gallery, blog and projects. I'm a Graphic Designer, Artist, Visual Arts from Addis ababa" />
	<meta property="og:url" content="/" />
	<meta property="og:site_name" content="Estifanos Asmamaw: Passionate Graphic Designer" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Estifanos Asmamaw Portfolio" />
	<meta name="twitter:description"
		content="Estifanos Asmamaw's Portfolio website with the gallery, blog and projects. I'm a Graphic Designer, Artist, Visual Arts from Addis ababa" />
	<meta name="twitter:image" content="/img/preview.jpg" />
	<meta name="theme-color" content="#303030" />
	<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"url": "/",
				"name": "Estifanos Asmamaw: Passionate Graphic Designer",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "/?page=Gallery&tag={search_term_string}/",
					"query-input": "required name=search_term_string"
				}
			}
		</script>
	<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "Organization",
				"url": "/",
				"name": "Estifanos Asmamaw: Passionate Graphic Designer",
				"logo": "/img/logo.png"
			}
		</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-4CSEE7ZK10"></script>
	<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

	<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

	<link rel="stylesheet" href="/libs/fontawesome-free-5.7.2-web/css/all.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.0/css/all.min.css" />
	<title>Estifanos Asmamaw Portfolio</title>
</head>

<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>

	<div id="root"></div>

	<script>
    ${fs.readFileSync('data.js').toString()};
    window.data = data;
	</script>
</body>

</html>`
fs.writeFileSync('index.html', html)