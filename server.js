const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const animals = {
	'cardinal': {
		'species': 'bird',
		'color': 'red',
	},
	'gray squirrel': {
		'species': 'rodent',
		'color': 'gray',
	},
	'porcupine': {
		'species': 'rodent',
		'color': 'brown',
	},
	'unknown': {
		'species': 'unknown',
		'color': 'unknown',
	}
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
	res.json(animals)
})

app.get('/api/:species', (req, res) => {
	// console.log(req.params.species)
	const species = req.params.species.toLowerCase()
	if(animals[species]) {
		res.json(animals[species])
	} else {
		res.json(animals['unknown'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`Port: ${PORT}`)
})