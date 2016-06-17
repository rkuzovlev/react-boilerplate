import Iso from 'iso';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ReactHelmet from 'react-helmet';

import routes from './routes.jsx';

Iso.bootstrap(function (state, node) {
	console.log('Iso.bootstrap', state, node);

	ReactDOM.render(
		<Router routes={routes} history={browserHistory}/>,
		document.getElementById('content')
	);
});