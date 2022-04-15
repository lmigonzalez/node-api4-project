const express = require('express');

const server = express();
server.use(express.json())

const users = [
	{
		username: 'Jack',
		password: 'jackimarciano1'
	},
	{
		username: 'Sasha',
		password: 'sashamorgan34'
	},
	{
		username: 'Susana',
		password: 'susanefox123'
	}
]
server.get('/', (req, res) =>{
	res.status(200).send({
		message: 'hello'
	})
})

server.get('/api/users', (req, res) =>{
	res.status(200).send(users)
})

server.post('/api/register', (req, res)=>{
	const user = req.body;
	users.push(user)
	res.status(201).send(user)
})

server.post('/api/login', (req, res)=>{
	
	res.status(201).send({
		message: 'welcome back'
	})
})




module.exports = server;