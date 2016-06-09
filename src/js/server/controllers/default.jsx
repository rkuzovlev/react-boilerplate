import React from 'react'
import { renderToString } from 'react-dom/server'
import ServerHTML from './../views/index';
import Iso from 'iso';

const iso = new Iso()

export function *index(argument) {
	iso.add('<div>Hello, World!</div>', { someSampleData: 'Hello, World! qdw' })
	const irender = iso.render()

	// const props = { body, assets, locale, title, description }
	const props = { body: irender, assets: {}, locale: "ru", title: "Title", description: "description" }
    const html = renderToString(<ServerHTML { ...props } />)
    this.status = 200;
    this.body = `<!DOCTYPE html>${html}`
}


export function *index2(argument) {
	// this.body = 'Hello World 2';
	iso.add('<div>Hello, World!</div>', { someSampleData: 'Hello, World! qdw' })
	const result = iso.render()

	console.log('result', result);

	this.body = result;
}

export default {
	index,
	index2
}