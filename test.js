const Matter = require('./index.js');

(() => {
	const matter = new Matter()

	matter.on('card', (context) => {
		console.log(context)
	})

	// const decks = await matter.shelf()
	// const card = await matter.direct.reed.pull(deck[0])('fluence'))
	const card = matter.direct().reed.pull('deck[0]')('fluence')
	console.log(card)
})()