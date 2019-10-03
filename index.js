// Node snippet to print requests from a webhook
// To use: 
// 		1. Run ngrok tunnel to port 3000 in terminal window ("ngrok http 3000")
//		2. node test.js in another window
// 		3. Point your webhook to the ngrok URL :)

const request = require('request');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const server = http.createServer(app);

app.get("/", function(req, res) {
	console.log(req.body);
	res.sendStatus(200);
})

app.post("/", function(req, res) {
	console.log(req.body);
	res.status(200).send(req.body);
})

server.listen(process.env.PORT || 3000, function() {
	console.log('Express server listening on port 3000.');
})