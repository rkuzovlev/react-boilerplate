import { h1 } from './test.jsx'
import Iso from 'iso';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import ReactHelmet from 'react-helmet';


Iso.bootstrap(function (state, node) {
	console.log('Iso.bootstrap', state, node);
})