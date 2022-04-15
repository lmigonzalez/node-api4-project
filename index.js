const server = require('./server')

const PORT = 7000


server.listen(PORT, ()=>{
	console.log(`server running on port: ${PORT}`)
})