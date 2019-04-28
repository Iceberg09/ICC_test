const http = require ('http')
const fs = require ('fs')
const hostname = '127.0.0.1'
let port = 8080

fs.readFile ('index.html', (error, html) => {
	if(error){
		console.log('HA!')
		throw error
	} else{
		let server = http.createServer((request, response) => {
			response.statusCode = 200
			response.setHeader('Content-type', 'text/html')
			response.write(html);
			response.end();
		})
		server.listen (port, hostname, ()=> {
			console.log ('port ' + port + ' is running the server')
		})
	}
})

