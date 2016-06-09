import React from 'react'

function ServerHTML(props) {
	const { body, assets, locale, title, description } = props

	return (
		<html>
			<head>
				<meta charSet='utf-8' />
				<meta http-equiv="X-UA-Compatible" content="IE=edge">

				<link rel="stylesheet" href="/main.css">

				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-with-addons.js" async></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js" async></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-router/2.4.1/ReactRouter.js" async></script>

				<title>Title</title>
				<meta name='description' content="test" />
			</head>
			<body>
				<div id='content' dangerouslySetInnerHTML={ { __html: body } }></div>
				<script type="text/javascript" src="/app.js"></script>
			</body>
		</html>
	)
}

export default ServerHTML


/*

<html lang={ locale }>
			<head>
				<meta charSet='utf-8' />

				
				<link rel='icon' type='image/ico' href='/favicon.ico' />
				{ assets.style.map((href, idx) => <link key={ idx } rel='stylesheet' href={ href } />) }

				<title>{ title }</title>
				<meta name='description' content={ description } />
			</head>
			<body>
				<div id='content' dangerouslySetInnerHTML={ { __html: body } } />
				<script src={ assets.script[0] } />
			</body>
		</html>
*/