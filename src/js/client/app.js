import { h1 } from './test.jsx'
import Iso from 'iso';

Iso.bootstrap(function (state, node) {
	console.log('Iso.bootstrap', state, node);
})

const qwe = "eq";
var qq = '123';
console.log(qwe, qq);

console.log('h1', h1)